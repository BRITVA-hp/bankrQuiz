<?php

namespace App\Providers;

use App\Services\Crm\CrmServiceInterface;
use Illuminate\Support\ServiceProvider;
use App\Services\Crm\CrmBitrix24;

class RepositoriesServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(CrmServiceInterface::class, function ($app){
            return new CrmBitrix24(300,'18anjsv06ovr1tdc');
        });
        //$this->app->bind(CrmRepositoryInterface::class,CrmBitrix24::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {

    }
}
