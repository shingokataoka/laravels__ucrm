<?php
namespace App\Services;

class AnalysisService
{
    private static function per($subQuery, $date)
    {
        // created_atをdate_formatで %Y-%m-%d などで整形する
        // これをas dateにして、dateでgroupByしたtotalを取得する
        // whereでstatus=trueのみに絞る。購入キャンセルは含めないため。
        $subQuery->selectRaw("
            SUM(subtotal) AS total,
            date_format(created_at, '{$date}') AS date
        ")
            ->where('status', true)
            ->groupBy('date')
            ->orderBy('date');

            if ( !$subQuery->exists() ) return null;

            $data = $subQuery->get();
            $labels = $data->pluck('date');
            $totals = $data->pluck('total');
            return [
                'data' => $data,
                'labels' => $labels,
                'totals' => $totals
            ];
    }

    public static function perDay($subQuery)
    {
       return self::per($subQuery, '%Y-%m-%d');
    }

    public static function perMonth($subQuery)
    {
        return self::per($subQuery, '%Y-%m');
    }

    public static function perYear($subQuery)
    {
        return self::per($subQuery, '%Y');
    }

}
