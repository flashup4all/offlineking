<template>
    <div class="">
        <div class="card  w-50 mx-5 my-5 px-2" style="margin-left: 200px !important;">
                <div class="card-body">
                    <form @submit.stop.prevent="reset_password()" method="post">
                        <p class="offline-king-header">Reset Password</p>
                        <alerts v-if="show_alert.status" :message="show_alert.msg" :type="show_alert.type"></alerts>
                        <label class="setting-form-label"> Password</label>
                        <div class="settings-form my-3" :class="{'is-invalid': errors.has('password')}">
                            <div class="setting-input">
                                <i class="fas fa-unlock setting-icon"></i>
                                <input name="password" v-model="reset_password_form.password" type="password" placeholder=" **************** " v-validate="'required'" ref="password">
                            </div>
                        </div>
                        <p v-if="errors.has('password')" class="offline-sumo-alert-danger">
                            {{ errors.first('password') }}
                        </p>
                        <label class="setting-form-label">Repeat Password</label>
                        <div class="settings-form my-3" :class="{'is-invalid': errors.has('c_password')}">
                            <div class="setting-input">
                                <i class="fas fa-unlock setting-icon"></i>
                                <input name="c_password" v-model="reset_password_form.c_password" type="password" placeholder=" **************** " v-validate="'required|confirmed:password'">
                            </div>
                        </div>
                        <p v-if="errors.has('c_password')" class="offline-sumo-alert-danger">
                            <!-- {{ errors.first('c_password') }} -->
                            Repeat password do not match password
                        </p>
                        <div class="form-group">
                            <button class="btn btn-purple-gradient btn-rounded pad-2 text-uppercase"
                                aria-expanded="false">
                                <i class="fa fa-spinner" v-if="submitted"></i>
                                Save</button>
                        </div>
                    </form>



                </div>

                <div class="card-footer">

                    <div class="form-group">
                        <p><router-link :to="{ name: 'auth' }" class="py-2 my-3" style="color:#4e73df;">login</router-link></p>
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
            reset_password_form:{
                password: null,
                password_confirmation: null,
                subscribe:null,
            },
            ofikd: null,
            submitted: false,
            
            show_alert:{
                msg:'',
                type:'',
                status: false,
            }
        }),
        mounted() {
            if(this.$route.params.user_crypt_id)
            {
                this.ofikd = this.$route.params.user_crypt_id;
            }
        },
        methods: {
            /**
             * @method reset_password
             * validate the reset_password form
             * create a new user resource
             * @author @flashup4all
             * @param request
             * @returns response
             */
            reset_password(){
                this.submitted = true;
                this.$validator.validate().then(valid => {
                    if (valid) {
                        if(this.ofikd)
                        {
                            this.reset_password_form.ofikd = this.ofikd;
                        }else{
                            return this.show_alert = {
                                        msg: 'reset link expired or has been used already',
                                        type: 'alert-danger',
                                        status: true
                                    };
                        }
                         axios.post(`${url}/reset-password`, this.reset_password_form).then(res => {
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
                                    //this.reset_password_form = [];
                                    //setTimeout(function() {
                                        this.$router.push('auth');                                        
                                    //}, 5000);
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