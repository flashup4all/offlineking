
    <h2> Hello {{ $user->fullname }} </h2>
        <p>Thanks you for signin up on <a href="{{ config('app.url') }}">{{ config('app.name') }}</a>, your account has been created successfully. Please click on the activation link below to activate account!</p>

        <a href="{{config('app.url')}}/verifyemail/{{ \Crypt::encrypt($user->id)}}" class="btn btn-warning">Activate Account</a>
        