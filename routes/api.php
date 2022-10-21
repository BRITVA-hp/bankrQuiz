<?php

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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::post('order-quiz',[\App\Http\Controllers\API\OrderController::class,'quizStore']);
Route::post('order',[\App\Http\Controllers\API\OrderController::class,'store']);

Route::get('counters', function (){
    return response()->json(['ym'=>88090554,'fbq'=>''],200);
});

Route::prefix('sanctum')->group(function() {
    Route::post('register', [\App\Http\Controllers\API\AuthController::class,'register']);
    Route::post('token', [\App\Http\Controllers\API\AuthController::class,'token']);
});

Route::middleware('auth:sanctum')->post('/check', function (Request $request) {
    return response()->json(['user' => $request->user()]);
});

Route::middleware('auth:sanctum')->post('/profile/update',[\App\Http\Controllers\API\ProfileController::class,'update']);

Route::middleware('auth:sanctum')->get('/orders',[\App\Http\Controllers\API\OrderController::class,'index']);
