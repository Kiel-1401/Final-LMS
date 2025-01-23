<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SchedulingController;
use App\Http\Controllers\StudrecController;
use App\Http\Controllers\SubclassController;
use App\Http\Controllers\SubjectController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|-------------------------------------------------------------------------- 
| API Routes 
|-------------------------------------------------------------------------- 
|
| Here is where you can register API routes for your application. These 
| routes are loaded by the RouteServiceProvider within a group which 
| is assigned the "api" middleware group. Enjoy building your API! 
| 
*/

Route::post('/login', [AuthController::class, 'login']);

// Use the correct 'auth:sanctum' middleware for Sanctum authentication
Route::middleware('auth:sanctum')->get('/user', [UserController::class, 'index']);

Route::get('/subclasses', [SubclassController::class, 'getSubclassesWithSubjects']);
Route::get('/subjects', [SubjectController::class, 'getSubjects']);
Route::get('/studrecs', [StudrecController::class, 'getStudrecs']);
Route::get('/logins', [LoginController::class, 'getLogins']);
Route::get('/courses', [CourseController::class, 'getCourses']);

Route::apiResource('studrec', StudrecController::class);
Route::apiResource('login', LoginController::class);
Route::apiResource('course', CourseController::class);
Route::apiResource('scheduling', SchedulingController::class);