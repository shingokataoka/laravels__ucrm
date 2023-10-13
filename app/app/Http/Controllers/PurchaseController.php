<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePurchaseRequest;
use App\Http\Requests\UpdatePurchaseRequest;
use App\Models\Purchase;
use App\Models\Item;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

use App\Models\Order;

class PurchaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::total()->paginate(20);

        return Inertia::render('Purchases/Index', compact('orders'));
    }

    /**‚
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $items = Item::where('is_selling', '=', true)->get();
        return Inertia::render('Purchases/Create', compact('items'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePurchaseRequest $request)
    {
        DB::beginTransaction();
        try {
            // throw new \Exception("エラーだよ");
            // 購入履歴を保存。つまりpurchasesに[customer_id, status=true]を保存
            $purchase = Purchase::create([
                'customer_id' => $request->customer_id,
                'status' => $request->status,
                'created_at' => $request->date,
            ]);
            // この購入履歴の中間テーブルに[item_id, quantity]を保存
            foreach($request->items as $item) {
                $purchase->items()->attach($item['id'], [
                    'quantity' => $item["quantity"],
                ]);
            }
            DB::commit();
            session()->flash('status', 'success');
            session()->flash('message', '購入が完了しました。');
            $orders = Order::total()->paginate(20);
            $lastPage = $orders->lastPage();
            return to_route('purchases.index', ['page' => $lastPage]);
        } catch (\Exception $e) {
            DB::rollBack();
            session()->flash('status', 'error');
            session()->flash('message', 'エラー'.PHP_EOL.'購入できませんでした。'.PHP_EOL.'もう一度お願いします。');
            return Inertia::location( route('purchases.create') );
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(Purchase $purchase)
    {

$items = $purchase->items();

        // この購入情報を各種アイテムごとに欲しいのでpurchases.idでを取得
        $items = Order::where('id', '=', $purchase->id)->get();

        // この購入情報を合計金額で取得。よって一行レコードを取得
        $order = Order::total()
            ->where('id', $purchase->id)
            ->first();

        return Inertia::render('Purchases/Show', compact('items', 'order'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Purchase $purchase)
    {
        $order = Order::total()->where('id', $purchase->id)->first();

        $item_quantitys = Order::where('id', $purchase->id)->get()->pluck('quantity','item_id');

        $items = Item::all()->pluck(null,'id');
        foreach ($items as $id => $item) {
            $quantity = ( empty($item_quantitys[$id]) )? 0 : $item_quantitys[$id];
            $items[$id]['quantity'] = $quantity;
        }
        $items = $items->values();

        return Inertia::render('Purchases/Edit', compact('items', 'order') );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePurchaseRequest $request, Purchase $purchase)
    {
        $items = [];
        foreach ($request->items as $item) {
            if ($item['quantity'] === 0) continue;
            $items[$item['id']] = ['quantity' => $item['quantity']];
        }
        try {
            DB::beginTransaction();
            //purchasesテーブルの更新
            $purchase->status = $request->status;
            $purchase->save();
            // 中間テーブルitem_purchasesの更新
            // $purchase内のitemsに上書き保存。
            // つまり元の$purchase内のitmesを消して、$itemsを入れる
            $purchase->items()->sync($items);
            DB::commit();
            session()->flash('status', 'success');
            session()->flash('message', '購買情報を更新しました。');
        } catch(\Exception $e) {
            DB::rollback();
            session()->flash('status', 'error');
            session()->flash('message', '購買履歴の更新に失敗しました。');
        }

        return to_route('purchases.show', ['purchase' => $purchase->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Purchase $purchase)
    {
        dd('PurchaseControllerの ' . __FUNCTION__);
    }
}
