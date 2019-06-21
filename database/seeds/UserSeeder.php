<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => "Bytefury" ,
            'email' => "bytefury@gmail.com" ,
            'password' => '$2y$10$vJJ8.YPtd81zQqgfUackSeuP6UtVOu9TSAA9Vh2CxqPJgTNKXt1PK'
        ]);
    }
}
