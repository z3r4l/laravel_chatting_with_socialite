<?php

use App\Http\Controllers\ChatController;
use App\Http\Controllers\GoogleController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;


Route::middleware('auth')->group(function(){
    Route::get('/',HomeController::class)->name('home');

    Route::get('/chat/{user:username}', [ChatController::class, 'show'])->name('chats.show');
    Route::post('/chat/{user:username}', [ChatController::class, 'store'])->name('chats.store');
});

Route::get('auth/google', [GoogleController::class, 'redirectToGoogle'])->name('google.login');
Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback'])->name('google.callback');

require __DIR__.'/auth.php';
