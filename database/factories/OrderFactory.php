<?php

namespace Database\Factories;

use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class OrderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Order::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
                'name' => $this->faker->name,
                'phone' => $this->faker->unique()->phoneNumber,
                'status' => $this->faker->randomKey(['new'=>'Новый','cancel'=>'Отменен']),
                'created_at' => $this->faker->dateTimeBetween('-30 days','now')->format('Y-m-d H:i:s'),
                //'updated_at' => Carbon::now()
        ];
    }
}
