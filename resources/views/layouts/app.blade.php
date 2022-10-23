<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Рассчитайте стоимость списания долгов «под ключ»">

    <!-- favicon -->

    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="favicon/site.webmanifest">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">


    <title>Законное списание долгов в Вашем городе</title>

    <!-- b-5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
            crossorigin="anonymous"></script>
    <!-- b-5 -->

    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ mix('css/main.css') }}" rel="preload" as="style" onload="this.rel='stylesheet'">
    <link href="{{ mix('css/media.css') }}" rel="preload" as="style" onload="this.rel='stylesheet'">
</head>
<body>

<header class="header">
    <nav class="nav">
        <div class="container d-flex justify-content-between align-items-center">
            <img class="logo" src="./img/nav/logo.svg" alt="">

            <h3 class="nav__title d-none d-md-block">Законное списание долгов в Вашем городе</h3>

            <button class="btn nav__btn d-none d-sm-block" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">Бесплатная консультация</button>
            <button class="nav-btn-mob d-block d-sm-none p-0 bg-transparent" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"><img src="./img/nav/btn-mob.svg" alt=""></button>
        </div>
    </nav>

    <div class="container">

        <div
            class="header__main d-flex align-items-center align-items-sm-end align-items-md-start flex-column flex-sm-row">

            <div class="header__main--wrapper mb-4 mb-sm-0 pb-0 pb-sm-4 pb-md-0">
                <h3 class="nav__title d-block d-md-none text-center text-light mb-4">Законное списание долгов в
                    Вашем
                    городе</h3>

                <div class="header__main--wrapper-argument mb-1 mb-md-3"><span>Избавили от долгов 11 762
                            человек</span>
                </div>
                <div class="header__main--wrapper-argument mb-5 mb-sm-3 mb-md-4"><span>Вероятность успеха 97%</span>
                </div>
                <h1 class="header__main--wrapper-title mb-4 mb-md-5">Рассчитайте стоимость
                    списания долгов «под ключ»</h1>

                <div class="d-flex flex-column flex-md-row mb-4">
                    <div class="d-flex align-items-center flex-column flex-sm-row mb-4 mb-md-0 me-0 me-md-4">
                        <img class="icon-advantages" src="./img/header/h-icon1.svg" alt="">
                        <p class="advantages">Всего за 15 минут</p>
                    </div>
                    <div class="d-flex align-items-center flex-column flex-sm-row">
                        <img class="icon-advantages" src="./img/header/h-icon2.svg" alt="">
                        <p class="advantages">С гарантией по договору</p>
                    </div>
                </div>

                <div class="d-flex align-items-center flex-column flex-sm-row">
                    <img class="icon-advantages" src="./img/header/h-icon3.svg" alt="">
                    <p class="advantages">Без лишних звонков и сообщений</p>
                </div>
            </div>

            <img class="statue" src="./img/header/statue.png" alt="">
        </div>
    </div>
</header>
<!-- ./header -->
<main id="app">
    @yield('content')
</main>

<footer class="footer py-4 py-md-5">
    <p class="text-center">Все права защищены © 2022</p>
</footer>
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
