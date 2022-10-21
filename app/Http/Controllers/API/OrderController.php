<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Filters\OrderFilter;
use App\Mail\SendMail;
use App\Mail\SendMailQuiz;
use App\Models\Order;
use App\Services\Crm\CrmServiceInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Http;

class OrderController extends Controller
{
    public $crm;

    public function __construct(CrmServiceInterface $crm)
    {
        $this->crm = $crm;
    }

    public function index(Request $request, OrderFilter $filter){
        $orders = Order::filter($filter)->orderByDesc('created_at')->get();

        return response()->json($orders);
    }

    public function store(Request $request){

        $this->validate($request,[
            'name' => 'required|min:2',
            'phone' => 'required|regex:/^\d(\d{3})(\d{3})(\d{4})$/',
//            'checkbox' => 'required|in:1'
        ]);
        $name = $request->input('name');
        $phone = $request->input('phone');

        $this->createOrder($name,$phone);
        $this->leadHunterAdd($request);

        //Mail::to(env('MAIL_TO_ADDRESS'))->send(new SendMail($name,$phone,$region));
        return  response()->json($request->all(),200);
    }

    public function quizStore(Request $request){

        $this->validate($request,[
            'phone' => 'required|regex:/^\d(\d{3})(\d{3})(\d{4})$/',
        ]);
        $name = $request->input('name');
        $phone = $request->input('phone');
        $data = $request->input('data');

        $_data = '';
        foreach ($request->input('data') as $qa) {
            if (is_array($qa['answer']))
                $_data .= "Вопрос: " . $qa['question'] . " Ответ: " . implode(',',$qa['answer']);
            else
                $_data .= "Вопрос: " . $qa['question'] . " Ответ: " . $qa['answer'] . ' ';
        }

        $request->merge([
            'data' => $_data,
        ]);
        $this->createOrder($name,$phone);
        $this->leadHunterAdd($request);



        //Mail::to(env('MAIL_TO_ADDRESS'))->send(new SendMailQuiz($data,$phone,$name));
        return  response()->json($request->all(),200);
    }

    public function createOrder($name,$phone){
        $order = new Order();
        $order->createOrder($name,$phone);
    }

    public function leadHunterAdd(Request $request): void
    {
        $data = [
            'api_token' => 'IcuQS09tDL5ofj113fXiCTP68Coja92TRhn5jepGFMRjh0YCqT79kcj8LTYk',
            'name' =>$request->has('name') ? $request->input('name') : 'Аноним',
            'phone' => $request->input('phone'),
            'city' => $request->input('region'),
            'comment' => $request->has('data') ? $request->input('data') : '',
            'ip' => $this->getUserIpAddr(),
            'host' => $request->input('host'),
            'referrer' => $request->input('referrer'),
            'url_query_string' => $request->input('url_query_string')
        ];

        $response = Http::withOptions(['verify' => false])->withHeaders(['Content-Type' => 'application/json'])->post('https://in.leads-hunter.com/api/v1/lead.add', $data);

        Log::info($response);
    }

    public function getUserIpAddr(){
        $ipaddress = '';
        if (isset($_SERVER['HTTP_CLIENT_IP']))
            $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
        else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
        else if(isset($_SERVER['HTTP_X_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
        else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
        else if(isset($_SERVER['HTTP_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_FORWARDED'];
        else if(isset($_SERVER['REMOTE_ADDR']))
            $ipaddress = $_SERVER['REMOTE_ADDR'];
        return $ipaddress;
     }

}
