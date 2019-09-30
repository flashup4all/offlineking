<template>
    <div class="">
        <div class="card  w-50 mx-5 my-5 px-2" style="margin-left: 200px !important;">
                <div class="card-body">
                    <form @submit.stop.prevent="signup()" method="post">
                        <p class="offline-king-header">Register</p>
                        <alerts v-if="show_alert.status" :message="show_alert.msg" :type="show_alert.type"></alerts>
                        <label class="setting-form-label"> Email</label>
                        <div class="settings-form my-3" :class="{'is-invalid': errors.has('email')}">
                            <div class="setting-input">
                                <i class="fas fa-envelope setting-icon"></i>
                                <input v-model="signup_form.email" type="text" placeholder=" Arowosegbe67@gmail.com"  v-validate="'required|email'" name="email" >
                            </div>
                        </div>
                        <p v-if="errors.has('email')" class="offline-sumo-alert-danger">
                            {{ errors.first('email') }}
                        </p>
                        <label class="setting-form-label"> User Name</label>
                        <div class="settings-form my-3" :class="{'is-invalid': errors.has('username')}">
                            <div class="setting-input">
                                <i class="fas fa-envelope setting-icon"></i>
                                <input name="username" v-model="signup_form.username" type="text" placeholder=" Arowosegbe67@gmail.com " v-validate="'required'">
                            </div>
                        </div>
                        <p v-if="errors.has('username')" class="offline-sumo-alert-danger">
                            {{ errors.first('username') }}
                        </p>
                        <label class="setting-form-label"> Password</label>
                        <div class="settings-form my-3" :class="{'is-invalid': errors.has('password')}">
                            <div class="setting-input">
                                <i class="fas fa-unlock setting-icon"></i>
                                <input name="password" v-model="signup_form.password" type="password" placeholder=" **************** " v-validate="'required'" ref="password">
                            </div>
                        </div>
                        <p v-if="errors.has('password')" class="offline-sumo-alert-danger">
                            {{ errors.first('password') }}
                        </p>
                        <label class="setting-form-label">Repeat Password</label>
                        <div class="settings-form my-3" :class="{'is-invalid': errors.has('c_password')}">
                            <div class="setting-input">
                                <i class="fas fa-unlock setting-icon"></i>
                                <input name="c_password" v-model="signup_form.c_password" type="password" placeholder=" **************** " v-validate="'required|confirmed:password'">
                            </div>
                        </div>
                        <p v-if="errors.has('c_password')" class="offline-sumo-alert-danger">
                            <!-- {{ errors.first('c_password') }} -->
                            Repeat password do not match password
                        </p>
                        <div class="form-group my-2 px-2 py-2">
                            <div class="row no-pad">
                                <div class="col-md-12">
                                    <div class="form-check">
                                        <input v-model="signup_form.subscribe" class="form-check-input" type="checkbox">
                                        <label class="form-check-label" for="gridCheck">
                                            Notify of new & latest updates
                                        </label>
                                    </div>
                                </div>

                            
                            </div>
                        </div>

                        <div class="form-group">
                            <button class="btn btn-purple-gradient btn-rounded pad-2 text-uppercase"
                                aria-expanded="false" :disabled="submitted">
                                <i class="fa fa-spinner" v-if="submitted"></i>
                                Register</button>
                        </div>
                    </form>



                </div>

                <div class="card-footer">

                    <div class="form-group">
                        <p><router-link :to="{ name: 'signup' }" class="py-2 my-3">Already have an account?</router-link></p>
                        <router-link :to="{ name: 'auth' }">
                            <button class="btn btn-purple-gradient btn-rounded pad-2 text-uppercase"
                            aria-expanded="false">Login</button>
                        </router-link>
                    </div>

                </div>
            </div>
    </div>
</template>

<script>
    import VeeValidate from 'vee-validate';
    import { url } from "../../environments/environment";
    import Alerts from '../../shared/Alerts.vue';

Vue.use(VeeValidate);
    export default {
        components:{
            Alerts
        },
        data: () => ({
            signup_form:{
                username: null,
                email: null,
                password: null,
                password_confirmation: null,
                subscribe:null,
            },
            referer: null,
            submitted: false,
            
            show_alert:{
                msg:'',
                type:'',
                status: false,
            }
        }),
        mounted() {
            console.log('The id is: ' + this.$route.params.user_crypt_id);
            if(this.$route.params.user_crypt_id)
            {
                this.referer = this.$route.params.user_crypt_id;
            }
        },
        methods: {
            /**
             * @method signup
             * validate the signup form
             * create a new user resource
             * @author @flashup4all
             * @param request
             * @returns response
             */
            signup(){
                this.submitted = true;
                this.$validator.validate().then(valid => {
                    if (valid) {
                        if(this.referer)
                        {
                            this.signup_form.referer = this.referer;
                        }
                         axios.post(`${url}/signup`, this.signup_form).then(res => {
                            // this.results = response.data;
                            let response = res.data;
                            this.submitted = false;                            
                            if(res.status == 200)
                            {
                                if(response.status == 'ok'){
                                    this.show_alert = {
                                        msg: response.msg,
                                        type: 'alert-success',
                                        status: true
                                    };
                                    this.signup_form = [];
                                }else{
                                    this.show_alert = {
                                        msg: response.msg,
                                        type: 'alert-danger',
                                        status: true
                                    };
                                    //this.show_alert = true;
                                }
                            }
                            if(res.status ==401)
                            {

                            }
                        }, (error)=> {
                            this.submitted = false; 
                        });   
                    }
                });
            }
        }
    }
</script>