<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function getCurrentUser(Request $request)
     {
         return response()->json($request->user());
     }


    public function index()
{
    if (Auth::check()) {
        $userId = Auth::id();
        Log::info("Authenticated user ID: " . $userId); // Log the user ID
        
        $user = User::with('role')->find($userId);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        return response()->json($user);
    }

    return response()->json(['error' => 'Unauthorized'], 401);
}
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
 {
//     $validatedData = $request->validate([
//         'name' => 'required|string|max:255',
//         'email' => 'required|string|email|max:255|unique:users',
//         'password' => 'required|string|min:8|confirmed',
//     ]);

//     $user = User::create([
//         'name' => $validatedData['name'],
//         'email' => $validatedData['email'],
//         'password' => bcrypt($validatedData['password']),
//     ]);

//     return response()->json($user, 201);
}

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
{
    // $user = User::find($id);

    // if (!$user) {
    //     return response()->json(['error' => 'User not found'], 404);
    // }

    // $validatedData = $request->validate([
    //     'name' => 'sometimes|string|max:255',
    //     'email' => 'sometimes|string|email|max:255|unique:users,email,' . $id,
    //     'password' => 'nullable|string|min:8|confirmed',
    // ]);

    // $user->update(array_filter([
    //     'name' => $validatedData['name'] ?? $user->name,
    //     'email' => $validatedData['email'] ?? $user->email,
    //     'password' => isset($validatedData['password']) ? bcrypt($validatedData['password']) : $user->password,
    // ]));

    // return response()->json($user);
}


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
{
    // $user = User::find($id);

    // if (!$user) {
    //     return response()->json(['error' => 'User not found'], 404);
    // }

    // $user->delete();

    // return response()->json(['message' => 'User deleted successfully']);
}

}
