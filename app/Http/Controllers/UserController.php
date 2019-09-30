<?php

namespace App\Http\Controllers;

use App\Http\Controllers\VendorUserController;
use Illuminate\Http\Request;
use App\User;
use App\Jobs\EmailVerificationJob;
use App\Jobs\ResetPassWordTokenJob;
use App\Jobs\PasswordChangeJob;
use App\Jobs\ReferAFriendJob;
use Carbon\Carbon;
use Validator, DB, Auth, Redirect, Hash, Storage;

class UserController extends Controller
{
    /**
     * @method register
     * create a new resource
     * @param request
     * @return response
     */
     public function register(Request $request) {    
    	$validator = Validator::make($request->all(), [ 
    	              'username' => 'required',
    	              'email' => 'required|email',
    	              'password' => 'required',  
    	              'c_password' => 'required|same:password', 
    	    ]);   
    	if($validator->fails()) {          
    	    return response()->json(['error'=>$validator->errors()], 401);
    	}
    	$input = $request->all();  
    	if(User::where('email', $input['email'])->exists())
    	{
    		return response()->json(['status'=> 'error', 'msg' => 'Email already exists, please reset your password if you can\'t remember']);
    	}
    	 try {
             if(!empty($input['referer']))
             {
                $input['referer'] =  \Crypt::decrypt($input['referer']);
             }
             DB::beginTransaction();
             $input['password'] = bcrypt($input['password']);
             $input['role_id'] = 3;
             $user = User::create($input);
             //$success['token'] =  $user->createToken('AppName')->accessToken;
            activity()->causedBy($user)->performedOn($user)->withProperties(['id' => $user->id])->log('User account created');
            DB::commit();
             $email_job = (new EmailVerificationJob($user))->delay(Carbon::now()->addSeconds(3));
             dispatch($email_job);
             return response()->json(['status'=> 'ok', 'msg' => 'Account Created successfully. please click on the activation link sent to your email', 'data'=>$user], 200); 
         } catch (Exception $e) {
             DB::rollback();
         }
	}
	  
	/**
     * @method login
     * authenticate a user
     * @param request
     * @return response
     */
	public static function login(Request $request){ 
	   $validatedData = $request->validate([
            "email" => "required",
            "password" => "required"
        ]);
        $data = $request->all();    
        if(!User::where('email', $data['email'])->exists()){
            return response()->json(["status" => 0, "msg" => "Incorrect Email or Email does not exit"], 200);
        }
        // $credentials = request(['email', 'password']);
        try {
            if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
                $user = Auth::user(); 
                $token =  $user->createToken('AppName')->accessToken; 
                activity()->causedBy($user)->performedOn($user)->withProperties(['id' => $user->id])->log('You login to account');
                return response()->json(['status' => 'ok', 'token' => $token, 'user' => $user, 'msg'=>'Authentication Successfull: redirecting '], 200); 
            } else{ 
                return response()->json(['status' => 'error', 'msg'=>'Incorrect Password'], 201); 
            } 
        } catch (Exception $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
	}
      
    /**
     * @method getUser
     * get a resource
     * @param request
     * @return response
     */
	public function getUser() {
	    $user = Auth::user();
	    return response()->json(['success' => $user], $this->successStatus); 
	}

