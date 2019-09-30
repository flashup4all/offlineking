(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/user/Signup.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/user/Signup.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      signup_form: {
        username: null,
        email: null,
        password: null,
        password_confirmation: null,
        subscribe: null
      },
      referer: null,
      submitted: false,
      show_alert: {
        msg: '',
        type: '',
        status: false
      }
    };
  },
  mounted: function mounted() {
    console.log('The id is: ' + this.$route.params.user_crypt_id);

    if (this.$route.params.user_crypt_id) {
      this.referer = this.$route.params.user_crypt_id;
    }
  },
  methods: {
    /**
     * @method signup
     * validate the signup form
     * create a new user resource
     * @author @flashup4all
     * @param request
     * @returns response
     */
    signup: function signup() {
      var _this = this;

      this.submitted = true;
      this.$validator.validate().then(function (valid) {
        if (valid) {
          if (_this.referer) {
            _this.signup_form.referer = _this.referer;
          }

          axios.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["url"], "/signup"), _this.signup_form).then(function (res) {
            // this.results = response.data;
            var response = res.data;
            _this.submitted = false;

            if (res.status == 200) {
              if (response.status == 'ok') {
                _this.show_alert = {
                  msg: response.msg,
                  type: 'alert-success',
                  status: true
                };
                _this.signup_form = [];
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/user/Signup.vue?vue&type=template&id=6458fe66&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/user/Signup.vue?vue&type=template&id=6458fe66& ***!
  \***********************************************************************************************************************************************************************************************************/
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
                  return _vm.signup()
                }
              }
            },
            [
              _c("p", { staticClass: "offline-king-header" }, [
                _vm._v("Register")
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
                _vm._v(" Email")
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "settings-form my-3",
                  class: { "is-invalid": _vm.errors.has("email") }
                },
                [
                  _c("div", { staticClass: "setting-input" }, [
                    _c("i", { staticClass: "fas fa-envelope setting-icon" }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.signup_form.email,
                          expression: "signup_form.email"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|email",
                          expression: "'required|email'"
                        }
                      ],
                      attrs: {
                        type: "text",
                        placeholder: " Arowosegbe67@gmail.com",
                        name: "email"
                      },
                      domProps: { value: _vm.signup_form.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.signup_form,
                            "email",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]
              ),
              _vm._v(" "),
              _vm.errors.has("email")
                ? _c("p", { staticClass: "offline-sumo-alert-danger" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.errors.first("email")) +
                        "\n                    "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("label", { staticClass: "setting-form-label" }, [
                _vm._v(" User Name")
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "settings-form my-3",
                  class: { "is-invalid": _vm.errors.has("username") }
                },
                [
                  _c("div", { staticClass: "setting-input" }, [
                    _c("i", { staticClass: "fas fa-envelope setting-icon" }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.signup_form.username,
                          expression: "signup_form.username"
                        },
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      attrs: {
                        name: "username",
                        type: "text",
                        placeholder: " Arowosegbe67@gmail.com "
                      },
                      domProps: { value: _vm.signup_form.username },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.signup_form,
                            "username",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]
              ),
              _vm._v(" "),
              _vm.errors.has("username")
                ? _c("p", { staticClass: "offline-sumo-alert-danger" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.errors.first("username")) +
                        "\n                    "
                    )
                  ])
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
                          value: _vm.signup_form.password,
                          expression: "signup_form.password"
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
                      domProps: { value: _vm.signup_form.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.signup_form,
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
                          value: _vm.signup_form.c_password,
                          expression: "signup_form.c_password"
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
                      domProps: { value: _vm.signup_form.c_password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.signup_form,
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
              _c("div", { staticClass: "form-group my-2 px-2 py-2" }, [
                _c("div", { staticClass: "row no-pad" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "form-check" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.signup_form.subscribe,
                            expression: "signup_form.subscribe"
                          }
                        ],
                        staticClass: "form-check-input",
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(_vm.signup_form.subscribe)
                            ? _vm._i(_vm.signup_form.subscribe, null) > -1
                            : _vm.signup_form.subscribe
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.signup_form.subscribe,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.signup_form,
                                    "subscribe",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.signup_form,
                                    "subscribe",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.signup_form, "subscribe", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "form-check-label",
                          attrs: { for: "gridCheck" }
                        },
                        [
                          _vm._v(
                            "\n                                        Notify of new & latest updates\n                                    "
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ]),
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
                    _vm._v("\n                            Register")
                  ]
                )
              ])
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-footer" }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c(
                "p",
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "py-2 my-3",
                      attrs: { to: { name: "signup" } }
                    },
                    [_vm._v("Already have an account?")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("router-link", { attrs: { to: { name: "auth" } } }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-purple-gradient btn-rounded pad-2 text-uppercase",
                    attrs: { "aria-expanded": "false" }
                  },
                  [_vm._v("Login")]
                )
              ])
            ],
            1
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/user/Signup.vue":
/*!**********************************************!*\
  !*** ./resources/js/modules/user/Signup.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Signup_vue_vue_type_template_id_6458fe66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signup.vue?vue&type=template&id=6458fe66& */ "./resources/js/modules/user/Signup.vue?vue&type=template&id=6458fe66&");
/* harmony import */ var _Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signup.vue?vue&type=script&lang=js& */ "./resources/js/modules/user/Signup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Signup_vue_vue_type_template_id_6458fe66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Signup_vue_vue_type_template_id_6458fe66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/user/Signup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/user/Signup.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/modules/user/Signup.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Signup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/user/Signup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/user/Signup.vue?vue&type=template&id=6458fe66&":
/*!*****************************************************************************!*\
  !*** ./resources/js/modules/user/Signup.vue?vue&type=template&id=6458fe66& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_6458fe66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Signup.vue?vue&type=template&id=6458fe66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/user/Signup.vue?vue&type=template&id=6458fe66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_6458fe66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_6458fe66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);