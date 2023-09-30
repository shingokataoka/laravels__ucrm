<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ItemController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\AnalysisController;

use Illuminate\Support\Facades\Storage;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/test/theme', function() {
    return Inertia::render('Test/Theme');
})->name('test.theme');

Route::get('/dashboard', function () {
    // Storage::disk('public')->put('hoge1.txt', 'testテスト');
    for($i=1; $i<=3; $i++) {
        dd( storage_path('a') );
        Storage::disk('public')->makeDirectory("dir{$i}");
        Storage::disk('public')->makeDirectory("dir{$i}");
        Storage::disk('public')->put("dir1/dhoge{$i}.txt", 'testテスト');
        Storage::disk('public')->setVisibility("dir{$i}", 'private');
        Storage::disk('public')->setVisibility("dhoge{$i}.txt", 'private');
        dump( Storage::disk('public')->getVisibility("dir{$i}") );
        Storage::disk('public')->deleteDirectory("dir{$i}");

        // dump( Storage::disk('public')->getVisibility("dir1/dhoge{$i}.txt") );
    }
    dd('Storageのpublicに保存');
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::resource('items', ItemController::class)
    ->middleware(['auth', 'verified']);

Route::resource('customers', CustomerController::class)
    ->middleware(['auth', 'verified']);

Route::resource('purchases', PurchaseController::class)
    ->middleware(['auth', 'verified']);

Route::middleware(['auth', 'verified'])
    ->get('analysis', [AnalysisController::class, 'index'])
    ->name('analysis');

require __DIR__.'/auth.php';
