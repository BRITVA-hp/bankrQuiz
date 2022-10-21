<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Route::get('/', [App\Http\Controllers\HomeController::class,'index']);
Route::get('/quiz', [\App\Http\Controllers\HomeController::class,'quiz'])->name('home.quiz');
Route::get('/politic', [\App\Http\Controllers\HomeController::class,'politic'])->name('home.quiz');
Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::post('/', [App\Http\Controllers\HomeController::class, 'store'])->name('home.store');

Route::group(
    [
        'prefix' => 'admin',
        'as' => 'admin.',
        //'middleware' => ['auth']
    ],
    function (){
        Route::get('{vue?}', function () {
            return view('admin.index');
        })->where('vue', '.*');
    }
);

