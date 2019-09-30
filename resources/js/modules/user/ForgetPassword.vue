<template>
    <div class="">
        <div id="wrapper">



        <!-- Content Wrapper -->
        
                <!-- Topbar -->

                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">
                    <div class="row">

                        <div class="col-md-6">
                           <h2 class="offline-king-header text-center">From Zero, to Design Hero <br> in Minutes</h2>
                        </div>

                        <div class="col-md-6">
                            <div class="card card-login">
                                <div class="card-body">
                                    <form action="">
                                        <label class="col-form-label label-custom">Email</label>
                                        <div class="input-group my-2">
                                            
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><i class="fas fa-plus"></i> </div>
                                            </div>

                                            <input type="text" class="form-control"
                                                placeholder="Arowosegbe67@gmail.com">
                                        </div>
                                        <div class="form-group">
                                            <button class="btn btn-purple-gradient btn-rounded"
                                                aria-expanded="false">Reset</button>
                                        </div>


                                    </form>

                                </div>

                                <div class="card-footer">
                                    <router-link :to="{ name: 'auth' }">Login?</router-link>

                                    <!-- <div class="form-group">
                                        <button class="btn btn-purple-gradient btn-rounded"
                                            aria-expanded="false">Register</button>
                                    </div> -->
                                </div>
                            </div>
                        </div>

                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->



        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
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