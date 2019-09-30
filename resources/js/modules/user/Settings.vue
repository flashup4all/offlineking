<template>
    <div class="container-fluid">
          <div class="container header-div">
            <p class="offline-king-header align-text-center text-center">Settings </p>

            <a href="#" class="back-arrow">
              <p class="offline-king-header"><i class="fas fa-arrow-left"></i> Back</p>
            </a>



          </div>


          <div class="container">
            <alerts v-if="show_alert.status" :message="show_alert.msg" :type="show_alert.type"></alerts>

            <div class="row ">
              <div class="col-md-4 my-1">
                <form @submit.stop.prevent="update_profile()" method="post" data-vv-scope="profile">
                  <div class="card flex-1 settings-card">
                    <div class="card-body align-items-center px-5">
                      <p class="offline-king-header text-center">Change Personal Info</p>
                      <label class="setting-form-label">Email</label>
                      <div class="settings-form">
                        <div class="setting-input">
                            <i class="fas fa-unlock setting-icon"></i>
                            <input disabled name="email" v-model="update_profile_form.email" type="email" placeholder=" **************** " v-validate="'required'" ref="email">
                        </div>
                      </div>
                      <label class="setting-form-label">Username</label>
                      <div class="settings-form" :class="{'is-invalid': errors.has('profile.username')}">
                        <div class="setting-input">
                            <i class="fas fa-unlock setting-icon"></i>
                            <input name="profile.username" v-model="update_profile_form.username"  type="text" placeholder=" **************** " v-validate="'required'">
                        </div>
                      </div>
                      <p v-if="errors.has('profile.username')" class="offline-sumo-alert-danger">
                            username is required
                        </p>
                      <label class="setting-form-label">Profession</label>
                      <div class="settings-form" :class="{'is-invalid': errors.has('profile.profession')}">
                        <div class="setting-input">
                            <i class="fas fa-unlock setting-icon"></i>
                            <input name="profile.profession" v-model="update_profile_form.profession" type="text" placeholder=" Designer " v-validate="'required'" ref="profession">
                        </div>
                      </div>
                      <p v-if="errors.has('profile.profession')" class="offline-sumo-alert-danger">
                            profession is required
                        </p>
                        <div class="setting-image">
                          <label for="image">
                              <input type="file" name="image" id="image" style="display:none;" @change="onFileChange"/>
                              <img v-if="!url" class="img-fluid img-circle" src="../../assets/img/user.jpg" alt="">
                              <img v-if="url" :src="url" />
                              <p class="mx-3 my-3 float-right">Change Photo</p></label>
                        </div>
                      <!-- <div class="setting-image">
                        <img class="img-fluid img-circle" src="../../assets/img/user.jpg" alt="">
                        <p class="mx-3 my-3">Change Photo</p>
                      </div> -->
                      <div class="form-group my-2">
                        <button :disabled="profile_submitted" class="btn btn-purple-gradient btn-rounded text-uppercase my-3">
                          <i class="fa fa-spinner" v-if="profile_submitted"></i>
                          Save Changes
                          </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-md-4 my-1">
                <div class="card flex-1 settings-card">
                  <form @submit.stop.prevent="update_password()" method="post">
                    <div class="card-body align-items-center px-5">
                      <p class="offline-king-header text-center">Change Password</p>
                      <label class="setting-form-label">Current Password</label>
                      <div class="settings-form" :class="{'is-invalid': errors.has('old_password')}">
                        <div class="setting-input">
                            <i class="fas fa-unlock setting-icon"></i>
                            <input name="old_password" v-model="change_password_form.old_password" type="password" placeholder=" **************** " v-validate="'required'" ref="old_password">
                        </div>
                      </div>
                      <p v-if="errors.has('current_password')" class="offline-sumo-alert-danger">
                            current password is required
                        </p>
                      <label class="setting-form-label">New Password</label>
                      <div class="settings-form" :class="{'is-invalid': errors.has('password')}">
                        <div class="setting-input">
                            <i class="fas fa-unlock setting-icon"></i>
                            <input name="password" v-model="change_password_form.password" type="password" placeholder=" **************** " v-validate="'required'" ref="password">
                        </div>
                      </div>
                      <p v-if="errors.has('password')" class="offline-sumo-alert-danger">
                        new password is required
                      </p>
                      <label class="setting-form-label">Repeat New Password</label>
                      <div class="settings-form" :class="{'is-invalid': errors.has('c_password')}">
                        <div class="setting-input">
                            <i class="fas fa-unlock setting-icon"></i>
                            <input name="c_password" v-model="change_password_form.c_password" type="password" placeholder=" **************** " v-validate="'required|confirmed:password'" ref="c_password">
                        </div>
                      </div>
                      <p v-if="errors.has('c_password')" class="offline-sumo-alert-danger">
                            Repeat password do not match password
                      </p>
                      <div class="form-group my-2">
                        <button :disabled="submitted" class="btn btn-purple-gradient btn-rounded text-uppercase my-3">
                          <i class="fa fa-spinner" v-if="submitted"></i>
                          Update Password
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div class="col-md-4 my-1">
                <div class="card flex-1 settings-card">

                  <div class="card-body align-items-center px-5">
                    <p class="offline-king-header text-center">Other Settings </p>
                    <label class="setting-form-label">Language</label>
                    <div class="settings-form">
                      <div class="setting-input">
                        <i class="fa fa-plus setting-icon"></i>
                        <input type="text" placeholder=" English ">
                      </div>
                    </div>
                    <label class="setting-form-label">Billing Plan</label>
                    <div class="settings-form">
                      <div class="setting-input">
                        <i class="fa fa-plus setting-icon"></i>
                        <input type="text" placeholder=" Free">
                      </div>
                    </div>

                    <div class="setting-image">
                      <img class="img-fluid img-circle" src="../../assets/img/user.jpg" alt="">
                      <p class="mx-3 my-3">Change Photo</p>
                    </div>


                    <div class="form-group my-2">
                      <button class="btn btn-purple-gradient btn-rounded text-uppercase my-3">Save Changes</button>
                    </div>



                  </div>


                </div>
              </div>







            </div>

            <div class="row align-items-center my-4">
              <div class="col-md-12 ">
                <div class="card d-flex flex-row invite-settings px-5 py-3 ">
                  <p class="offline-king-header">Invite Your Friend & Get 1 Month of Premium plan for Free</p>
                <!-- <form @submit.stop.prevent="refer_friend()" method="post" data-vv-scope="refer_friend"> -->
                  <div class="invite-input" :class="{'is-invalid': referer_form.error}">
                    <i class="far fa-envelope invite-icon"></i>
                    <input type="text" placeholder="Email" v-model="referer_form.email">
                  </div>
                  <p><i class="fa fa-plus"></i> Add Another Email</p>
                  <!-- <p v-if="referer_form.error" class="offline-sumo-alert-danger">
                      email required
                  </p> -->
                  <button @click="refer_friend()" :disabled="referer_submitted" class="btn btn-purple-gradient btn-rounded text-uppercase">
                    <i class="fa fa-spinner" v-if="referer_submitted"></i>
                    Send Invite
                    </button>
                <!-- </form> -->


                </div>
              </div>

              <div class="col-md-4"></div>
              <div class="col-md-5 my-4">
                <button class="btn btn-purple-gradient btn-rounded text-uppercase my-2">Deactivate Account</button>
  
                <button class="btn btn-danger btn-rounded text-uppercase my-2">Remove Account</button>
  
              </div>
              <div class="col-md-3"></div>
  

            </div>

           
          </div>

        </div>
