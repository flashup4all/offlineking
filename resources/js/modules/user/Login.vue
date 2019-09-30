<template>
    <div class="">
        <!-- Main Content -->
     <div class="card card-centered w-50 py-2 px-2">
                <div class="card-body">
                    <form @submit.stop.prevent="authenticate()" method="post">
                         <p class="offline-king-header">Login</p>
                        <alerts v-if="show_alert.status" :message="show_alert.msg" :type="show_alert.type"></alerts>
                        <label class="setting-form-label"> Email</label>
                        <div class="settings-form my-3" :class="{'is-invalid': errors.has('email')}">
                            <div class="setting-input">
                                <i class="fas fa-envelope setting-icon"></i>
                                <input v-model="auth_form.email" type="text" placeholder=" Arowosegbe67@gmail.com"  v-validate="'required|email'" name="email" >
                            </div>
                        </div>
                        <p v-if="errors.has('email')" class="offline-sumo-alert-danger">
                            {{ errors.first('email') }}
                        </p>

                        <label class="setting-form-label"> Password</label>
                        <div class="settings-form my-3" :class="{'is-invalid': errors.has('password')}">
                            <div class="setting-input">
                                <i class="fas fa-unlock setting-icon"></i>
                                <input name="password" v-model="auth_form.password" type="password" placeholder=" **************** " v-validate="'required'" ref="password">
                            </div>
                        </div>
                        <p v-if="errors.has('password')" class="offline-sumo-alert-danger">
                            {{ errors.first('password') }}
                        </p>
                        <div class="form-group my-2 px-2 py-2">
                            <div class="row no-pad">
                                <div class="col-md-6">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio">
                                        <label class="form-check-label" for="gridCheck">
                                            Remember me
                                        </label>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <p><router-link :to="{ name: 'forgot-password' }" style="color:#4e73df;" class="py-2 my-3">
                                        Forget Paasword ?</router-link></p>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <button class="btn btn-purple-gradient btn-rounded pad-2 text-uppercase"
                                aria-expanded="false" :disabled="submitted">
                                <i class="fa fa-spinner" v-if="submitted"></i>
                                Login</button>
                        </div>
                    </form>
                </div>

                <div class="card-footer">

                    <div class="form-group">
                        <p><router-link :to="{ name: 'signup' }" class="py-2 my-3">Don't have an account ?</router-link></p>
                        <router-link :to="{ name: 'signup' }" class="py-2 my-3">
                            <button class="btn btn-purple-gradient btn-rounded pad-2 text-uppercase"
                            aria-expanded="false">Register</button>
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
    import local from '../../shared/storage/local.js';

    Vue.use(VeeValidate);
    export default {
        components:{
            Alerts
        },
        data: () => ({
            auth_form:{
                email: null,
                password: null,
            },
            submitted: false,
            
            show_alert:{
                msg:'',
                type:'',
                status: false,
            }
        }),
        mounted() {
            
        },
        methods: {
            /**
             * @method authenticate
             * authenticate a user
             * grant access to the system
             * @author @flashup4all
             * @param request
             * @returns response
             */
            authenticate(){
                this.submitted = true;
                this.$validator.validate().then(valid => {
                    if (valid) {
                        axios.post(`${url}/auth`, this.auth_form).then(res => {
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
                                    local.store_token(response.token)
                                    local.store_user(response.user)
                                    this.$router.push('app');
                                }else{
                                    this.show_alert = {
                                        msg: response.msg,
                                        type: 'alert-danger',
                                        status: true
                                    };
                                    //this.show_alert = true;
                                }
                            }else{
                                this.show_alert = {
                                    msg: response.msg,
                                    type: 'alert-danger',
                                    status: true
                                };
                            }
                            if(res.status ==401)
                            {

                            }
                        });   
                    }
                    this.submitted = false;
                });
            }
        }
    }
</script>