<?php

namespace App\Services\Crm;

interface CrmServiceInterface
{
    public function leadAdd($name, $number): void;
}
