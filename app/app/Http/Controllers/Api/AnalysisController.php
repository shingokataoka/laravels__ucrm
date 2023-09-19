<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Order;
use App\Services\AnalysisService;
use App\Services\DecileService;
use App\Services\RfmService;

class AnalysisController extends Controller
{
    public function index(Request $request)
    {
        if ( \Illuminate\Support\Facades\Route::currentRouteName() === 'api.test.analysis' ) {
            $request->startDate = '2023-09-02';
            $request->endDate = '2023-10-15';
            $request->rPrms = [14, 28, 60, 90];
            $request->fPrms = [7, 5, 3, 2];
            $request->mPrms = [300000, 200000, 100000, 30000];
            $request->type = 'rfm';
        }

        $subQuery = Order::dateBetween($request->startDate, $request->endDate);
        if ($request->type === 'perDay') $data = AnalysisService::perDay($subQuery);
        elseif ($request->type === 'perMonth') $data = AnalysisService::perMonth($subQuery);
        elseif ($request->type === 'perYear') $data = AnalysisService::perYear($subQuery);
        elseif ($request->type === 'decile') $data = DecileService::decile($subQuery);
        elseif ($request->type === 'rfm') $data = RfmService::rfm($subQuery);
        return $data;
        // dd('Api/AnalysisCotroller - ' . __FUNCTION__);
    }
}
