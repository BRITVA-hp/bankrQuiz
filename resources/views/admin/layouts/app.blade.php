<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="apple-touch-icon" sizes="152x152" href="/img/admin/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/img/admin/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/img/admin/favicon/favicon-16x16.png">
    <link rel="manifest" href="/img/admin/favicon/site.webmanifest">
    <link rel="mask-icon" href="/img/admin/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="/img/admin/favicon/favicon.ico">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-config" content="/img/admin/favicon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Админ Панель</title>
    <!-- Scripts -->
    <script src="{{ mix('js/admin-app.js') }}" defer></script>
</head>
<body>
    <div id="app">
        @yield('content')
    </div>
</body>
</html>
