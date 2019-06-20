<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('Home');
});
Route::get('/article', function () {
    return view('Home');
});
Route::get('/about', function () {
    return view('Home');
});
Route::get('/contact', function () {
    return view('Home');
});

Route::get('/admin', function () {
    // return view('Admin.AdminHome') ;
    return view('Admin.login');
});

Route::get('/admin/dashboard', function () {
    return view('Admin.AdminHome') ;
});

// Route::get('/admin/login', function () {
//      return view('Admin.login');
// });

Route::post('/adminlogin', 'AdminLoginController@index' );

// Route::get('/dashboard', 'AdminLoginController@home' );
// Route::get('/admin/category', 'CategoryController@index' );
// Route::get('/admin/category', 'CategoryResourceController@index' );
Route::resource('/admin/category', 'CategoryResourceController');

Route::resource('/admin/blog', 'BlogResourceController');

// Route::get('/admin/category', function () {
//     return view('Admin.Category') ;
// });



Route::resource('Todo', 'TodoController');