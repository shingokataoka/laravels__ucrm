<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Scopes\SubTotal;

class Order extends Model
{
    use HasFactory;

    public static function booted()
    {
        static::addGlobalScope(new SubTotal);
    }

    public function scopeTotal($query)
    {
        // id customer_id total status created_at udpated_at
        $query->selectRaw('
            id,
            customer_id,
            customer_name,
            customer_kana,
            SUM(subtotal) AS total,
            status,
            created_at,
            updated_at
        ')->groupBy('id');
        return $query;
    }

    public function scopeDateBetween($query, $startDate='0001-01-01', $endDate='9999-12-31')
    {
        $query->where('created_at', '>=', $startDate . ' 00:00:00')
            ->where('created_at', '<=', $endDate . ' 23:59:59');

        return $query;
    }
}