	/**
     * check if email resource exist.
     *
     * @param  \App\User  $emailList
     * @return \Illuminate\Http\Response
     */
    public static function email_exist($email)
    {
        try { 
            $check = User::where('email', $email)->first();
            if($check){
                return 1;
            }
            return 0;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    /**
     * get user email verified status
     *
     * @method user_email_verification_status
     * @param  \App\User  $emailList
     * @return \Illuminate\Http\Response
     */
    public static function user_email_verification_status($email)
    {
        try {
            $user_status = User::where('email', $email)->select('id', 'status')->first()->status;
            if($user_status == 'Pending')
            {
            	return 0;
            }
            return 1;
            
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    /**
     * get user email verified status
     *
     * @method user_email_verification_status
     * @param  \App\User  $emailList
     * @return \Illuminate\Http\Response
     */
    public static function resend_activation_link(Request $request)
    {
        $validatedData = $request->validate([
            "email" => "required",
        ]);
        $data = $request->all();
        try {
            User::where('email', $data['email'])->get();
            if(!self::email_exist($data['email']))
            {
                return response()->json(['status' => 'error', 'msg' => 'Oops!! this email does not exist on our system']);
            }
            if(self::user_email_verification_status($data['email']))
            {
                return response()->json(['status' => 'error', 'msg' => 'this email is already verified, please login. or change password if you\'ve forgotten']);
            }
            $user = User::where('email', $data['email'])->first();
            #send activation mail job
            $email_job = (new EmailVerificationJob($user))->delay(Carbon::now()->addSeconds(3));
            dispatch($email_job);
            return response()->json(['status' => 'ok', 'msg' => 'Operation successful, Please click on the activation link sent to your email']);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
    /**
     * get user email verified status
     *
     * @method user_email_verification_status
     * @param  \App\User  $emailList
     * @return \Illuminate\Http\Response
     */
    public static function activate_email_account($token)
    {
        $user_id =  \Crypt::decrypt($token);
        try {
            $user = User::where('id', $user_id)->first();
            if($user->status != 'Pending')
            {
                $url = env('APP_URL')."/auth/email-verified";
                // return Redirect::to($url);
                return view('users.email_verified');
            }
            $user->email_verified_at = Carbon::now();
            $user->status = 'Active';
            $user->save();
            #send activation mail job
            $email_job = (new EmailVerificationJob($user))->delay(Carbon::now()->addSeconds(3));
            dispatch($email_job);
            $url = env('APP_URL')."/auth/email-verified";
            // return Redirect::to($url);
            return view('users.email_verified');
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
    

    /**
     * get user email verified status
     *
     * @method user_email_verification_status
     * @param  \App\User  $emailList
     * @return \Illuminate\Http\Response
     */
    public static function send_reset_password_token(Request $request)
    {
        $validatedData = $request->validate([
            "email" => "required",
        ]);
        $data = $request->all();
        try {
            if(!self::email_exist($data['email']))
            {
                return response()->json(['status' => 'error', 'msg' => 'Oops!! this email does not exist on our system']);
            }
            $user = User::where('email', $data['email'])->first();
            #save token to reset_password table            
            #send activation mail job
            $reset_token_job = (new ResetPassWordTokenJob($user, 00000))->delay(Carbon::now()->addSeconds(3));
            dispatch($reset_token_job);
            return response()->json(['status' => 'ok', 'msg' => 'Operation successful, Please a click on the reset link sent to your email']);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
    /**
     * update user password
     *
     * @method update_password
     * @param  \App\User  $emailList
     * @return \Illuminate\Http\Response
     */
    public static function update_password(Request $request)
    {
        $validatedData = $request->validate([
            "id" => "required",
            "old_password" => "required",
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
        // if($validator->fails()) {          
    	//     return response()->json(['error'=>$validator->errors()], 401);
    	// }
        $data = $request->all();
        try {
            $user = User::where('id', $data['id'])->select('id', 'password')->first();
            #save token to reset_password table
            if(!Hash::check($data['old_password'], $user->password)){
                return response()->json(['status' => 'error', 'msg' => 'Error !!, current password do not match existing password']);
            }
            $user->password = Hash::make($data['password']);
            $user->save();
            
            #send password change notification mail job
            $change_password_job = (new PasswordChangeJob($user))->delay(Carbon::now()->addSeconds(3));
            dispatch($change_password_job);
            return response()->json(['status' => 'ok', 'msg' => 'Operation successful, password change successful']);
            
            
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
    /**
     * reset user password
     *
     * @method reset_password
     * @param  \App\User  $emailList
     * @return \Illuminate\Http\Response
     */
    public static function reset_password(Request $request)
    {
        $validatedData = $request->validate([
            "ofikd" => "required",
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
        // if($validator->fails()) {          
    	//     return response()->json(['error'=>$validator->errors()], 401);
    	// }
        $data = $request->all();
        try {
            $user_id =  \Crypt::decrypt($data['ofikd']);
            $user = User::where('id', $user_id)->select('id', 'password')->first();
            #save token to reset_password table
            $user->password = Hash::make($data['password']);
            $user->save();
            
            #send password change notification mail job
            $change_password_job = (new PasswordChangeJob($user))->delay(Carbon::now()->addSeconds(3));
            dispatch($change_password_job);
            return response()->json(['status' => 'ok', 'msg' => 'Operation successful, password reset successful. please click on login below']);
            
            
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

     /**
     * update user profile
     *
     * @method user_email_verification_status
     * @param  \App\User  $emailList
     * @return \Illuminate\Http\Response
     */
    public static function update(Request $request)
    {
    	$data = $request->all();
    	try {
    		$user = User::where('id', $data['id'])->first();
    		
    		if(!empty($data['status']))
    		{
    			$user->status = $data['status'];
    		}
    		if(!empty($data['username']))
    		{
    			$user->username = $data['username'];
            }
            if(!empty($data['profession']))
    		{
    			$user->profession = $data['profession'];
    		}
           
    		//avata should come in here

    		$user->save();
    		activity()->causedBy($user)->performedOn($user)->withProperties(['id' => $user->id])->log('You updated your profile');
    		return response()->json(['status' => 'ok', 'data' => $user, 'msg'=> 'Profile Data Updated Successfully'], 200);
    	} catch (Exception $e) {
    		
    	}
    }
     /**
     * upload user image/avata
     *
     * @method upload_user_image
     * @param  \App\User  $request
     * @return \Illuminate\Http\Response
     */
    public static function upload_user_image(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'avatar' => 'required|image|mimes:jpeg,png,jpg,svg|max:2048',
                'user_id' => 'required',
            ]);

            if ($request->hasFile('avatar')) {
                
                $user = User::where('id', $request->input('user_id'))->first();
                $image = $request->file('avatar');
                $name = date('YmdHis').'.'.$user->id.'.'.$image->getClientOriginalExtension();
                $path = public_path('/app/avatars');
                
                //$path = $request->file('avatar')->store('avatars');
                if($user->avatar){
                    #delete old avata | img 
                   self::delete_user_image($user->avatar);
                }
                $image->move($path, $name);
                $user->avatar = $name;
                $user->save();
                activity()->causedBy($user->id)->performedOn($user)->withProperties(['id' => $user->id])->log('User avatar updated');
                return response()->json(['status' => 'ok','data'=> $user, 'msg'=>'Image Upload successfully']);
            }
            
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
    /**
     * check if user is verified
     *
     * @method user_email_verification_status
     * @param  \App\User  $emailList
     * @return \Illuminate\Http\Response
     */
    public static function is_user_verified(int $user_id)
    {
        try {
            $user_status = User::where('id', $user_id)->select('id', 'status','is_verified')->first()->is_verified;
            if(!$user_status)
            {
                return 0;
            }
            return 1;
            
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    /**
     * delete user image/avata
     *
     * @method upload_user_image
     * @param  \App\User  $request
     * @return \Illuminate\Http\Response
     */
    public static function delete_user_image($avata_path)
    {
        $path = public_path().'/app/avatars/'.$avata_path;
        if(file_exists($path))
        {
            unlink($path);
        }
        //  Storage::delete($avata_path);
    }
    /**
     * get user email verified status
     *
     * @method refer_a_friend
     * @param  \App\User  $emailList
     * @return \Illuminate\Http\Response
     */
    public static function refer_a_friend(Request $request)
    {
        $validatedData = $request->validate([
            "email" => "required",
            "user_id" => "required",
        ]);
        $data = $request->all();
        // $user_id =  \Crypt::crypt($data['user_id']);
        try {
            if(self::email_exist($data['email'])){
                return response()->json(['status' => 'error', 'msg'=>'Reffered email is already registered!']);
            }
            $user = User::where('id', $data['user_id'])->select('id', 'username', 'email')->first();
            #send activation mail job
            $email_job = (new ReferAFriendJob($user, $data['email']))->delay(Carbon::now()->addSeconds(3));
            dispatch($email_job);
            //$url = env('APP_URL')."/auth/email-verified";
            // return Redirect::to($url);
            return response()->json(['status' => 'ok', 'msg'=>'Referer Invite sent']);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
}
