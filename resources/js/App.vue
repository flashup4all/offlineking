<template>
  <div>
  
                <router-view></router-view>
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
   .is-invalid{
        border: 1px solid #e88787 !important;
    }
    .offline-sumo-alert-danger {
      color: #761b18;
    }
    .btn, .btn:hover{
      color: #ffffff;
    }
</style>
    <script>
    import SideBar from './components/sidebar/SideBar';
    import AuthHeader from './components/header/AuthHeader';
    import Footer from './components/footer/Footer';
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