</template>

<script>
    import VeeValidate from 'vee-validate';
    import { url, img_url } from "../../environments/environment";
    import Alerts from '../../shared/Alerts.vue';
    import local from '../../shared/storage/local.js';

    Vue.use(VeeValidate);
    export default {
       components:{
            Alerts
        },
        data: () => ({
            user: local.get_user(),
            change_password_form:{
                old_password: null,
                password: null,
                c_password: null,
            },
            update_profile_form:{
                profession: null,
                username: null,
            },
            billing_form:{
                language: null,
                username: null,
            },
            referer_form:{
                email: null,
                error: false
            },
            referer_submitted:false,
            profile_submitted:false,
            submitted: false,
            url:null,
            show_alert:{
                msg:'',
                type:'',
                status: false,
            }
        }),
        mounted() {
          if(this.user.avatar !='')
          {
            this.url = img_url+'avatars/'+this.user.avatar
          }
          this.update_profile_form = this.user;
        },
        methods: {
            /**
             * @method update_password
             * update user password
             * @author @flashup4all
             * @param request
             * @returns response
             */
            update_password(){
                this.submitted = true;
                this.$validator.validate().then(valid => {
                    if (valid) {
                      this.change_password_form.id = this.user.id;
                        axios.post(`${url}/update-password`, this.change_password_form).then(res => {
                            let response = res.data;
                              console.log(res)

                            this.submitted = false;                            
                            if(res.status == 200)
                            {
                              if(response.status == 'ok'){
                                  this.show_alert = {
                                      msg: response.msg,
                                      type: 'alert-success',
                                      status: true
                                  };  
                              }else{
                                  this.show_alert = {
                                      msg: response.msg,
                                      type: 'alert-danger',
                                      status: true
                                  };
                                  //this.show_alert = true;
                              }
                            }
                            if(res.status == 422)
                            {
                              console.log(res)
                            }
                        }, (error)=> {
                          this.submitted = false;
                        });   
                    }
                    
                });
            },
            /**
             * @method update_password
             * update user password
             * @author @flashup4all
             * @param request
             * @returns response
             */
            update_profile(){
                this.profile_submitted = true;
                this.$validator.validateAll('profile').then(valid => {
                    if (valid) {
                      this.update_profile_form.id = this.user.id;
                        axios.post(`${url}/user/update`, this.update_profile_form).then(res => {
                            let response = res.data;
                            this.profile_submitted = false;                            
                            if(res.status == 200)
                            {
                              if(response.status == 'ok'){
                                  this.show_alert = {
                                      msg: response.msg,
                                      type: 'alert-success',
                                      status: true
                                  };
                                  local.store_user(response.data);                                  
                              }else{
                                  this.show_alert = {
                                      msg: response.msg,
                                      type: 'alert-danger',
                                      status: true
                                  };
                                  //this.show_alert = true;
                              }
                            }
                            if(res.status == 422)
                            {
                              console.log(res)
                            }
                        }, (error)=> {
                          this.profile_submitted = false;
                        });   
                    }
                    
                });
            },
            onFileChange(e) {
              const file = e.target.files[0];
              this.url = URL.createObjectURL(file);
              let data = new FormData();
              // data.append('name', 'my-picture');
              data.append('avatar', event.target.files[0]); 
              data.append('user_id', this.user.id);
              let config = {
                header : {
                  'Content-Type' : 'image/png'
                }
              }
              axios.post(`${url}/user/image/update`, data, config).then(res => {
                let response = res.data;
                console.log(response)
                this.profile_submitted = false;                            
                if(res.status == 200)
                {
                  if(response.status == 'ok'){
                      this.show_alert = {
                          msg: response.msg,
                          type: 'alert-success',
                          status: true
                      };
                      local.store_user(response.data);                                  
                  }else{
                      this.show_alert = {
                          msg: response.msg,
                          type: 'alert-danger',
                          status: true
                      };
                      //this.show_alert = true;
                  }
                }
                if(res.status == 422)
                {
                  console.log(res)
                }
              }, (error)=> {
                this.profile_submitted = false;
              });   
            },
               /**
             * @method refer_friend
             * send referer link to email
             * @author @flashup4all
             * @param request
             * @returns response
             */
            refer_friend(){
                this.referer_submitted = true;
                if(!this.referer_form.email)
                {
                  this.referer_form.error = true;
                  this.referer_submitted = false;                            
                  return;
                }
                this.referer_form.error =false;
                this.referer_form.user_id = this.user.id;
                axios.post(`${url}/user/refer-a-friend`, this.referer_form).then(res => {
                  let response = res.data;
                  this.referer_submitted = false;                            
                  if(res.status == 200)
                  {
                    if(response.status == 'ok'){
                        this.show_alert = {
                            msg: response.msg,
                            type: 'alert-success',
                            status: true
                        };
                       this.referer_form.email = '';                             
                    }else{
                        this.show_alert = {
                            msg: response.msg,
                            type: 'alert-danger',
                            status: true
                        };
                        //this.show_alert = true;
                    }
                  }
                  if(res.status == 422)
                  {
                    console.log(res)
                  }
                }, (error)=> {
                  this.referer_submitted = false;
                });   
                    
            },
        }
    
    }
</script>