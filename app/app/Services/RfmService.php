<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

class RfmService
{
    public static function rfm($subQuery)
    {
        // $subQuery。会員毎にまとめて、最終購入日、購入回数、合計金額を取得。
        // customer_id, customer_name, recentDate, recency, frequency, monetary
        // datediffで日付の差分、maxで日付の最新日
        $subQuery = DB::table($subQuery)->selectRaw('customer_id, MAX(customer_name) AS customer_name, MAX(created_at) AS recentDate, DATEDIFF(NOW(), MAX(created_at)) AS recency, COUNT(customer_id) AS frequency, SUM(subtotal) AS monetary')->groupBy('customer_id');

        // $subQuery。会員毎のRFMランクを計算し、取得
        // カラムは上記にr,f,mとランクが入ったのが加えればOK
        // CASE ...WHEN 条件 THEN 値 ...複数 END AS カラム名
        $bindParams = [
            ...request()->rPrms,
            ...request()->fPrms,
            ...request()->mPrms,
        ];
        // $bindParams = [
        //     14, 28, 60, 90,
        //     7, 5, 3, 2,
        //     300000, 200000, 100000, 30000,
        // ];
        $subQuery = DB::table($subQuery)->selectRaw('customer_id, customer_name,   recentDate, recency, frequency, monetary,
            CASE
                WHEN recency < ? THEN 5
                WHEN recency < ? THEN 4
                WHEN recency < ? THEN 3
                WHEN recency < ? THEN 2
                ELSE 1
            END AS r,
            CASE
                WHEN frequency >= ? THEN 5
                WHEN frequency >= ? THEN 4
                WHEN frequency >= ? THEN 3
                WHEN frequency >= ? THEN 2
                ELSE 1
            END AS f,
            CASE
                WHEN monetary >= ? THEN 5
                WHEN monetary >= ? THEN 4
                WHEN monetary >= ? THEN 3
                WHEN monetary >= ? THEN 2
                ELSE 1
            END AS m
        ', $bindParams);

        // $eachCount。ランク毎の数を計算する。確認用に全体の件数も取得してddで確認。
        // $eachCount = [
        //     ['rank'=>5, 'r'=>rが5の件数, 'f'=>fが5の件数, 'm'=>mが5の件数],
        //     ...（5〜1繰り返し）
        //     ['rank'=>1, 'r'=>rが1の件数, 'f'=>fが1の件数, 'm'=>mが1の件数],
        // ];
        //  ['r'=>5, rCount=>0]など件数0だとレコードなしになるけど、必要なので、rightJoinで「ranksにrを繋ぐ」方法でrCount=0でもranksにあれば0件で残す方法を使う

        // eachCountには[rank,r,f,m]をrank=5から入れていく
        // いったん$total, $rTotals, $fTotals, $mTotalsをだしてから配列に入れる
        $totalCount = DB::table($subQuery)->count();
        $rCountQuery = DB::table($subQuery)->selectRaw('ranks.rank AS rRank, COUNT(r) AS num')->rightJoin('ranks', 'ranks.rank', '=', 'r')->groupBy('ranks.rank')->orderBy('ranks.rank', 'desc');

        $fCountQuery = DB::table($subQuery)->selectRaw('ranks.rank AS fRank, COUNT(f) AS num')
            ->rightJoin('ranks', 'ranks.rank', '=', 'f')
            ->groupBy('ranks.rank')
            ->orderBy('ranks.rank', 'desc');
        $mCountQuery = DB::table($subQuery)->selectRaw('ranks.rank AS mRank, COUNT(m) AS num')
            ->rightJoin('ranks', 'ranks.rank', '=', 'm')
            ->groupBy('ranks.rank')
            ->orderBy('ranks.rank', 'desc');


        $eachCount = [];
        $key = 0;
        for ($rank = 5; $rank >= 1; $rank-- ) {
            $eachCount[] = [
                'rank' => $rank,
                'r' => $rCountQuery->pluck('num')[$key],
                'f' => $fCountQuery->pluck('num')[$key],
                'm' => $mCountQuery->pluck('num')[$key],
            ];
            $key++;
        }

        // $data。表の表示用にrとfの二次元で取得する
        // $data = [
        //   ['r_rank'=>r_5, 'f_5'=>f=5の件数, ..., 'f_1'=>f=1の件数],
        //   ['r_rank'=>r_4, 'f_5'=>f=5の件数, ..., 'f_1'=>f=1の件数],
        //   ['r_rank'=>r_3, 'f_5'=>f=5の件数, ..., 'f_1'=>f=1の件数],
        //   ['r_rank'=>r_2, 'f_5'=>f=5の件数, ..., 'f_1'=>f=1の件数],
        //   ['r_rank'=>r_1, 'f_5'=>f=5の件数, ..., 'f_1'=>f=1の件数],
        // ]
        $data = DB::table($subQuery)->selectRaw('
            CONCAT("r_", r) AS r_rank,
            COUNT(CASE WHEN f = 5 THEN 1 END) AS f_5,
            COUNT(CASE WHEN f = 4 THEN 1 END) AS f_4,
            COUNT(CASE WHEN f = 3 THEN 1 END) AS f_3,
            COUNT(CASE WHEN f = 2 THEN 1 END) AS f_2,
            COUNT(CASE WHEN f = 1 THEN 1 END) AS f_1
        ')->groupBy('r')
            ->orderBy('r_rank', 'desc')
            ->get();

        return [
            'data' => $data,
            'eachCount' => $eachCount,
            'totalCount' => $totalCount
        ];
    }

}
