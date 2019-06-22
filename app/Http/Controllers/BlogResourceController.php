<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Blog;


class BlogResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('Admin.AdminHome') ;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
         $Blog = Blog::with('category')->find($id);
         return $Blog ;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      
        if($request->BlogImage == '')
        {
            Blog::where('id', $id)
            ->update([
                'title' => $request->title ,
                'description' => $request->description ,
                'Categoryid' => $request->Category  ,
             ]);
        }
        else{
            $image = $request->get('BlogImage');
            $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            \Image::make($request->get('BlogImage'))->save(public_path('images/').$name);
    
            Blog::where('id', $id)
            ->update([
                'title' => $request->title ,
                'description' => $request->description ,
                'Categoryid' => $request->Category  ,
                'photo' => $name
             ]);
        }
       

        $Blog = Blog::find(1);
        return $Blog ;
       
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
