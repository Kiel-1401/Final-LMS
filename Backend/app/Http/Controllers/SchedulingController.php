<?php

namespace App\Http\Controllers;

use App\Models\Scheduling;
use Illuminate\Http\Request;

class SchedulingController extends Controller
{   
    public function getSchedules()
    {
        $schedules = Scheduling::with('schedules')->get();
    
        return response()->json($schedules);
    }


    public function index()
    {
        $schedules = Scheduling::all();
        return response()->json($schedules);
    }

    public function show($id)
    {
        $schedule = Scheduling::find($id);
        return $schedule ? response()->json($schedule) : response()->json(['message' => 'Not found'], 404);
    }

    public function store(Request $request)
    {
        $schedule = Scheduling::create($request->all());
        return response()->json($schedule, 201);
    }

    public function update(Request $request, $id)
    {
        $schedule = Scheduling::find($id);
        if (!$schedule) {
            return response()->json(['message' => 'Not found'], 404);
        }
        $schedule->update($request->all());
        return response()->json($schedule);
    }

    public function destroy($id)
    {
        $schedule = Scheduling::find($id);
        if (!$schedule) {
            return response()->json(['message' => 'Not found'], 404);
        }
        $schedule->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
}
