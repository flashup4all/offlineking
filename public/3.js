(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/user/ResetPassword.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/user/ResetPassword.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./resources/js/environments/environment.js");
/* harmony import */ var _shared_Alerts_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/Alerts.vue */ "./resources/js/shared/Alerts.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



Vue.use(vee_validate__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Alerts: _shared_Alerts_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      reset_password_form: {
        password: null,
        password_confirmation: null,
        subscribe: null
      },
      ofikd: null,
      submitted: false,
      show_alert: {
        msg: '',
        type: '',
        status: false
      }
    };
  },
  mounted: function mounted() {
    if (this.$route.params.user_crypt_id) {
      this.ofikd = this.$route.params.user_crypt_id;
    }
  },
  methods: {
    /**
     * @method reset_password
     * validate the reset_password form
     * create a new user resource
     * @author @flashup4all
     * @param request
     * @returns response
     */
    reset_password: function reset_password() {
      var _this = this;

      this.submitted = true;
      this.$validator.validate().then(function (valid) {
        if (valid) {
          if (_this.ofikd) {
            _this.reset_password_form.ofikd = _this.ofikd;
          } else {
            return _this.show_alert = {
              msg: 'reset link expired or has been used already',
              type: 'alert-danger',
              status: true
            };
          }

          axios.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["url"], "/reset-password"), _this.reset_password_form).then(function (res) {
            // this.results = response.data;
            var response = res.data;
            _this.submitted = false;

            if (res.status == 200) {
              if (response.status == 'ok') {
                _this.show_alert = {
                  msg: response.msg,
                  type: 'alert-success',
                  status: true
                }; //this.reset_password_form = [];
                //setTimeout(function() {

                _this.$router.push('auth'); //}, 5000);

              } else {
                _this.show_alert = {
                  msg: response.msg,
                  type: 'alert-danger',
                  status: true
                }; //this.show_alert = true;
              }
            }

            if (res.status == 401) {}
          });
        }

        _this.submitted = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/user/ResetPassword.vue?vue&type=template&id=eaa6c9a8&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/user/ResetPassword.vue?vue&type=template&id=eaa6c9a8& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", {}, [
    _c(
      "div",
      {
        staticClass: "card  w-50 mx-5 my-5 px-2",
        staticStyle: { "margin-left": "200px !important" }
      },
      [
        _c("div", { staticClass: "card-body" }, [
          _c(
            "form",
            {
              attrs: { method: "post" },
              on: {
                submit: function($event) {
                  $event.stopPropagation()
                  $event.preventDefault()
                  return _vm.reset_password()
                }
              }
            },
            [
              _c("p", { staticClass: "offline-king-header" }, [
                _vm._v("Reset Password")
              ]),
              _vm._v(" "),
              _vm.show_alert.status
                ? _c("alerts", {
                    attrs: {
                      message: _vm.show_alert.msg,
                      type: _vm.show_alert.type
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("label", { staticClass: "setting-form-label" }, [
                _vm._v(" Password")
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "settings-form my-3",
                  class: { "is-invalid": _vm.errors.has("password") }
                },
                [
                  _c("div", { staticClass: "setting-input" }, [
                    _c("i", { staticClass: "fas fa-unlock setting-icon" }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.reset_password_form.password,
                          expression: "reset_password_form.password"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      ref: "password",
                      attrs: {
                        name: "password",
                        type: "password",
                        placeholder: " **************** "
                      },
                      domProps: { value: _vm.reset_password_form.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.reset_password_form,
                            "password",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]
              ),
              _vm._v(" "),
              _vm.errors.has("password")
                ? _c("p", { staticClass: "offline-sumo-alert-danger" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.errors.first("password")) +
                        "\n                    "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("label", { staticClass: "setting-form-label" }, [
                _vm._v("Repeat Password")
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "settings-form my-3",
                  class: { "is-invalid": _vm.errors.has("c_password") }
                },
                [
                  _c("div", { staticClass: "setting-input" }, [
                    _c("i", { staticClass: "fas fa-unlock setting-icon" }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.reset_password_form.c_password,
                          expression: "reset_password_form.c_password"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|confirmed:password",
                          expression: "'required|confirmed:password'"
                        }
                      ],
                      attrs: {
                        name: "c_password",
                        type: "password",
                        placeholder: " **************** "
                      },
                      domProps: { value: _vm.reset_password_form.c_password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.reset_password_form,
                            "c_password",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]
              ),
              _vm._v(" "),
              _vm.errors.has("c_password")
                ? _c("p", { staticClass: "offline-sumo-alert-danger" }, [
                    _vm._v(
                      "\n                        Repeat password do not match password\n                    "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-purple-gradient btn-rounded pad-2 text-uppercase",
                    attrs: { "aria-expanded": "false" }
                  },
                  [
                    _vm.submitted
                      ? _c("i", { staticClass: "fa fa-spinner" })
                      : _vm._e(),
                    _vm._v("\n                            Save")
                  ]
                )
              ])
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-footer" }, [
          _c("div", { staticClass: "form-group" }, [
            _c(
              "p",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "py-2 my-3",
                    staticStyle: { color: "#4e73df" },
                    attrs: { to: { name: "auth" } }
                  },
                  [_vm._v("login")]
                )
              ],
              1
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/user/ResetPassword.vue":
/*!*****************************************************!*\
  !*** ./resources/js/modules/user/ResetPassword.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetPassword_vue_vue_type_template_id_eaa6c9a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=template&id=eaa6c9a8& */ "./resources/js/modules/user/ResetPassword.vue?vue&type=template&id=eaa6c9a8&");
/* harmony import */ var _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=script&lang=js& */ "./resources/js/modules/user/ResetPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetPassword_vue_vue_type_template_id_eaa6c9a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResetPassword_vue_vue_type_template_id_eaa6c9a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/user/ResetPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/user/ResetPassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/modules/user/ResetPassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/user/ResetPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/user/ResetPassword.vue?vue&type=template&id=eaa6c9a8&":
/*!************************************************************************************!*\
  !*** ./resources/js/modules/user/ResetPassword.vue?vue&type=template&id=eaa6c9a8& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_eaa6c9a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetPassword.vue?vue&type=template&id=eaa6c9a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/user/ResetPassword.vue?vue&type=template&id=eaa6c9a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_eaa6c9a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_eaa6c9a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);