<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Кредит на любые цели от 4,5%">

    <!-- favicon -->

    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="favicon/site.webmanifest">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">


    <title>Кредит на любые цели</title>

    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ mix('css/style.css') }}" rel="preload" as="style" onload="this.rel='stylesheet'">
</head>
<body>
<!-- ./header -->
<div id="app">
    @yield('content')
</div>

<!-- ./footer -->

@include('layouts._counters', [
        'counters' => [
            'facebook' =>[],
            'yandexMetrika' => [88090554],
            'google' => []
            ]
            ])

</body>
</html>
