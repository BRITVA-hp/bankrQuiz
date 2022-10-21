@extends('layouts.app')

@section('content')

    <section class="section quiz">
        <quiz-app ref="quiz"></quiz-app>
        <last-step></last-step>
        <quiz-thanks></quiz-thanks>
    </section>

@endsection
