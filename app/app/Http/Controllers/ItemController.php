<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreItemRequest;
use App\Http\Requests\UpdateItemRequest;
use App\Models\Item;

use Inertia\Inertia;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $items = Item::select('id', 'name', 'memo', 'price', 'is_selling')->get();
        return Inertia::render('Items/Index', [
            'items' => $items,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Items/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreItemRequest $request)
    {
        Item::create([
            'name' => $request->name,
            'memo' => $request->memo,
            'price' => $request->price,
        ]);
        session()->flash('status', 'success');
        session()->flash('message', '商品を登録しました。');

        return to_route('items.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Item $item)
    {
        dd($item);
        dd('items/' . __FUNCTION__);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Item $item)
    {
        dd('items/' . __FUNCTION__);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateItemRequest $request, Item $item)
    {
        dd('items/' . __FUNCTION__);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Item $item)
    {
        dd('items/' . __FUNCTION__);
    }
}
