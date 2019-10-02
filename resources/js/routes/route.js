import Vue from 'vue';
import Router from 'vue-router';
import local from '../shared/storage/local.js';

Vue.use(Router);

const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/auth'
        },
        {
            path: '/',
            redirect: '/auth'
        },
        // partials
        {
            path: '/',
            //name: 'app',
            //meta: {layout: 'userpages'},
            component: () => import('../components/layouts/SimpleLayout.vue'),
            children:[
                {
                    path: '/auth',
                    name: 'auth',
                    meta: {layout: 'userpages'},
                    component: () => import('../modules/user/Login.vue'),
                },
                {
                    path: '/signup/:user_crypt_id?',
                    name: 'signup',
                    meta: {layout: 'userpages'},
                    component: () => import('../modules/user/Signup.vue'),
                },
                {
                    path: '/forgot-password',
                    name: 'forgot-password',
                    meta: {layout: 'userpages'},
                    component: () => import('../modules/user/ForgetPassword.vue'),
                },
                {
                    path: '/reset-password/:user_crypt_id',
                    name: 'reset-password',
                    meta: {layout: 'userpages'},
                    component: () => import('../modules/user/ResetPassword.vue'),
                },
            ]
        },
        
        {
            path: '/app',
            //name: 'app',
            //meta: {layout: 'userpages'},
            component: () => import('../components/layouts/DashboardLayout.vue'),
            children:[
                {
                    path: '/',
                    name: 'app',
                    //meta: {layout: 'userpages'},
                    component: () => import('../modules/dashboard/Landing.vue'),
                },
                {
                    path: '/app/settings',
                    name: 'settings',
                    //meta: {layout: 'userpages'},
                    component: () => import('../modules/user/Settings.vue'),
                }
            ],
            beforeEnter(to, from, next) {
                let token = local.get_token();
                if(token)
                {
                    next()
                } else {
                    next({
                      name: "auth" // back to safety route //
                    });
                }
                // logic here
              }
        },
        {
            path: '/designs',
            //name: 'app',
            //meta: {layout: 'userpages'},
            component: () => import('../components/layouts/DesignLayout.vue'),
            children:[
                {
                    path: '/',
                    name: 'designs',
                    //meta: {layout: 'userpages'},
                    component: () => import('../modules/designs/Design.vue'),
                }
            ],
            beforeEnter(to, from, next) {
                let token = local.get_token();
                if(token)
                {
                    next()
                } else {
                    next({
                      name: "auth" // back to safety route //
                    });
                }
                // logic here
              }
        },
    ]
  })

  export default router;