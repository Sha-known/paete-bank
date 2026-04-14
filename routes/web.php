<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HOHomeController;

Route::get('/', [HOHomeController::class, 'index'])->name('home');