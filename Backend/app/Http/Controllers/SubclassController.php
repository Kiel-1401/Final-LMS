<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Subclass;
use Illuminate\Http\Request;

class SubclassController extends Controller
{
    public function getSubclassesWithSubjects()
{
    $subclasses = Subclass::with('subjects')->get();

    return response()->json($subclasses);
}
}
