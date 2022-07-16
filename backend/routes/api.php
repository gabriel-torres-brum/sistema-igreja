<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\MemberController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix("auth")->group(function () {
    Route::post("login", [AuthController::class, "login"]);

    Route::post("register", [AuthController::class, "register"])->middleware('api');
    Route::post("refresh", [AuthController::class, "refresh"])->middleware('api');
    Route::post("me", [AuthController::class, "me"])->middleware('api');
    Route::post("logout", [AuthController::class, "logout"])->middleware('api');
});

Route::prefix("members")->controller(MemberController::class)->group(function () {
    Route::get("list", "list");
});
