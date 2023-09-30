<?php
namespace App\Services;

use Illuminate\Support\Facades\DB;

class DecileService
{
    public static function decile($subQuery)
    {
        // $subQuery。会員毎にgroupByして購入金額降順にする、顧客ID,顧客名,合計金額
        $subQuery->selectRaw('customer_id, customer_name, SUM(subtotal) AS total')
            ->groupBy('customer_id');

        // 合計金額高い順（total高順）に 全体人数/10 になるようにグループ分けする
        //   つまり第一グループ = total高い10%のグループ、第二グループはtotal二番目に高い...にする
        $subQuery = DB::table($subQuery)
            ->selectRaw('customer_id, customer_name, total,
                ntile(10) OVER (ORDER BY total DESC) AS decile
            ');

        // decileでグループ化して、グループ番号、四捨五入した平均金額、グループ合計金額を取得
        // 取得するカラムは、decile、average、totalPerDecile
        $subQuery = DB::table($subQuery)
            ->selectRaw('decile, ROUND(AVG(total)) AS average, SUM(total) AS totalPerDecile')
            ->groupBy('decile');

        // 構成比(グループの合計/全体合計 * 100)を取得して、カラム名totalRatioで加える。
        // カラム decile、average、totalPerDecile、totalRatio、を取得して$dataに入れる
        $totalPerAll = DB::table($subQuery)->sum('totalPerDecile');
        $data = DB::table($subQuery)->selectRaw(
                'decile, average, totalPerDecile,
                ROUND(totalPerDecile / ? * 100 , 3) AS totalRatio',
                [$totalPerAll]
            )->get();

        // $labelsにdecileを入れて、$totalsにtotalPerDecileを入れる
        $labels = $data->pluck('decile');
        $totals = $data->pluck('totalPerDecile');

        // decileが10グループ未満ならnullを返す
        if (!$labels || count($labels) < 10) return null;

        // $data, $labels、$totalsを返す
        return [
            'data' => $data,
            'labels' => $labels,
            'totals' => $totals,
        ];
    }

}
