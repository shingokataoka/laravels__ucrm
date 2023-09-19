<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Customer;
use App\Models\Purchase;
use App\Models\Item;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            UserSeeder::class,
            ItemSeeder::class,
            RankSeeder::class,
        ]);

        Customer::factory(10000)->create();

        // Purchaseのダミーをfactoryで100個生成
        // 各purchaseに、Itemをランダムに1~3品番ずつ[itemのid,数量]でinsertする
        $items = Item::all();
        Purchase::factory(30000)->create()->each(function (Purchase $purchase) use($items) {
            $itemIds = $items->random(mt_rand(1,3))->pluck('id')->toArray();
            foreach($itemIds as $itemId) {
                $purchase->items()->attach($itemId, ['quantity' => mt_rand(1,9)]);
            }
        });

    }
}
