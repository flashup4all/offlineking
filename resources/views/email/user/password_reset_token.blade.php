@component('mail::message')
# Reset Password Link

please click on the button below to reset password. the link expires in  5mins.

@component('mail::button', ['url' => config('app.url').'/reset-password/'.\Crypt::encrypt($user->id)])
Reset password
@endcomponent
##### please ignore or delete this maail if you did not initiate this action. thanks
Thanks<br>
{{ config('app.name') }}
@endcomponent