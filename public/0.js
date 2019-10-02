(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/designs/Design.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/designs/Design.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fabric_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fabric-history */ "./node_modules/fabric-history/index.js");
/* harmony import */ var fabric_history__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fabric_history__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import {ImageEditor} from '@toast-ui/vue-image-editor';


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      img_url: '../../assets/img/yourdesign.jpg',
      show_color_field: false,
      selected_color: null,
      group_divs: {
        name: false,
        status: false
      },
      color_list1: ['#ffffff', '#eeeeee', '#dddddd', '#aaaaaa', '#000000', '#fe34de'],
      color_list2: ['#e3e3e4', '#eeeeee', '#dddddd', '#aaaaaa', '#000000', '#fe34de']
    };
  },
  mounted: function mounted() {
    var canvas = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Canvas('canvas', {
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
  methods: {
    onColor: function onColor(color) {
      // console.log(this.canvas.getActiveObject().get('type'))
      if (this.canvas.getActiveObject()) {
        this.canvas.getActiveObject().set("fill", color);
        this.canvas.renderAll();
      } else {
        alert('please select an element to change color');
      } //console.log(iText4)
      //this.canvas.add(iText4);

    },
    get_selected_color: function get_selected_color(e) {
      var color = e.target.value;

      if (this.canvas.getActiveObject()) {
        this.canvas.getActiveObject().set("fill", color);
        this.canvas.renderAll();
      } else {
        alert('please select an element to change color');
      }
    },
    set_opacity: function set_opacity(e) {
      var opacity = e.target.value;

      if (this.canvas.getActiveObject()) {
        this.canvas.getActiveObject().setOpacity(opacity);
        this.canvas.renderAll();
      } else {
        alert('please select an element to change color');
      }
    },
    div_selector: function div_selector(div) {
      //this.active = !this.active
      this.group_divs = [];
      this.group_divs.status = !this.group_divs.status;
      console.log(this.group_divs.status);
      this.group_divs.name = div;
    },
    onAddText: function onAddText(text) {
      var iText4 = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].IText(text, {
        left: 200,
        top: 50,
        fontFamily: 'Lobster',
        caching: false
      });
      this.canvas.add(iText4);
    },
    onAddImage: function onAddImage() {
      var imgElement = document.getElementById('my-image');
      var imgInstance = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Image(imgElement, {
        left: 100,
        top: 100,
        angle: 30,
        opacity: 0.85
      });
      this.canvas.add(imgInstance);
    },
    check_active_object_type: function check_active_object_type(e) {
      console.log(e);
    },
    undo: function undo() {
      this.canvas.undo();
    },
    redo: function redo() {
      this.canvas.redo();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/designs/Design.vue?vue&type=style&index=0&id=efbbb384&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/designs/Design.vue?vue&type=style&index=0&id=efbbb384&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#slider[data-v-efbbb384] {\n    /* position: absolute; */\n    width: 100px;\n    height: 100px;\n    background: blue;\n    transform: translateX(-100%);\n    -webkit-transform: translateX(-100%);\n}\n.slide-in[data-v-efbbb384] {\n    animation: slide-in-data-v-efbbb384 0.5s forwards;\n    -webkit-animation: slide-in-data-v-efbbb384 0.5s forwards;\n}\n.slide-out[data-v-efbbb384] {\n    animation: slide-out-data-v-efbbb384 0.5s forwards;\n    -webkit-animation: slide-out-data-v-efbbb384 0.5s forwards;\n}\n@keyframes slide-in-data-v-efbbb384 {\n100% { transform: translateX(0%);\n}\n}\n@-webkit-keyframes slide-in-data-v-efbbb384 {\n100% { -webkit-transform: translateX(0%);\n}\n}\n@keyframes slide-out-data-v-efbbb384 {\n0% { transform: translateX(0%);\n}\n100% { transform: translateX(-100%);\n}\n}\n@-webkit-keyframes slide-out-data-v-efbbb384 {\n0% { -webkit-transform: translateX(0%);\n}\n100% { -webkit-transform: translateX(-100%);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/designs/Design.vue?vue&type=style&index=0&id=efbbb384&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/designs/Design.vue?vue&type=style&index=0&id=efbbb384&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Design.vue?vue&type=style&index=0&id=efbbb384&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/designs/Design.vue?vue&type=style&index=0&id=efbbb384&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/designs/Design.vue?vue&type=template&id=efbbb384&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/designs/Design.vue?vue&type=template&id=efbbb384&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "nav",
      { staticClass: "navbar navbar-expand-lg navbar-light bg-white shadow" },
      [
        _c(
          "router-link",
          { staticClass: "navbar-brand", attrs: { to: { name: "app" } } },
          [
            _c("img", {
              staticStyle: { width: ".8em", transform: "rotate(180deg)" },
              attrs: {
                src: __webpack_require__(/*! ../../assets/Icons/arrow-point-to-right.svg */ "./resources/js/assets/Icons/arrow-point-to-right.svg"),
                alt: ""
              }
            })
          ]
        ),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "collapse navbar-collapse",
            attrs: { id: "navbarSupportedContent" }
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _c("ul", { staticClass: "navbar-nav my-2 my-lg-0 ad-nav" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  on: {
                    click: function($event) {
                      return _vm.undo()
                    }
                  }
                },
                [_vm._m(3)]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "nav-item",
                  on: {
                    click: function($event) {
                      return _vm.redo()
                    }
                  }
                },
                [_vm._m(4)]
              ),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _vm._m(6),
              _vm._v(" "),
              _vm._m(7),
              _vm._v(" "),
              _c("div", { staticClass: "topbar-divider d-none d-sm-block" }),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item no-arrow mx-1 my-1" }),
              _vm._m(8)
            ])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "color-div template-div side-div overflow-auto",
        staticStyle: { "overflow-x": "hidden" }
      },
      [
        _c("div", { staticClass: "sidenav" }, [
          _c("li", [
            _c(
              "a",
              {
                staticClass: "text-dark",
                on: {
                  click: function($event) {
                    return _vm.div_selector("template_div")
                  }
                }
              },
              [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../../assets/Icons/template.svg */ "./resources/js/assets/Icons/template.svg"),
                    alt: ""
                  }
                }),
                _c("br"),
                _vm._v(" Template")
              ]
            )
          ]),
          _vm._v(" "),
          _vm._m(9),
          _vm._v(" "),
          _c(
            "li",
            {
              on: {
                click: function($event) {
                  return _vm.div_selector("text_div")
                }
              }
            },
            [_vm._m(10)]
          ),
          _vm._v(" "),
          _vm._m(11),
          _vm._v(" "),
          _c(
            "li",
            {
              on: {
                click: function($event) {
                  return _vm.div_selector("colors_div")
                }
              }
            },
            [_vm._m(12)]
          ),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "text-dark",
                on: {
                  click: function($event) {
                    return _vm.div_selector("upload_div")
                  }
                }
              },
              [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../../assets/Icons/upload.svg */ "./resources/js/assets/Icons/upload.svg"),
                    alt: ""
                  }
                }),
                _c("br"),
                _vm._v(" Upload")
              ]
            )
          ]),
          _vm._v(" "),
          _vm._m(13)
        ]),
        _vm._v(" "),
        _vm.group_divs.status
          ? _c("div", [
              _vm.group_divs.name == "template_div"
                ? _c("div", { staticStyle: { "padding-right": "20px" } }, [
                    _c("input", {
                      staticStyle: {
                        border: "0",
                        "border-bottom": "1px solid gray",
                        padding: "10px"
                      },
                      attrs: {
                        type: "search",
                        name: "",
                        id: "",
                        placeholder: "Search for a category"
                      }
                    }),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _vm._m(14)
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.group_divs.name == "upload_div"
                ? _c("div", { staticStyle: { "padding-right": "20px" } }, [
                    _vm._m(15),
                    _vm._v(" "),
                    _vm._m(16)
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.group_divs.name == "text_div"
                ? _c("div", { staticStyle: { "padding-right": "20px" } }, [
                    _c("input", {
                      staticStyle: {
                        border: "0",
                        "border-bottom": "1px solid gray",
                        padding: "10px"
                      },
                      attrs: {
                        type: "search",
                        name: "",
                        id: "",
                        placeholder: "Search for a category"
                      }
                    }),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", [
                      _c("p", { staticStyle: { "padding-bottom": "10px" } }, [
                        _vm._v("Text Samples")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: { cursor: "pointer" },
                          on: {
                            click: function($event) {
                              return _vm.onAddText("Don't jump dude!")
                            }
                          }
                        },
                        [_vm._m(17)]
                      ),
                      _vm._v(" "),
                      _vm._m(18),
                      _vm._v(" "),
                      _vm._m(19),
                      _vm._v(" "),
                      _vm._m(20),
                      _vm._v(" "),
                      _vm._m(21)
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.group_divs.name == "colors_div"
                ? _c("div", { staticStyle: { "padding-right": "20px" } }, [
                    _c("input", {
                      staticStyle: {
                        border: "0",
                        "border-bottom": "1px solid gray",
                        padding: "10px"
                      },
                      attrs: {
                        type: "search",
                        name: "",
                        id: "",
                        placeholder: "Search for a category"
                      }
                    }),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", [
                      _c("div", [
                        _c("p", [_vm._v("Opacity")]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "custom-range",
                          attrs: { type: "range", name: "", id: "range" },
                          on: {
                            change: function($event) {
                              return _vm.set_opacity($event)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("div", [
                        _c("p", [_vm._v("Solid Colors")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "color-select" },
                          _vm._l(_vm.color_list1, function(color) {
                            return _c(
                              "div",
                              {
                                staticClass: "color",
                                on: {
                                  click: function($event) {
                                    return _vm.onColor(color)
                                  }
                                }
                              },
                              [
                                _c("div", {
                                  staticClass: "color1",
                                  staticStyle: { border: "1px solid gray" },
                                  style: { background: color }
                                })
                              ]
                            )
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "color-select" },
                          _vm._l(_vm.color_list2, function(color) {
                            return _c(
                              "div",
                              {
                                staticClass: "color",
                                on: {
                                  click: function($event) {
                                    return _vm.onColor(color)
                                  }
                                }
                              },
                              [
                                _c("div", {
                                  staticClass: "color1",
                                  staticStyle: { border: "1px solid gray" },
                                  style: { background: color }
                                })
                              ]
                            )
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "text-primary text-center",
                            staticStyle: { "font-size": ".8em" },
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                _vm.show_color_field = !_vm.show_color_field
                              }
                            }
                          },
                          [_vm._v("See All")]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.show_color_field
                        ? _c("div", [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { value: "selected_color", type: "color" },
                              on: {
                                change: function($event) {
                                  return _vm.get_selected_color($event)
                                }
                              }
                            })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("br")
                    ])
                  ])
                : _vm._e()
            ])
          : _vm._e()
      ]
    ),
    _vm._v(" "),
    _vm._m(22),
    _vm._v(" "),
    _vm._m(23)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "nav-toggle btn btn-purple-gradient the-toggle",
        attrs: {
          type: "button",
          "data-target": ".navbar-collapse",
          "data-toggle": "collapse"
        }
      },
      [_c("i", { staticClass: "fas fa-bars" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "navbar-nav mr-auto" }, [
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          { staticClass: "nav-link text-primary", attrs: { href: "#" } },
          [
            _vm._v("Desktop Walpaper - "),
            _c("span", { staticClass: "text-dark" }, [_vm._v("UI-UX")])
          ]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
          _vm._v("\n              Saved\n            ")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "text-dark nav-link", attrs: { href: "#" } }, [
        _c("img", {
          attrs: { src: __webpack_require__(/*! ../../assets/Icons/eye.svg */ "./resources/js/assets/Icons/eye.svg"), alt: "" }
        }),
        _vm._v(" Preview")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "text-dark nav-link" }, [
      _c("img", {
        attrs: { src: __webpack_require__(/*! ../../assets/Icons/curve-arrow.svg */ "./resources/js/assets/Icons/curve-arrow.svg"), alt: "" }
      }),
      _vm._v(" Undo")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "text-dark nav-link" }, [
      _c("img", {
        attrs: { src: __webpack_require__(/*! ../../assets/Icons/eye.svg */ "./resources/js/assets/Icons/eye.svg"), alt: "" }
      }),
      _vm._v(" Redo")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "text-dark nav-link", attrs: { href: "#" } }, [
        _c("img", {
          attrs: {
            src: __webpack_require__(/*! ../../assets/Icons/share-symbol.svg */ "./resources/js/assets/Icons/share-symbol.svg"),
            alt: ""
          }
        }),
        _vm._v(" Share")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "text-dark nav-link", attrs: { href: "#" } }, [
        _c("img", {
          attrs: {
            src: __webpack_require__(/*! ../../assets/Icons/save-file-option.svg */ "./resources/js/assets/Icons/save-file-option.svg"),
            alt: ""
          }
        }),
        _vm._v(" Save")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "text-dark nav-link", attrs: { href: "#" } }, [
        _c("img", {
          attrs: {
            src: __webpack_require__(/*! ../../assets/Icons/download (1).svg */ "./resources/js/assets/Icons/download (1).svg"),
            alt: ""
          }
        }),
        _vm._v(" Download")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown no-arrow" }, [
      _c(
        "a",
        {
          staticClass: "nav-link dropdown-toggle",
          attrs: {
            href: "#",
            id: "userDropdown",
            role: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        },
        [
          _c("img", {
            staticClass: "img-profile rounded-circle",
            attrs: { src: "https://source.unsplash.com/QAB-WJcbgJk/60x60" }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "dropdown-menu dropdown-menu-right shadow animated--grow-in",
          attrs: { "aria-labelledby": "userDropdown" }
        },
        [
          _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
            _c("i", {
              staticClass: "fas fa-user fa-sm fa-fw mr-2 text-gray-400"
            }),
            _vm._v("\n                Profile\n              ")
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
            _c("i", {
              staticClass: "fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"
            }),
            _vm._v("\n                Settings\n              ")
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
            _c("i", {
              staticClass: "fas fa-list fa-sm fa-fw mr-2 text-gray-400"
            }),
            _vm._v("\n                Activity Log\n              ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dropdown-divider" }),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "dropdown-item",
              attrs: {
                href: "#",
                "data-toggle": "modal",
                "data-target": "#logoutModal"
              }
            },
            [
              _c("i", {
                staticClass:
                  "fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
              }),
              _vm._v("\n                Logout\n              ")
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        { staticClass: "text-dark", attrs: { href: "builder-photos.html" } },
        [
          _c("img", {
            attrs: {
              src: __webpack_require__(/*! ../../assets/Icons/frame-landscape.svg */ "./resources/js/assets/Icons/frame-landscape.svg"),
              alt: ""
            }
          }),
          _c("br"),
          _vm._v(" Photos")
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "text-dark" }, [
      _c("img", {
        attrs: { src: __webpack_require__(/*! ../../assets/Icons/font.svg */ "./resources/js/assets/Icons/font.svg"), alt: "" }
      }),
      _c("br"),
      _vm._v(" Text")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { staticClass: "text-dark", attrs: { href: "elements.html" } }, [
        _c("img", {
          attrs: {
            src: __webpack_require__(/*! ../../assets/Icons/coffee-cup-on-a-plate-black-silhouettes.svg */ "./resources/js/assets/Icons/coffee-cup-on-a-plate-black-silhouettes.svg"),
            alt: ""
          }
        }),
        _c("br"),
        _vm._v(" Elements")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "text-dark" }, [
      _c("img", {
        attrs: { src: __webpack_require__(/*! ../../assets/Icons/fill.svg */ "./resources/js/assets/Icons/fill.svg"), alt: "" }
      }),
      _c("br"),
      _vm._v(" Background")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { staticClass: "text-dark" }, [
        _c("img", {
          attrs: { src: __webpack_require__(/*! ../../assets/Icons/open-folder.svg */ "./resources/js/assets/Icons/open-folder.svg"), alt: "" }
        }),
        _c("br"),
        _vm._v(" Folder")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "p",
        {
          staticClass: "text-primary",
          staticStyle: { "padding-bottom": "10px" }
        },
        [_vm._v("Walpaper Template")]
      ),
      _vm._v(" "),
      _c("div", [
        _c(
          "div",
          {
            staticStyle: {
              width: "80%",
              background: "#4e73df",
              color: "white",
              padding: "30px 20px",
              "border-radius": "10px",
              "font-size": "1.9em",
              "font-weight": "bold"
            }
          },
          [_c("p", { staticClass: "text-center" }, [_vm._v("UI/UX")])]
        ),
        _vm._v(" "),
        _c("p", [_vm._v("Template 1")])
      ]),
      _vm._v(" "),
      _c("div", [
        _c(
          "div",
          {
            staticStyle: {
              width: "80%",
              background: "#4e73df",
              color: "white",
              padding: "30px 20px",
              "border-radius": "10px",
              "font-size": "1.9em",
              "font-weight": "bold"
            }
          },
          [_c("p", { staticClass: "text-center" }, [_vm._v("UI/UX")])]
        ),
        _vm._v(" "),
        _c("p", [_vm._v("Template 2")])
      ]),
      _vm._v(" "),
      _c("div", [
        _c(
          "div",
          {
            staticStyle: {
              width: "80%",
              background: "#4e73df",
              color: "white",
              padding: "30px 20px",
              "border-radius": "10px",
              "font-size": "1.9em",
              "font-weight": "bold"
            }
          },
          [_c("p", { staticClass: "text-center" }, [_vm._v("UI/UX")])]
        ),
        _vm._v(" "),
        _c("p", [_vm._v("Template 3")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", [
        _c("p", { staticClass: "text-primary" }, [
          _vm._v("Upload an image here")
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-primary btn-rounded" }, [
          _c("img", {
            staticStyle: { width: "1.4em" },
            attrs: {
              src: __webpack_require__(/*! ../../assets/Icons/upload-slim.svg */ "./resources/js/assets/Icons/upload-slim.svg"),
              alt: ""
            }
          }),
          _vm._v("   SELECT FILE")
        ]),
        _vm._v(" "),
        _c("br"),
        _c("br"),
        _vm._v(" "),
        _c("p", [_vm._v("You can also drag and drop 1 or more pictures")])
      ]),
      _vm._v(" "),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "p",
        {
          staticClass: "text-primary",
          staticStyle: { "padding-bottom": "10px" }
        },
        [_vm._v("Recent Uploads")]
      ),
      _vm._v(" "),
      _c("div", [
        _c(
          "div",
          {
            staticStyle: {
              width: "80%",
              color: "white",
              padding: "10px",
              "border-radius": "10px",
              "font-size": "1.9em",
              "font-weight": "bold"
            }
          },
          [
            _c("img", {
              attrs: {
                src: __webpack_require__(/*! ../../assets/img/recent.jpg */ "./resources/js/assets/img/recent.jpg"),
                alt: "",
                height: "150px",
                width: "200px"
              }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", [
        _c(
          "div",
          {
            staticStyle: {
              width: "80%",
              color: "white",
              padding: "10px",
              "border-radius": "10px",
              "font-size": "1.9em",
              "font-weight": "bold"
            }
          },
          [
            _c("img", {
              attrs: {
                src: __webpack_require__(/*! ../../assets/img/recent.jpg */ "./resources/js/assets/img/recent.jpg"),
                alt: "",
                height: "150px",
                width: "200px"
              }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", [
        _c(
          "div",
          {
            staticStyle: {
              width: "80%",
              padding: "10px",
              color: "white",
              "border-radius": "10px",
              "font-size": "1.9em",
              "font-weight": "bold"
            }
          },
          [
            _c("img", {
              attrs: {
                src: __webpack_require__(/*! ../../assets/img/recent.jpg */ "./resources/js/assets/img/recent.jpg"),
                alt: "",
                height: "150px",
                width: "200px"
              }
            })
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticStyle: {
          width: "80%",
          padding: "30px 20px",
          "border-radius": "10px",
          "font-size": "1.9em",
          "font-weight": "bold"
        }
      },
      [
        _c("p", { staticClass: "text-center" }, [
          _c("span", { staticStyle: { color: "#4e73df" } }, [_vm._v("Wait")]),
          _vm._v(" "),
          _c("br"),
          _vm._v("\n                            Don't jump dude!")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "div",
        {
          staticStyle: {
            width: "80%",
            padding: "25px 15px",
            "border-radius": "10px",
            "font-size": "1.9em",
            "font-weight": "bold"
          }
        },
        [
          _c("p", { staticClass: "text-center" }, [
            _c("span", { staticStyle: { color: "#1cc88a" } }, [
              _vm._v("Though")
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v("\n                            You can't do it")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "text-center" }, [_vm._v(":)")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "div",
        {
          staticStyle: {
            width: "80%",
            padding: "25px 15px",
            "border-radius": "10px",
            "font-size": "1.9em",
            "font-weight": "bold"
          }
        },
        [
          _c(
            "p",
            { staticClass: "text-center", staticStyle: { color: "#e83e8c" } },
            [_vm._v("Be The One")]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "div",
        {
          staticStyle: {
            width: "80%",
            padding: "25px 15px",
            "border-radius": "10px",
            "font-size": "1.9em",
            "font-weight": "bold"
          }
        },
        [
          _c(
            "p",
            {
              staticClass: "text-center",
              staticStyle: { color: "#fd7e14", "font-weight": "bolder" }
            },
            [
              _c("span", { staticStyle: { color: "#a47af4" } }, [
                _vm._v("Oh...")
              ]),
              _vm._v("\n                            They say I can fly :)")
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "div",
        {
          staticStyle: {
            width: "80%",
            padding: "25px 15px",
            "border-radius": "10px",
            "font-size": "1.9em"
          }
        },
        [
          _c("p", { staticClass: "text-center" }, [
            _c(
              "span",
              {
                staticStyle: {
                  color: "rgb(148, 146, 146)",
                  "font-weight": "bolder"
                }
              },
              [_vm._v("We will miss your")]
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v("\n                            PlayStation dude :(")
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "color-list" }, [
      _c("div", { staticClass: "container-fluid edit" }, [
        _c("div", { staticClass: "list" }, [
          _c("ul", [
            _c("li", { staticClass: "li-active" }, [
              _c("a", { attrs: { href: "builder-color.html" } }, [
                _c("div", { staticClass: "circle" })
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "builder-filter.html" } }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../../assets/Icons/filter.svg */ "./resources/js/assets/Icons/filter.svg"),
                    alt: ""
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "builder-adjustment.html" } }, [
                _c("img", {
                  staticClass: "rotate",
                  attrs: {
                    src: __webpack_require__(/*! ../../assets/Icons/volume-levels.svg */ "./resources/js/assets/Icons/volume-levels.svg"),
                    alt: ""
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "crop.html" } }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../../assets/Icons/crop.svg */ "./resources/js/assets/Icons/crop.svg"),
                    alt: ""
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "rotation.html" } }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../../assets/Icons/rotating-arrow-to-the-left.svg */ "./resources/js/assets/Icons/rotating-arrow-to-the-left.svg"),
                    alt: ""
                  }
                })
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", {}, [
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("canvas", { attrs: { id: "canvas" } })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "list" }, [
          _c("ul", [
            _c(
              "li",
              {
                attrs: {
                  id: "tooltip",
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title: "Add New"
                }
              },
              [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(/*! ../../assets/Icons/delete-photo.svg */ "./resources/js/assets/Icons/delete-photo.svg"),
                    alt: ""
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("li", [
              _c("img", {
                attrs: {
                  src: __webpack_require__(/*! ../../assets/Icons/delete-photo.svg */ "./resources/js/assets/Icons/delete-photo.svg"),
                  alt: ""
                }
              })
            ]),
            _vm._v(" "),
            _c("li", [
              _c("img", {
                attrs: {
                  src: __webpack_require__(/*! ../../assets/Icons/copy-content.svg */ "./resources/js/assets/Icons/copy-content.svg"),
                  alt: ""
                }
              })
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "desc" }, [
      _c("p", [
        _c("span", { staticClass: "span" }, [_vm._v("Page 1")]),
        _vm._v(" - UI-UX")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/Icons/arrow-point-to-right.svg":
/*!************************************************************!*\
  !*** ./resources/js/assets/Icons/arrow-point-to-right.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/arrow-point-to-right.svg?a0e061b54507c1ea6361ee20ac930f2c";

/***/ }),

/***/ "./resources/js/assets/Icons/coffee-cup-on-a-plate-black-silhouettes.svg":
/*!*******************************************************************************!*\
  !*** ./resources/js/assets/Icons/coffee-cup-on-a-plate-black-silhouettes.svg ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/coffee-cup-on-a-plate-black-silhouettes.svg?9ba87bd552928d4e732f90f8c726e8ef";

/***/ }),

/***/ "./resources/js/assets/Icons/copy-content.svg":
/*!****************************************************!*\
  !*** ./resources/js/assets/Icons/copy-content.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/copy-content.svg?d6268138ae8b2001c908c901564febd5";

/***/ }),

/***/ "./resources/js/assets/Icons/crop.svg":
/*!********************************************!*\
  !*** ./resources/js/assets/Icons/crop.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/crop.svg?47cf3af46fb37d5bda86438e267d5f59";

/***/ }),

/***/ "./resources/js/assets/Icons/curve-arrow.svg":
/*!***************************************************!*\
  !*** ./resources/js/assets/Icons/curve-arrow.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/curve-arrow.svg?d7b15e6b9f5b6ee1ee8fcee583b7026d";

/***/ }),

/***/ "./resources/js/assets/Icons/delete-photo.svg":
/*!****************************************************!*\
  !*** ./resources/js/assets/Icons/delete-photo.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/delete-photo.svg?2239c602373732f2fa951f5790fabf07";

/***/ }),

/***/ "./resources/js/assets/Icons/download (1).svg":
/*!****************************************************!*\
  !*** ./resources/js/assets/Icons/download (1).svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/download (1).svg?ca040d283d2eb6010767f1ffaf1af9e8";

/***/ }),

/***/ "./resources/js/assets/Icons/eye.svg":
/*!*******************************************!*\
  !*** ./resources/js/assets/Icons/eye.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/eye.svg?043f9099f1d654de80f0f3413546e2ef";

/***/ }),

/***/ "./resources/js/assets/Icons/fill.svg":
/*!********************************************!*\
  !*** ./resources/js/assets/Icons/fill.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/fill.svg?46ffa4e3e9588c3552f067f6a91b6816";

/***/ }),

/***/ "./resources/js/assets/Icons/filter.svg":
/*!**********************************************!*\
  !*** ./resources/js/assets/Icons/filter.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/filter.svg?d70c9c619418ec9b36175a8c25fa2dc4";

/***/ }),

/***/ "./resources/js/assets/Icons/font.svg":
/*!********************************************!*\
  !*** ./resources/js/assets/Icons/font.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/font.svg?8d3a7b02f46a8aa674fd3166aae1238d";

/***/ }),

/***/ "./resources/js/assets/Icons/rotating-arrow-to-the-left.svg":
/*!******************************************************************!*\
  !*** ./resources/js/assets/Icons/rotating-arrow-to-the-left.svg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/rotating-arrow-to-the-left.svg?b1f1b46c3e73113090db95beaaca761e";

/***/ }),

/***/ "./resources/js/assets/Icons/save-file-option.svg":
/*!********************************************************!*\
  !*** ./resources/js/assets/Icons/save-file-option.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/save-file-option.svg?088fd1698f74798d99daf5d6713473a9";

/***/ }),

/***/ "./resources/js/assets/Icons/share-symbol.svg":
/*!****************************************************!*\
  !*** ./resources/js/assets/Icons/share-symbol.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/share-symbol.svg?0585347c5fe38415492ca2b1ef4d188a";

/***/ }),

/***/ "./resources/js/assets/Icons/upload-slim.svg":
/*!***************************************************!*\
  !*** ./resources/js/assets/Icons/upload-slim.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/upload-slim.svg?5b50e6b57f6b7bc1a19f48541f2d91f3";

/***/ }),

/***/ "./resources/js/assets/Icons/upload.svg":
/*!**********************************************!*\
  !*** ./resources/js/assets/Icons/upload.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/upload.svg?45081c5ad799fa127aaca7cca2c5a088";

/***/ }),

/***/ "./resources/js/assets/Icons/volume-levels.svg":
/*!*****************************************************!*\
  !*** ./resources/js/assets/Icons/volume-levels.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/volume-levels.svg?1becbedc50ff48e0ae22a4c58760b8a7";

/***/ }),

/***/ "./resources/js/assets/img/recent.jpg":
/*!********************************************!*\
  !*** ./resources/js/assets/img/recent.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/recent.jpg?10372107d46b37698fd865d1f701e5a0";

/***/ }),

/***/ "./resources/js/modules/designs/Design.vue":
/*!*************************************************!*\
  !*** ./resources/js/modules/designs/Design.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Design_vue_vue_type_template_id_efbbb384_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Design.vue?vue&type=template&id=efbbb384&scoped=true& */ "./resources/js/modules/designs/Design.vue?vue&type=template&id=efbbb384&scoped=true&");
/* harmony import */ var _Design_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Design.vue?vue&type=script&lang=js& */ "./resources/js/modules/designs/Design.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Design_vue_vue_type_style_index_0_id_efbbb384_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Design.vue?vue&type=style&index=0&id=efbbb384&scoped=true&lang=css& */ "./resources/js/modules/designs/Design.vue?vue&type=style&index=0&id=efbbb384&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Design_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Design_vue_vue_type_template_id_efbbb384_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Design_vue_vue_type_template_id_efbbb384_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "efbbb384",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/designs/Design.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/designs/Design.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/modules/designs/Design.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Design_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Design.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/designs/Design.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Design_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/designs/Design.vue?vue&type=style&index=0&id=efbbb384&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/modules/designs/Design.vue?vue&type=style&index=0&id=efbbb384&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Design_vue_vue_type_style_index_0_id_efbbb384_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Design.vue?vue&type=style&index=0&id=efbbb384&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/designs/Design.vue?vue&type=style&index=0&id=efbbb384&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Design_vue_vue_type_style_index_0_id_efbbb384_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Design_vue_vue_type_style_index_0_id_efbbb384_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Design_vue_vue_type_style_index_0_id_efbbb384_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Design_vue_vue_type_style_index_0_id_efbbb384_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Design_vue_vue_type_style_index_0_id_efbbb384_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/designs/Design.vue?vue&type=template&id=efbbb384&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/modules/designs/Design.vue?vue&type=template&id=efbbb384&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Design_vue_vue_type_template_id_efbbb384_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Design.vue?vue&type=template&id=efbbb384&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/designs/Design.vue?vue&type=template&id=efbbb384&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Design_vue_vue_type_template_id_efbbb384_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Design_vue_vue_type_template_id_efbbb384_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!***********************!*\
  !*** jsdom (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************************************!*\
  !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** jsdom/lib/jsdom/utils (ignored) ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);