<?php

use App\Http\Controllers\AuthController;
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
