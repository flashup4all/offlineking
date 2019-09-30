<template>
  <div>
   <div id="page-top">
        <div id="content-wrapper" class="d-flex flex-column">

            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <div class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                       <router-link :to="{ name: 'auth' }"><img src="../../assets/Icons/Logo.svg" alt="logo-big"></router-link>
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
            </nav>
            <!-- Main Content -->
            <div>
                <div class="login-page align-item-center">
        <div class="screen">
            <div class="my-5" style="margin-top: 100px !important;">
                <h2 class="offline-king-header text-center">From Zero, to Design Hero <br> in Minutes</h2>

                <div class="wrapper align-text-center text-center my-5">
                    <img class="img-fluid" width="400px" height="400px" src="../../assets/img/yourdesign.jpg" alt="">
                    <br>
                    <button class="btn btn-purple-gradient btn-rounded pad-1 my-5" aria-expanded="false">TRY FOR
                        FREE</button>
                </div>

            </div>
        </div>
        <div class="screen">
            <router-view></router-view>
        </div>
    </div>



    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>
                
            </div>
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
