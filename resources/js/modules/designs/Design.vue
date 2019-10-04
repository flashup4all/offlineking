<template>

    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow">
          <router-link :to="{ name: 'app' }" class="navbar-brand">
              <img src="../../assets/Icons/arrow-point-to-right.svg" alt="" style="width: .8em; transform: rotate(180deg);">
          </router-link>
          <button class="nav-toggle btn btn-purple-gradient the-toggle" type="button" data-target=".navbar-collapse" data-toggle="collapse"><i class="fas fa-bars"></i></button>
        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link text-primary" href="#">Desktop Walpaper - <span class="text-dark">UI-UX</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Saved
                </a>
              </li>
            </ul>
            
            <ul class="navbar-nav my-2 my-lg-0 ad-nav">
              <!-- <li class="nav-item"><a href="#" class="text-dark nav-link"><img src="../../assets/Icons/eye.svg" alt=""> Preview</a></li> -->
              <li class="nav-item" @click="undo()"><a class="text-dark nav-link"><img src="../../assets/Icons/curve-arrow.svg" alt=""> Undo</a></li>
              <li class="nav-item" @click="redo()"><a class="text-dark nav-link"><img src="../../assets/Icons/eye.svg" alt=""> Redo</a></li>
              <!-- <li class="nav-item"><a href="#" class="text-dark nav-link"><img src="../../assets/Icons/share-symbol.svg" alt=""> Share</a></li>
              <li class="nav-item"><a href="#" class="text-dark nav-link"><img src="../../assets/Icons/save-file-option.svg" alt=""> Save</a></li>
              <li class="nav-item"><a href="#" class="text-dark nav-link"><img src="../../assets/Icons/download (1).svg" alt=""> Download</a></li> -->
              
              <div class="topbar-divider d-none d-sm-block"></div>

              <li class="nav-item no-arrow mx-1 my-1">
                <!-- <button class="btn btn-purple-gradient btn-rounded" data-toggle="modal" data-target="#logoutModal"
                  href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  Upgrade
                </button> -->

                
            <!-- Nav Item - User Information -->
              <li class="nav-item dropdown no-arrow">
                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <img class="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60">
                </a>
                <!-- Dropdown - User Information -->
                <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </a>
                </div>
              </li>
              </li>
            </ul>
          </div>
        </nav>
        <!-- <div class="row">
            <div class="col">s</div>
            <div  id="slider" class="col-3" :class="(group_divs.status)?'slide-in':'slide-out'" style="background:red;">d</div>
            <div class="col-8">f</div>
        </div> -->

            <div class="color-div template-div side-div overflow-auto" style="overflow-x: hidden;">
              <div class="sidenav">
                <li><a @click="div_selector('template_div')" class="text-dark"><img src="../../assets/Icons/template.svg" alt=""><br> Template</a></li>
                <li><a href="builder-photos.html" class="text-dark"><img src="../../assets/Icons/frame-landscape.svg" alt=""><br> Photos</a></li>
                <li @click="div_selector('text_div')"><a class="text-dark"><img src="../../assets/Icons/font.svg" alt=""><br> Text</a></li>
                <li><a href="elements.html" class="text-dark"><img src="../../assets/Icons/coffee-cup-on-a-plate-black-silhouettes.svg" alt=""><br> Elements</a></li>
                <li @click="div_selector('colors_div')"><a class="text-dark"><img src="../../assets/Icons/fill.svg" alt=""><br> Background</a></li>
                <li><a @click="div_selector('upload_div')" class="text-dark"><img src="../../assets/Icons/upload.svg" alt=""><br> Upload</a></li>
                <li><a class="text-dark"><img src="../../assets/Icons/open-folder.svg" alt=""><br> Folder</a></li>
              </div>
              <!-- <button>Toggle</button> -->
              <!-- <aside >
                <nav>
                    <a href="#">Item1</a>
                    <a href="#">Item2</a>
                    <a href="#">Item3</a>
                </nav>
            </aside> -->
              <div v-if="group_divs.status">  
              <div v-if="group_divs.name == 'template_div'" style="padding-right: 20px;">
                  <input type="search" name="" id="" style="border: 0; border-bottom: 1px solid gray; padding: 10px;" placeholder="Search for a category">
                  <br> <br>
                  <div>
                      <p class="text-primary" style="padding-bottom: 10px;">Walpaper Template</p>
                      <div>
                        <div style="width: 80%; background: #4e73df; color: white; padding: 30px 20px;border-radius: 10px;font-size: 1.9em;font-weight: bold;">
                          <p class="text-center">UI/UX</p>
                        </div>
                        <p>Template 1</p>
                      </div>
                      <div>
                        <div style="width: 80%; background: #4e73df; color: white; padding: 30px 20px;border-radius: 10px;font-size: 1.9em;font-weight: bold;">
                          <p class="text-center">UI/UX</p>
                        </div>
                        <p>Template 2</p>
                      </div>
                      <div>
                        <div style="width: 80%; background: #4e73df; color: white; padding: 30px 20px;border-radius: 10px;font-size: 1.9em;font-weight: bold;">
                          <p class="text-center">UI/UX</p>
                        </div>
                        <p>Template 3</p>
                      </div>
                    
                  </div>
              </div>
           <div v-if="group_divs.name == 'upload_div'" style="padding-right: 20px;">
               <div>
                        <div>
                            <p class="text-primary">Upload an image here</p>
                            <button class="btn btn-primary btn-rounded">
                                 <label for="image">
                                      <input type="file" name="image" id="image" style="display:none;" @change="onFileChange"/>
                                      <img src="../../assets/Icons/upload-slim.svg" alt="" style="width: 1.4em;"> &nbsp; SELECT FILE
                                 </label></button>
                            <br><br>
                            <p>You can also drag and drop 1 or more pictures</p>
                        </div>
                        <br>
                        
                    </div>
                  <div>
                      <p class="text-primary" style="padding-bottom: 10px;">Recent Uploads</p>
                      <div>
                        <div @click="onAddImage('recent1')" style="width: 80%; color: white;padding:10px;border-radius: 10px;font-size: 1.9em;font-weight: bold;">
                          <img src="../../assets/img/recent.jpg" alt="" id="recent1" height="150px" width="200px">
                        </div>
                      </div>
                      <div>
                        <div style="width: 80%; color: white;padding:10px;border-radius: 10px;font-size: 1.9em;font-weight: bold;">
                          <img src="../../assets/img/recent.jpg" alt="" height="150px" width="200px">                            
                        </div>
                      </div>
                      <div>
                        <div style="width: 80%;padding:10px; color: white; padding: 10px;border-radius: 10px;font-size: 1.9em;font-weight: bold;">
                            <img src="../../assets/img/recent.jpg" alt="" height="150px" width="200px">
                        </div>
                      </div>
                    
                  </div>
              </div>
              <div v-if="group_divs.name == 'text_div'" style="padding-right: 20px;">
                  <input type="search" name="" id="" style="border: 0; border-bottom: 1px solid gray; padding: 10px;" placeholder="Search for a category">
                  <br> <br>
                  <div>
                        <p style="padding-bottom: 10px;">Text Samples</p>
                        <div @click="onAddText('Don\'t jump dude!')" style="cursor:pointer;">
                            <div style="width: 80%; padding: 30px 20px;border-radius: 10px;font-size: 1.9em;font-weight: bold;">
                                <p class="text-center"><span style="color: #4e73df;">Wait</span> <br>
                                Don't jump dude!</p>
                            </div>
                        </div>
                  </div>
              </div>
              <div v-if="group_divs.name == 'colors_div'" style="padding-right: 20px;">
                  <input type="search" name="" id="" style="border: 0; border-bottom: 1px solid gray; padding: 10px;" placeholder="Search for a category">
                  <br> <br>
                  <div>
                        <div>
                            <p>Opacity</p>
                            <input type="range" class="custom-range" name="" @change="set_opacity($event)" id="range">
                        </div>
                        <br>
                        <div>
                            <p>Solid Colors</p>
                            <div class="color-select">
                                <div v-for="color in color_list1" class="color" @click="onColor(color)"><div class="color1" :style="{background: color }" style="border: 1px solid gray;"></div></div>
                                
                            </div>
                            <div class="color-select">
                                <div v-for="color in color_list2" class="color" @click="onColor(color)"><div class="color1" :style="{background: color }" style="border: 1px solid gray;"></div></div>                                
                            </div>
                            <a href="#" class="text-primary text-center" style="font-size: .8em" @click="show_color_field = !show_color_field">See All</a>
                        </div>
                        <div v-if="show_color_field">
                            <input class="form-control" @change="get_selected_color($event)" value="selected_color" type="color">
                        </div>
                        <br>
                        <!-- <div>
                            <p>Gradient</p>
                            <div class="color-select">
                                <div class="color"><div class="color1"></div></div>
                                <div class="color"><div class="color2"></div></div>
                                <div class="color"><div class="color3"></div></div>
                                <div class="color"><div class="color4"></div></div>
                                <div class="color"><div class="color5"></div></div>
                                <div class="color"><div class="color6"></div></div>
                                
                            </div>
                            <div class="color-select">
                                <div class="color"><div class="color1"></div></div>
                                <div class="color"><div class="color2"></div></div>
                                <div class="color"><div class="color3"></div></div>
                                <div class="color"><div class="color4"></div></div>
                                <div class="color"><div class="color5"></div></div>
                                <div class="color"><div class="color6"></div></div>
                                

                            </div>
                            <a href="#" class="text-primary text-center" style="font-size: .8em">See All</a>
                        </div> -->
                    </div>
              </div>
              </div>
            </div>
          <!-- Page Heading -->
          <div class="color-list">
              
              <div class="container-fluid edit">
                <div class="list">
                  <ul>
                    <li class="li-active"><a href="builder-color.html"><div class="circle"></div></a></li>
                    <li><a href="builder-filter.html"><img src="../../assets/Icons/filter.svg" alt=""></a></li>
                    <li><a href="builder-adjustment.html"><img src="../../assets/Icons/volume-levels.svg" alt="" class="rotate"></a></li>
                    <li><a href="crop.html"><img src="../../assets/Icons/crop.svg" alt=""></a></li>
                    <li><a href="rotation.html"><img src="../../assets/Icons/rotating-arrow-to-the-left.svg" alt=""></a></li>
                  </ul>
                </div>
                <div class="">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  <div class="row">
                      <canvas id="canvas"></canvas>
                      <!-- <img  src="../../assets/img/user.jpg" id="my-image"> -->
                  </div>
                </div>
                <div class="list">
                    <ul>
                      <li id="tooltip" data-toggle="tooltip" data-placement="top" title="Add New"><img src="../../assets/Icons/delete-photo.svg" alt=""></li>
                      <li @click="deleteObject"><img src="../../assets/Icons/delete-photo.svg" alt=""></li>
                      <li><img src="../../assets/Icons/copy-content.svg" alt=""></li>
                    </ul>
                  </div>
              </div>
          </div>


          <div class="desc">
            <p><span class="span">Page 1</span> - UI-UX</p>
            <!-- <div>
              <img src="../../assets/Icons/zoom-in.svg" alt="">
              <p>100%</p>
              <img src="../../assets/Icons/zoom-out.svg" alt="">
              <img src="../../assets/Icons/maximize.svg" alt="" style="width: 1.2em">
            </div> -->
          </div>
        <!-- /.container-fluid -->

      </div>
