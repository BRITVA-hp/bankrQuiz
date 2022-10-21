<?php


namespace App\Services\Crm;


use http\Exception\InvalidArgumentException;

class CrmBitrix24 implements CrmServiceInterface
{
    private $userId;
    private $webHook;
    private $url;

    public function __construct($userId = 300 , $webHook = '18anjsv06ovr1tdc', $url = 'https://iq-corporation.bitrix24.ru/rest/')
    {
        if (empty($userId)) {
            throw new InvalidArgumentException('CRM BITRIX userId must be set.');
        }
        if (empty($webHook)) {
            throw new InvalidArgumentException('CRM BITRIX webHook must be set.');
        }

        $this->userId = $userId;
        $this->webHook = $webHook;
        $this->url = $url;
    }
    public function leadAdd($name, $number): void
    {
        //$queryUrl = 'https://iq-corporation.bitrix24.ru/rest/300/18anjsv06ovr1tdc/crm.lead.add';
        $queryUrl = $this->url.$this->userId.'/'.$this->webHook.'/crm.lead.add';
        $queryData = http_build_query(array(
            'fields' => array(
                "TITLE" => '[Заявка с компании L-Digital]'.' '.$name,
                "NAME" => $name,
                "STATUS_ID" => "NEW",
                "SOURCE_ID" => 79626114910,
                "SOURCE_DESCRIPTION" => "L-Digital",
                "OPENED" => "Y",
                //"ASSIGNED_BY_ID" => [2,1],
                "PHONE" => [["VALUE" => $number, "VALUE_TYPE" => "WORK" ]],
                //"EMAIL" => array(array("VALUE" => $_REQUEST['email'], "VALUE_TYPE" => "WORK" )),
            ),
            'params' => ["REGISTER_SONET_EVENT" => "Y"]
        ));

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_POST => 1,
            CURLOPT_HEADER => 0,
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => $queryUrl,
            CURLOPT_POSTFIELDS => $queryData,
        ));
        curl_exec($curl);
        if (curl_errno($curl)) {
            throw new \RuntimeException('Couldn\'t send request: ' . curl_error($curl));
        }

        $resultStatus = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        if ($resultStatus !== 200) {
            throw new \RuntimeException('Request failed: HTTP status code: ' . $resultStatus);
        }
        curl_close($curl);

    }
}
