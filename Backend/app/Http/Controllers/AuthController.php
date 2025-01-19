<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'identifier' => 'required',
            'password' => 'required',
            'user_type' => 'required|in:student,other', // 'student' or 'other'
        ]);

        $user = null;

        if ($request->user_type === 'student') {
            $user = \App\Models\Studrec::where('studID', $request->identifier)->with('role')->first();
        
            if ($user) {
                if (Hash::check($request->password, $user->password)) {
                    if (!$user->role) {
                        return response()->json(['error' => 'Role not assigned to this student.'], 400);
                    }
        
                    $token = $user->createToken('Student Personal Access Token')->plainTextToken;
        
                    return response()->json([
                        'token' => $token,
                        'role' => $user->role_id,
                    ]);
                } else {
                    return response()->json(['error' => 'Invalid credentials. Password mismatch.'], 401);
                }
            } else {
                return response()->json(['error' => 'Student not found.'], 404);
            }
    
        } else {
            // Find the user by email in 'users'
            $user = User::where('email', $request->identifier)->first();
            if ($user) {
                if (Hash::check($request->password, $user->password)) {
                    $token = $user->createToken('User Personal Access Token')->plainTextToken;
                    return response()->json(['token' => $token]);
                } else {
                    return response()->json(['error' => 'Invalid credentials. Password mismatch.'], 401);
                }
            } else {
                return response()->json(['error' => 'User not found.'], 404);
            }
        }
    }

    
    public function logout(Request $request)
    {
        $user = Auth::user();

        if ($user) {
            $user->tokens->each(function ($token) {
                $token->delete();
            });

            return response()->json(['message' => 'Logged out successfully.']);
        }

        return response()->json(['message' => 'User not found.'], 404);
    }
}
