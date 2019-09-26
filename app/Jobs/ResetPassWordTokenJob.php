<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Mail;
use App\Mail\ResetPassWordTokenMail;

class ResetPassWordTokenJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @var user
     * holds new user resource
     */
    public $user;
    /**
     * @var $user
     * holds reset token
     * @return $user
     */
    public $token;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($user, $token)
    {
        $this->token = $token;
        $this->user = $user;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $email = New ResetPassWordTokenMail($this->user, $this->token);
        Mail::to($this->user->email)->send($email);
    }
}
