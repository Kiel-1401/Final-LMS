<?php

namespace App\Http\Controllers;

use App\Models\Studrec;
use Illuminate\Http\Request;

class StudrecController extends Controller
{
    /**
     * Display a listing of the students.
     */
    public function index()
    {
        $students = Studrec::with('role')->get(); // Eager load the role relationship
        return response()->json($students);
    }

    /**
     * Show the details of a specific student.
     */
    public function show($studID)
    {
        $student = Studrec::with('role')->find($studID);

        if (!$student) {
            return response()->json(['error' => 'Student not found.'], 404);
        }

        return response()->json($student);
    }

    /**
     * Store a new student in the database.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'studID' => 'required|unique:studrec,studID',
            'lname' => 'required|string|max:255',
            'fname' => 'required|string|max:255',
            'password' => 'required|string|min:8',
            'role_id' => 'required|exists:roles,id',
        ]);

        $validated['password'] = bcrypt($validated['password']); // Hash the password

        $student = Studrec::create($validated);

        return response()->json($student, 201);
    }

    /**
     * Update a student's details.
     */
    public function update(Request $request, $studID)
    {
        $student = Studrec::find($studID);

        if (!$student) {
            return response()->json(['error' => 'Student not found.'], 404);
        }

        $validated = $request->validate([
            'lname' => 'string|max:255',
            'fname' => 'string|max:255',
            'password' => 'nullable|string|min:8',
            'role_id' => 'exists:roles,id',
        ]);

        if (isset($validated['password'])) {
            $validated['password'] = bcrypt($validated['password']);
        }

        $student->update($validated);

        return response()->json($student);
    }

    /**
     * Remove a student from the database.
     */
    public function destroy($studID)
    {
        $student = Studrec::find($studID);

        if (!$student) {
            return response()->json(['error' => 'Student not found.'], 404);
        }

        $student->delete();

        return response()->json(['message' => 'Student deleted successfully.']);
    }
}
