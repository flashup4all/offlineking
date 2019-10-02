<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['middleware' => 'cors'], function () {
	Route::prefix('v1')->group(function(){
		Route::post('auth', 'UserController@login');
		Route::get('verifyemail/{token}', 'UserController@activate_email_account');
		Route::post('resend-activation-link', 'UserController@resend_activation_link');
		Route::post('reset-password-token', 'UserController@send_reset_password_token');
		Route::post('reset-password', 'UserController@reset_password');
		Route::post('update-password', 'UserController@update_password');
		Route::post('signup', 'UserController@register');
		Route::group(['middleware' => 'auth:api'], function(){
			
		});
		Route::prefix('user')->group(function(){
			Route::post('getUser', 'UserController@getUser');
			Route::post('update', 'UserController@update');
			Route::post('image/update', 'UserController@upload_user_image');
			Route::post('refer-a-friend', 'UserController@refer_a_friend');
		});
	});
});
