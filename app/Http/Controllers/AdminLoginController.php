<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AdminLoginController extends Controller
{
    public function index(Request $request)
    {
        
         $input = $request->only('email', 'password');
        
        $jwt_token = null;
 
        try{
            if (!$jwt_token = JWTAuth::attempt($input)) {
                return response()->json([
                    'success' => false,
                    'token' => '',
                ]);
            }
        }
        catch(JWTException $ex){
            return response()->json([
                'success' => false,
                'token' => '',
            ]);
        }
        
 
        return response()->json([
            'success' => true,
            'token' => $jwt_token,
        ]);

        
        // $verify = User::where(['email' => $request->email, 'password' => $request->password])->count() ;
        //  return $verify;
        
        
    }

   
}