</template>

<script>
    // import {ImageEditor} from '@toast-ui/vue-image-editor';
    import { fabric } from 'fabric'
    import 'fabric-history';
    export default {
        components: {
            
        },
        
        data() {
            return {
               img_url: '../../assets/img/yourdesign.jpg',
               show_color_field: false,
               selected_color:null,
               group_divs: {
                    name: false,
                    status:false
               },
               color_list1:['#ffffff','#eeeeee', '#dddddd', '#aaaaaa', '#000000', '#fe34de'],
               color_list2:['#e3e3e4','#eeeeee', '#dddddd', '#aaaaaa', '#000000', '#fe34de']
            };
        },
        mounted() {
            var canvas = new fabric.Canvas('canvas', {
                backgroundColor: "#eeeeee",
                width: 500,
                height: 400,
                border: '1px solid #000000'
                });
                this.canvas = canvas;
                canvas.selection = false; // disable group selection
                canvas.historyInit();
                canvas.renderAll();
                
        },
        methods:{
            
            onColor(color) {
                // console.log(this.canvas.getActiveObject().get('type'))
                if(this.canvas.getActiveObject())
                {
                    this.canvas.getActiveObject().set("fill", color);
                    this.canvas.renderAll();
                }else{
                    alert('please select an element to change color')
                }
                //console.log(iText4)
                //this.canvas.add(iText4);
            },
            get_selected_color(e)
            {
                let color = e.target.value
                if(this.canvas.getActiveObject())
                {
                    this.canvas.getActiveObject().set("fill", color);
                    this.canvas.renderAll();
                }else{
                    alert('please select an element to change color')
                }
            },
            set_opacity(e)
            {
                let opacity = e.target.value
                if(this.canvas.getActiveObject())
                {
                    this.canvas.getActiveObject().setOpacity(opacity);
                    this.canvas.renderAll();
                }else{
                    alert('please select an element to change color')
                }
            },
            div_selector(div)
            {
                //this.active = !this.active
                this.group_divs = [];
                this.group_divs.status = !this.group_divs.status;
                this.group_divs.name = div;
            },
             onAddText(text) {
                var iText4 = new fabric.IText(text, {
                    left: 200,
                    top: 50,
                    fontFamily: 'Lobster',
                    caching: false
                });
                this.canvas.add(iText4);
            },
            onAddImage(id) {
                var imgElement = document.getElementById(id);
                var imgInstance = new fabric.Image(imgElement, (img) =>{
                let scale = 900 / img.width;
                    img.filters.push(new fabric.Image.filters.Grayscale());
                    img.set({
                        scaleX: scale,
                        scaleY: scale
                    });
               
                // this.canvas.add(img);
                });
                this.canvas.add(imgInstance);
            },
            deleteObject() {
                var activeObject = this.canvas.getActiveObject(),
                activeGroup = this.canvas.getActiveGroup();
                if (activeObject) {
                    if (confirm('Are you sure?')) {
                        this.canvas.remove(activeObject);
                    }
                }
                else if (activeGroup) {
                    if (confirm('Are you sure?')) {
                        var objectsInGroup = activeGroup.getObjects();
                        canvas.discardActiveGroup();
                        objectsInGroup.forEach(function(object) {
                        this.canvas.remove(object);
                        });
                    }
                }
            },
            check_active_object_type(e){
                console.log(e)
            },

            undo(){
                this.canvas.undo();
            },
            redo(){
                this.canvas.redo();
            },
            onFileChange(e) {
              const file = e.target.files[0];
               let url = URL.createObjectURL(file);
               var imgInstance = new fabric.Image(url, {
                    left: 100,
                    top: 100,
                    angle: 30,
                    opacity: 0.85
                });
                this.canvas.add(imgInstance);
            //   let url = URL.createObjectURL(file);
              //let data = new FormData();
              // data.append('name', 'my-picture');
              //data.append('avatar', event.target.files[0]); 
              //var file = e.target.files[0];
                // var reader = new FileReader();
                // reader.onload = function(f) {
                //     var data = f.target.result;
                //     fabric.Image.fromURL(data, function(img) {
                //         var oImg = img.set({ left: 50, top: 100 }).scale(0.9);
                //         this.canvas.add(oImg).renderAll();
                //         this.canvas.setActiveObject(oImg);
                //     });
                // };
                // reader.readAsDataURL(file);
              
            },
        }
    }
</script>
<style scoped>
#slider {
    /* position: absolute; */
    width: 100px;
    height: 100px;
    background: blue;
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
}

.slide-in {
    animation: slide-in 0.5s forwards;
    -webkit-animation: slide-in 0.5s forwards;
}

.slide-out {
    animation: slide-out 0.5s forwards;
    -webkit-animation: slide-out 0.5s forwards;
}
    
@keyframes slide-in {
    100% { transform: translateX(0%); }
}

@-webkit-keyframes slide-in {
    100% { -webkit-transform: translateX(0%); }
}
    
@keyframes slide-out {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
}

@-webkit-keyframes slide-out {
    0% { -webkit-transform: translateX(0%); }
    100% { -webkit-transform: translateX(-100%); }
}
</style>