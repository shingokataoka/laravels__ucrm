<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\Customer;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Purchase>
 */
class PurchaseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $decade = fake()->datetimeThisDecade();
        $datetime = $decade->modify('+0 years');
        return [
            'customer_id' => mt_rand( 1, Customer::count() ),
            'status' => fake()->boolean(),
            'created_at' => $datetime,
        ];
    }
}
