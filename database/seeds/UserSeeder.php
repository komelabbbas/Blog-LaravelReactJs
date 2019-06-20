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
            'password' => "123456"
        ]);
    }
}
