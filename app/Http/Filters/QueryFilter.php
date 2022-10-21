<?php


namespace App\Http\Filters;


use Illuminate\Database\Eloquent\Builder;
use \Illuminate\Http\Request;

abstract class QueryFilter
{
    protected $builder;
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function apply(Builder $builder)
    {
        $this->builder = $builder;

        foreach ($this->filters() as $filter => $value) {
            $filter = mb_strtolower($filter);
            if (method_exists($this, $filter)) {
                call_user_func_array([$this, $filter], (array)$value);
            }
        }

        return $this->builder;
    }

    public function filters(): array
    {
        return array_filter($this->request->all());
    }
}
