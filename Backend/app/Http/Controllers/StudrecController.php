<?php

namespace App\Http\Controllers;

use App\Models\Studrec;
use Illuminate\Http\Request;

class StudrecController extends Controller
{
    public function getStudrecs()
    {
        $subclasses = Studrec::with('studrecs')->get();
    
        return response()->json($subclasses);
    }

    public function index()
    {
        $studrecs = Studrec::all();
        return response()->json($studrecs);
    }

    public function show($id)
    {
        $studrec = Studrec::find($id);
        return $studrec ? response()->json($studrec) : response()->json(['message' => 'Not found'], 404);
    }

    public function store(Request $request)
{
    $validatedData = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:studrecs,email',
        'password' => 'required|string|min:8', // Use bcrypt later
    ]);

    $validatedData['password'] = bcrypt($validatedData['password']);
    $studrec = Studrec::create($validatedData);

    return response()->json($studrec, 201);
}

    public function update(Request $request, $id)
    {
        $studrec = Studrec::find($id);
        if (!$studrec) {
            return response()->json(['message' => 'Not found'], 404);
        }
        $studrec->update($request->all());
        return response()->json($studrec);
    }

    public function destroy($id)
    {
        $studrec = Studrec::find($id);
        if (!$studrec) {
            return response()->json(['message' => 'Not found'], 404);
        }
        $studrec->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}
