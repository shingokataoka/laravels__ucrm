<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Models\Customer;

use App\Http\Controllers\Api\AnalysisController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('api_test', function(Request $request) {
    return 11;
});

Route::middleware(['auth:sanctum'])->get('customers/search', function(Request $request) {
    $search = $request->search;
    return Customer::searchCustomers($search)->paginate(30);
})->name('api.customers.search');

Route::middleware(['auth:sanctum'])
    ->post('analysis', [AnalysisController::class, 'index'])
    ->name('api.analysis');

Route::get('test_analysis', [AnalysisController::class, 'index'])
    ->name('api.test.analysis');
