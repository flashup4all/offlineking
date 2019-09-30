<template>
    <div class="container-fluid">
       <div class="container">
            <div class="row align-items-center text-center">
              <!-- <div class="col-md-3"></div> -->
              <div class="col-md-8 move-in">
                <div class="row my-5">
                  <div class="col-md-6 my-5">
                    <div class="card intro-card">
                      <p class="offline-king-header align-text-center text-center">Create Custom Design</p>

                      <img class="img-fluid" src="../../assets/Icons/paint.svg" alt="">
                      <button class="btn btn-purple-gradient btn-rounded"> <i class="fas fa-plus"></i> Create New
                        Design</button>
                    </div>
                  </div>
                  <div class="col-md-6 my-5">
                    <div class="card intro-card">
                      <p class="offline-king-header align-text-center text-center">Select Pre-Made Template</p>

                      <img class="img-fluid" src="../../assets/Icons/mobile-app.svg" alt="">
                      <button class="btn btn-purple-gradient btn-rounded"> <i class="fas fa-plus"></i> Select
                        Template</button>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            // console.log('Component mounted.')
        }
    }
</script>