<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Mail;
use App\Mail\ReferAFriendMail;

class ReferAFriendJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @var user
     * holds new user resource
     */
    public $user;
    public $refered_email;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($user, $refered_email)
    {
        $this->user = $user;
        $this->refered_email = $refered_email;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $email = New ReferAFriendMail($this->user, $this->refered_email);
        Mail::to($this->refered_email)->send($email);
    }
}
