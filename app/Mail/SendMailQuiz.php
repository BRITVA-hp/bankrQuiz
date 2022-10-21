<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendMailQuiz extends Mailable
{
    use Queueable, SerializesModels;

    public $data;
    public $phone;
    public $name;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data,$phone,$name)
    {
        $this->data = $data;
        $this->phone = $phone;
        $this->name = $name;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->subject = 'Новая заявка!';
        return $this->view('mail.sendMailQuiz', ['data' => $this->data,'phone' => $this->phone,'name' => $this->name]);
    }
}
