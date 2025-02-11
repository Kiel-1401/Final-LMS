<?php

namespace App\Http\Controllers;

use App\Models\Login;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function getLogins()
    {
        $logins = Login::with('role')->get();
        // $logins = Login::select('role', 'deg', 'usr','email','loginID')->get();
    
        return response()->json($logins);
    }

    public function index()
    {
        $logins = Login::all();
        return response()->json($logins);
    }

    public function show($id)
    {
        $login = Login::find($id);
        return $login ? response()->json($login) : response()->json(['message' => 'Not found'], 404);
    }

    public function store(Request $request)
{
    $loginData = $request->all();

    // Default value for 'usr'
    if (!$request->has('usr')) {
        $loginData['usr'] = 'Others';
    }

    // Default value for 'email' based on 'usr'
    $loginData['email'] = $loginData['usr'] . '@sicc.edu';

    // Default value for 'password'
    if (!$request->has('password')) {
        $loginData['password'] = bcrypt('default_password'); // Hash a default password
    }

    // Default value for 'rnk'
    if (!$request->has('rnk')) {
        $loginData['rnk'] = 'default_rank';
    }

    $login = Login::create($loginData);

    return response()->json($login, 201);
}



    public function update(Request $request, $id)
    {
        $login = Login::find($id);
        if (!$login) {
            return response()->json(['message' => 'Not found'], 404);
        }
        $login->update($request->all());
        return response()->json($login);
    }

    public function destroy($id)
    {
        $login = Login::find($id);
        if (!$login) {
            return response()->json(['message' => 'Not found'], 404);
        }
        $login->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }

    
}
