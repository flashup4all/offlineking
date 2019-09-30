@component('mail::message')

    ## Hello friend!
    You have been invited u to try OfflineSumo for creating designs or selecting from our custom designs.
@component('mail::button', ['url' => config('app.url').'/signup/'.\Crypt::encrypt($user->id)])
Goto OfflineSumo
@endcomponent
        
    Thanks<br>
{{ config('app.name') }}

[ny times]: {{ config('app.url').'/signup/'.\Crypt::encrypt($user->id) }}
@endcomponent
