<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'kana',
        'tel',
        'email',
        'postcode',
        'address',
        'birthday',
        'gender',
        'memo',
    ];

    public function scopeSearchCustomers($query, $search)
    {
        // 元とは別のクローン$queryを作成
        $cloneQuery = clone $query;

        // kana部分一致 or tel前方一致で検索
        $cloneQuery->where('kana', 'like', "%{$search}%")
            ->orWhere('tel', 'like', "{$search}%");
        // 検索結果にヒットするレコードあるならそれをreturn
        if ($cloneQuery->exists()) return $cloneQuery;

        // 検索結果にヒットしなければ元の$queryを返す
         return $query;
    }
}
