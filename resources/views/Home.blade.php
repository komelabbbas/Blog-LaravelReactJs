<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Todo (using Laravel and Vue Js)</title>

       
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">
        
        {{-- <link rel="stylesheet" href="{{ asset('css/app.css') }}"> --}}
        <!-- Styles -->
      
    </head>
    <body>

       <div class="row">
            <div class="container-fluid">

                    {{-- React Js Todo List --}}
                    <div id="React_Object"> </div>
                    
            </div>
       </div>
      
      
        <script src="{{ asset('js/app.js') }}"></script>

    </body>
</html>
