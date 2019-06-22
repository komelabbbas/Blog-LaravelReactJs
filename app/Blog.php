<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $table = 'blogs';
    protected $guarded = [];

    public function category()
    {
   
        return $this->hasOne('App\Category', 'id', 'Categoryid');
    }
}
