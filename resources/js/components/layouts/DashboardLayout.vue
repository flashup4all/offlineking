<template>
  <div>
   <div id="wrapper">
        <side-bar></side-bar>
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <div class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                       <router-link :to="{ name: 'auth' }"><img src="./assets/Icons/Logo.svg" alt="logo-big"></router-link>
                </div>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown no-arrow mx-1 my-3">
                        <router-link :to="{ name: 'signup' }">
                            <a class="btn btn-purple-gradient btn-rounded">
                                Register
                            </a>
                        </router-link>
                    </li>

                    <div class="topbar-divider d-none d-sm-block"></div>
                    <li class="nav-item dropdown no-arrow mx-1 my-3">
                         <router-link :to="{ name: 'auth' }">
                             <a class="btn btn-purple-gradient btn-rounded">
                                Login
                            </a>
                        </router-link>
                    </li>
                </ul>
            </nav> -->
            <!-- Main Content -->
            <div id="content">
                <auth-header></auth-header>
                <router-view></router-view>
            </div>
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <span>Copyright &copy; Your Website 2019</span>
                </div>
                </div>
            </footer>
        </div>
    </div>
  </div>
</template>
<style type="text/css">
  .dropdown-menu {
    min-width: auto !important;
  }
  .modal-dialog{
    top: 65px;
  }
  a{
      color: #ffffff;
  }
  a:hover{
      color: #ffffff;
      font-weight: bolder;
  }
</style>
    <script>
    import SideBar from '../../components/sidebar/SideBar';
    import AuthHeader from '../../components/header/AuthHeader';
    import Footer from '../../components/footer/Footer';
     export default {
         components:{
             SideBar,
             AuthHeader,
             Footer,
         }
     }
</script>

<style lang="scss">
//   @import "assets/base.scss";
</style>
