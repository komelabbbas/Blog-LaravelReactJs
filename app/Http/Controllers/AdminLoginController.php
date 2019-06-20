<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class AdminLoginController extends Controller
{
    public function index(Request $request)
    {
        $verify = User::where(['email' => $request->email, 'password' => $request->password])->count() ;
        
         return $verify;
        
        
    }

    // public function home()
    // {
    //     return view('Admin.AdminHome') ;
    // }
}
