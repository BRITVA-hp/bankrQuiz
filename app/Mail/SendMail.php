<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    public $name;
    public $phone;
    public $region;


    public function __construct($name,$phone,$region)
    {
        $this->name = $name;
        $this->phone = $phone;
        $this->region = $region;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->subject = 'Новая заявка!';

        return $this->view('mail.sendMail', ['name' => $this->name,'phone' => $this->phone,'region' => $this->region]);
    }
}
