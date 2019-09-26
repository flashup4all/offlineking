<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ResetPassWordTokenMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @var $user
     * holds user data
     * @return $user
     */
    public $user;
    /**
     * @var $user
     * holds reset token
     * @return $user
     */
    public $token;
    public $logo = [
            'path'   => 'http://credits.letnote.ng/assets/images/logo-blue.png',
            'width'  => '',
            'height' => '',
        ];
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user, $token)
    {
        $this->user = $user;
        $this->token = $token;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('passwordreset@letnote.ng')->subject('Welcome to Letnote Credits')->markdown('email.user.password_reset_token');
    }
}
