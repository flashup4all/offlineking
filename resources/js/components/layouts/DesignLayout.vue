<template>
  <div>
   <div id="wrapper">
        
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
        

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
