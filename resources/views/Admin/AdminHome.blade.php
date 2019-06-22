<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset = "utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laraspace - Laravel Admin</title>
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,700' rel='stylesheet' type='text/css'>
    <script src="{{ asset('assets/global/js/core/pace.js') }}"></script>
    <!-- START CORE CSS-->
    
    <link href="{{ asset('assets/global/css/laraspace.css') }}" rel="stylesheet" type="text/css">
    <!-- END CORE CSS -->


    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="csrf-token" content="ju0AJjtVlV2LnL9lhkK9fOpg7DhuaMFVgR1mifUv">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="/assets/global/img/favicons/mstile-144x144.png">
    <meta name="msapplication-config" content="/assets/global/img/favicons/browserconfig.xml">
    <meta name="theme-color" content="#333333">

    <link rel="apple-touch-icon" sizes="57x57" href="{{ asset('assets/global/img/favicons/apple-touch-icon-57x57.png') }}" />
    <link rel="apple-touch-icon" sizes="60x60" href="{{ asset('assets/global/img/favicons/apple-touch-icon-60x60.png') }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('assets/global/img/favicons/apple-touch-icon-72x72.png') }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('assets/global/img/favicons/apple-touch-icon-76x76.png') }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ asset('assets/global/img/favicons/apple-touch-icon-114x114.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('assets/global/img/favicons/apple-touch-icon-120x120.png') }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('assets/global/img/favicons/apple-touch-icon-144x144.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('assets/global/img/favicons/apple-touch-icon-152x152.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/global/img/favicons/apple-touch-icon-180x180.png') }}">
    <link rel="icon" type="image/png" href="{{ asset('assets/global/img/favicons/favicon-32x32.png') }}" >
    {{-- <link rel="icon" type="image/png" href="{{ asset('assets/global/img/favicons/android-chrome-192x192.png') }}"> --}}
    
    <link rel="icon" type="image/png" href="{{ asset('assets/global/img/favicons/favicon-96x96.png') }}" sizes="96x96">
    <link rel="icon" type="image/png" href="{{ asset('assets/global/img/favicons/favicon-16x16.png') }}" sizes="16x16">
    <link rel="manifest" href="{{ asset('assets/global/img/favicons/manifest.json') }}">
    <link rel="mask-icon" href="{{ asset('assets/global/img/favicons/safari-pinned-tab.svg') }}" color="#333333">
    <link rel="shortcut icon" href="{{ asset('assets/global/img/favicons/favicon.ico') }}">
   

    {{-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> --}}
   
</head>
<body>

    
    
    <div id="ADMIN-REACTJS"> </div>
    

<!-- START GLOBAL  SCRIPT -->
<script src="{{ asset('assets/global/js/core/plugins.js') }}"></script>

<!-- END GLOBAL  SCRIPT -->
<script src="{{ asset('assets/pages/users/users.js') }}"></script>
<script src="{{ asset('js/app.js') }}"></script>

</body>
</html>
