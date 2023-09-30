<?php

namespace App\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class SubTotal implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     */
    public function apply(Builder $builder, Model $model): void
    {
        $sql = '
            SELECT
                purchases.id AS id,
                item_purchase.id AS pivot_id,
                items.price * item_purchase.quantity AS subtotal,
                customers.id AS customer_id,
                customers.name AS customer_name,
                customers.kana AS customer_kana,
                items.id AS item_id,
                items.name AS item_name,
                items.price AS item_price,
                item_purchase.quantity AS quantity,
                purchases.status AS status,
                purchases.created_at AS created_at,
                purchases.updated_at AS updated_at
            FROM purchases
            LEFT JOIN customers ON purchases.customer_id = customers.id
            LEFT JOIN item_purchase ON purchases.id = item_purchase.purchase_id
            LEFT JOIN items ON item_purchase.item_id = items.id
            ';

        $builder->fromSub($sql, 'sub_totals');
    }
}
