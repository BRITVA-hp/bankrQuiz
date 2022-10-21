<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }
    public function quiz()
    {
        return view('quiz');
    }
    public function politic()
    {
        return view('politic');
    }
    public function thanks()
    {
        return view('thanks');
    }
}
