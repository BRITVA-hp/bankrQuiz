<?php

namespace App\Http\Filters;

use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class OrderFilter extends QueryFilter
{

   public function name($value){
       $this->builder->where('name','like',"%$value%");
   }

    public function phone($value){
        $this->builder->where('phone','like',"%$value%");
    }

    public function status($value){
        $this->builder->where('status',$value);
    }

    public function date($value){
        //$from = $this->request['date'][0];
        $from =  Carbon::parse($this->request['date'][0])->addDay(1)->toDateString();
        $to = Carbon::parse($this->request['date'][1])->addDay(1)->toDateString();
        //dd($from);
        //dd(Carbon::createFromFormat('Y-m-d', $value, 'Europe/Moscow'));
        //dd(Carbon::parse($value)->setTimezone('Europe/Moscow')->format('Y-m-d'));
        //if ($from === $to)
          //  $this->builder->whereDate('created_at','=', Carbon::parse($value)->addDay(1)->setTimezone('Europe/Moscow')->format('Y-m-d'));
        //else
        //$this->builder->whereDate('created_at','>=', $value);
        $this->builder->whereDate('created_at','>=', $from)->whereDate('created_at','<=', $to);
        //$this->builder->whereBetween('created_at',[Carbon::yesterday(),Carbon::now()]);
        //$this->builder->whereBetween('created_at',[$from,$to]);
    }

    public function today($value){
       $this->builder->whereDate('created_at',Carbon::today());
    }
}
