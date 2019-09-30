/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// import Router from 'vue-router';
import router from './routes/route';
import App from './App';
// import VeeValidate from 'vee-validate';
Vue.component('side-bar', require('./components/sidebar/SideBar.vue'));
// Vue.component('auth-haeder', require('./components/header/AuthHeader.vue'));
Vue.component('app-footer', require('./components/footer/Footer.vue'));
Vue.component('dashboard-layout', require('./components/layouts/DashboardLayout.vue'));
Vue.component('simple-layout', require('./components/layouts/SimpleLayout.vue'));
Vue.component('example-component', require('./modules/ExampleComponent.vue'));
Vue.component('login-component', require('./modules/user/Login.vue').default);
Vue.component('landing', require('./modules/dashboard/Landing.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// use router
// Vue.use(Router);
// Vue.use(VeeValidate);
const app = new Vue({
    el: '#app',
    router,
    // template: '<App/>',
    components: { App }
});
