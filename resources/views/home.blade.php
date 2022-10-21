@extends('layouts.app')

@section('content')
    <header-app></header-app>
    <main class="main">
        <main-app></main-app>
        <quiz-app ref="quizApp"></quiz-app>
        <feat-app></feat-app>
        <last-step></last-step>
    </main>
    <footer-app></footer-app>
    <quiz-thanks></quiz-thanks>
    <modal-app></modal-app>
    <modal-thanks></modal-thanks>

@endsection
