<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function getCoursesWithSubjects()
    {
        $courses = Course::with('subjects')->get();

        return response()->json($courses);
    }

    public function index()
    {
        $courses = Course::all();
        return response()->json($courses);
    }

    public function show($id)
    {
        $course = Course::find($id);
        return $course ? response()->json($course) : response()->json(['message' => 'Not found'], 404);
    }

    public function store(Request $request)
    {
        $course = Course::create($request->all());
        return response()->json($course, 201);
    }

    public function update(Request $request, $id)
    {
        $course = Course::find($id);
        if (!$course) {
            return response()->json(['message' => 'Not found'], 404);
        }
        $course->update($request->all());
        return response()->json($course);
    }

    public function destroy($id)
    {
        $course = Course::find($id);
        if (!$course) {
            return response()->json(['message' => 'Not found'], 404);
        }
        $course->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}
