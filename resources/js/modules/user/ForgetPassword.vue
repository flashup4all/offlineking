<template>
    <div class="">
       <div class="card card-centered w-50 py-2 px-2">
                <div class="card-body">
                    <form @submit.stop.prevent="authenticate()" method="post">
                         <p class="offline-king-header">Reset Password</p>
                        <alerts v-if="show_alert.status" :message="show_alert.msg" :type="show_alert.type"></alerts>
                        <label class="setting-form-label"> Email</label>
                        <div class="settings-form my-3" :class="{'is-invalid': errors.has('email')}">
                            <div class="setting-input">
                                <i class="fas fa-envelope setting-icon"></i>
                                <input v-model="reset_password_form.email" type="text" placeholder=" Arowosegbe67@gmail.com"  v-validate="'required|email'" name="email" >
                            </div>
                        </div>
                        <p v-if="errors.has('email')" class="offline-sumo-alert-danger">
                            {{ errors.first('email') }}
                        </p>
                        <div class="form-group">
                            <button class="btn btn-purple-gradient btn-rounded pad-2 text-uppercase"
                                aria-expanded="false" :disabled="submitted">
                                <i class="fa fa-spinner" v-if="submitted"></i>
                                Reset Password</button>
                        </div>
                    </form>
                </div>

                <div class="card-footer">

                    <div class="form-group">
                        <p><router-link :to="{ name: 'signup' }" style="color:#4e73df;" class="py-2 my-3">Don't have an account ?</router-link></p>
                        <router-link :to="{ name: 'auth' }" class="py-2 my-3">
                            <button class="btn btn-purple-gradient btn-rounded pad-2 text-uppercase"
                            aria-expanded="false">login</button>
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
            reset_password_form:{
                email: null
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
                        axios.post(`${url}/reset-password-token`, this.reset_password_form).then(res => {
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
                                    this.reset_password_form.email = '';
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
                        });   
                    }
                    this.submitted = false;
                });
            }
        }
    }
</script>

<style>
    .card-login{
        width: 400px;
        text-align: center;
        padding: 20px;
    }

    .label-custom{
        float: left;
        margin: 10px 0px;
        display: block;
    }
</style>