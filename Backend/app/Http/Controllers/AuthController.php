<?php

namespace App\Http\Controllers;

use App\Models\Studrec;
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
        'email' => 'required|email',
        'password' => 'required',
    ]);

    // Check for students first
    $student = Studrec::where('email', $request->email)->first();
    if ($student && Hash::check($request->password, $student->password)) {
        $token = $student->createToken('Student Access Token')->plainTextToken;
        return response()->json(['token' => $token]);
    }

    // Check for users
    $user = User::where('email', $request->email)->first();
    if ($user && Hash::check($request->password, $user->password)) {
        $token = $user->createToken('Personal Access Token')->plainTextToken;
        return response()->json(['token' => $token]);
    }

    throw ValidationException::withMessages([
        'email' => ['The provided credentials are incorrect.'],
    ]);
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
