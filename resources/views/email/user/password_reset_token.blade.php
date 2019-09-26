@component('mail::message')
# Reset Password Token

## {{ $token }}
this one time passwords expires in  5mins.

@component('mail::button', ['url' => config('app.url').'/auth/reset-password'])
click to enter token
@endcomponent

Thanks<br>
{{ config('app.name') }}
@endcomponent