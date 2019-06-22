<?php

use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('blogs')->insert([
            'Categoryid' => 2 ,
            'title' => "Beautiful simple Post" ,
            'description' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni fuga minima omnis ab placeat hic, consequatur, sequi, iure obcaecati sed assumenda aut quibusdam in? Quaerat sequi quam illum est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magni fuga minima omnis ab placeat hic, consequatur, sequi, iure obcaecati sed assumenda aut quibusdam in? Quaerat sequi quam illum est."  ,
            'photo' => '1561026270.jpeg' ,
            'updated_at' => '2019-06-22 05:17:53'
            
        ]);
    }
}
