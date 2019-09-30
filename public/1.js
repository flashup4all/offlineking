(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/user/Settings.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/user/Settings.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./resources/js/environments/environment.js");
/* harmony import */ var _shared_Alerts_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/Alerts.vue */ "./resources/js/shared/Alerts.vue");
/* harmony import */ var _shared_storage_local_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/storage/local.js */ "./resources/js/shared/storage/local.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      user: _shared_storage_local_js__WEBPACK_IMPORTED_MODULE_3__["default"].get_user(),
      change_password_form: {
        old_password: null,
        password: null,
        c_password: null
      },
      update_profile_form: {
        profession: null,
        username: null
      },
      billing_form: {
        language: null,
        username: null
      },
      referer_form: {
        email: null,
        error: false
      },
      referer_submitted: false,
      profile_submitted: false,
      submitted: false,
      url: null,
      show_alert: {
        msg: '',
        type: '',
        status: false
      }
    };
  },
  mounted: function mounted() {
    if (this.user.avatar != '') {
      this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["img_url"] + 'avatars/' + this.user.avatar;
    }

    this.update_profile_form = this.user;
  },
  methods: {
    /**
     * @method update_password
     * update user password
     * @author @flashup4all
     * @param request
     * @returns response
     */
    update_password: function update_password() {
      var _this = this;

      this.submitted = true;
      this.$validator.validate().then(function (valid) {
        if (valid) {
          _this.change_password_form.id = _this.user.id;
          axios.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["url"], "/update-password"), _this.change_password_form).then(function (res) {
            var response = res.data;
            console.log(res);
            _this.submitted = false;

            if (res.status == 200) {
              if (response.status == 'ok') {
                _this.show_alert = {
                  msg: response.msg,
                  type: 'alert-success',
                  status: true
                };
              } else {
                _this.show_alert = {
                  msg: response.msg,
                  type: 'alert-danger',
                  status: true
                }; //this.show_alert = true;
              }
            }

            if (res.status == 422) {
              console.log(res);
            }
          }, function (error) {
            _this.submitted = false;
          });
        }
      });
    },

    /**
     * @method update_password
     * update user password
     * @author @flashup4all
     * @param request
     * @returns response
     */
    update_profile: function update_profile() {
      var _this2 = this;

      this.profile_submitted = true;
      this.$validator.validateAll('profile').then(function (valid) {
        if (valid) {
          _this2.update_profile_form.id = _this2.user.id;
          axios.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["url"], "/user/update"), _this2.update_profile_form).then(function (res) {
            var response = res.data;
            _this2.profile_submitted = false;

            if (res.status == 200) {
              if (response.status == 'ok') {
                _this2.show_alert = {
                  msg: response.msg,
                  type: 'alert-success',
                  status: true
                };
                _shared_storage_local_js__WEBPACK_IMPORTED_MODULE_3__["default"].store_user(response.data);
              } else {
                _this2.show_alert = {
                  msg: response.msg,
                  type: 'alert-danger',
                  status: true
                }; //this.show_alert = true;
              }
            }

            if (res.status == 422) {
              console.log(res);
            }
          }, function (error) {
            _this2.profile_submitted = false;
          });
        }
      });
    },
    onFileChange: function onFileChange(e) {
      var _this3 = this;

      var file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      var data = new FormData(); // data.append('name', 'my-picture');

      data.append('avatar', event.target.files[0]);
      data.append('user_id', this.user.id);
      var config = {
        header: {
          'Content-Type': 'image/png'
        }
      };
      axios.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["url"], "/user/image/update"), data, config).then(function (res) {
        var response = res.data;
        console.log(response);
        _this3.profile_submitted = false;

        if (res.status == 200) {
          if (response.status == 'ok') {
            _this3.show_alert = {
              msg: response.msg,
              type: 'alert-success',
              status: true
            };
            _shared_storage_local_js__WEBPACK_IMPORTED_MODULE_3__["default"].store_user(response.data);
          } else {
            _this3.show_alert = {
              msg: response.msg,
              type: 'alert-danger',
              status: true
            }; //this.show_alert = true;
          }
        }

        if (res.status == 422) {
          console.log(res);
        }
      }, function (error) {
        _this3.profile_submitted = false;
      });
    },

    /**
    * @method refer_friend
    * send referer link to email
    * @author @flashup4all
    * @param request
    * @returns response
    */
    refer_friend: function refer_friend() {
      var _this4 = this;

      this.referer_submitted = true;

      if (!this.referer_form.email) {
        this.referer_form.error = true;
        this.referer_submitted = false;
        return;
      }

      this.referer_form.error = false;
      this.referer_form.user_id = this.user.id;
      axios.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["url"], "/user/refer-a-friend"), this.referer_form).then(function (res) {
        var response = res.data;
        _this4.referer_submitted = false;

        if (res.status == 200) {
          if (response.status == 'ok') {
            _this4.show_alert = {
              msg: response.msg,
              type: 'alert-success',
              status: true
            };
            _this4.referer_form.email = '';
          } else {
            _this4.show_alert = {
              msg: response.msg,
              type: 'alert-danger',
              status: true
            }; //this.show_alert = true;
          }
        }

        if (res.status == 422) {
          console.log(res);
        }
      }, function (error) {
        _this4.referer_submitted = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/user/Settings.vue?vue&type=template&id=5874f671&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/user/Settings.vue?vue&type=template&id=5874f671& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "container" },
      [
        _vm.show_alert.status
          ? _c("alerts", {
              attrs: { message: _vm.show_alert.msg, type: _vm.show_alert.type }
            })
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "row " }, [
          _c("div", { staticClass: "col-md-4 my-1" }, [
            _c(
              "form",
              {
                attrs: { method: "post", "data-vv-scope": "profile" },
                on: {
                  submit: function($event) {
                    $event.stopPropagation()
                    $event.preventDefault()
                    return _vm.update_profile()
                  }
                }
              },
              [
                _c("div", { staticClass: "card flex-1 settings-card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body align-items-center px-5" },
                    [
                      _c(
                        "p",
                        { staticClass: "offline-king-header text-center" },
                        [_vm._v("Change Personal Info")]
                      ),
                      _vm._v(" "),
                      _c("label", { staticClass: "setting-form-label" }, [
                        _vm._v("Email")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "settings-form" }, [
                        _c("div", { staticClass: "setting-input" }, [
                          _c("i", {
                            staticClass: "fas fa-unlock setting-icon"
                          }),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.update_profile_form.email,
                                expression: "update_profile_form.email"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            ref: "email",
                            attrs: {
                              disabled: "",
                              name: "email",
                              type: "email",
                              placeholder: " **************** "
                            },
                            domProps: { value: _vm.update_profile_form.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.update_profile_form,
                                  "email",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("label", { staticClass: "setting-form-label" }, [
                        _vm._v("Username")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "settings-form",
                          class: {
                            "is-invalid": _vm.errors.has("profile.username")
                          }
                        },
                        [
                          _c("div", { staticClass: "setting-input" }, [
                            _c("i", {
                              staticClass: "fas fa-unlock setting-icon"
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.update_profile_form.username,
                                  expression: "update_profile_form.username"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              attrs: {
                                name: "profile.username",
                                type: "text",
                                placeholder: " **************** "
                              },
                              domProps: {
                                value: _vm.update_profile_form.username
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.update_profile_form,
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
                      _vm.errors.has("profile.username")
                        ? _c(
                            "p",
                            { staticClass: "offline-sumo-alert-danger" },
                            [
                              _vm._v(
                                "\n                        username is required\n                    "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("label", { staticClass: "setting-form-label" }, [
                        _vm._v("Profession")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "settings-form",
                          class: {
                            "is-invalid": _vm.errors.has("profile.profession")
                          }
                        },
                        [
                          _c("div", { staticClass: "setting-input" }, [
                            _c("i", {
                              staticClass: "fas fa-unlock setting-icon"
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.update_profile_form.profession,
                                  expression: "update_profile_form.profession"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              ref: "profession",
                              attrs: {
                                name: "profile.profession",
                                type: "text",
                                placeholder: " Designer "
                              },
                              domProps: {
                                value: _vm.update_profile_form.profession
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.update_profile_form,
                                    "profession",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _vm.errors.has("profile.profession")
                        ? _c(
                            "p",
                            { staticClass: "offline-sumo-alert-danger" },
                            [
                              _vm._v(
                                "\n                        profession is required\n                    "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "setting-image" }, [
                        _c("label", { attrs: { for: "image" } }, [
                          _c("input", {
                            staticStyle: { display: "none" },
                            attrs: { type: "file", name: "image", id: "image" },
                            on: { change: _vm.onFileChange }
                          }),
                          _vm._v(" "),
                          !_vm.url
                            ? _c("img", {
                                staticClass: "img-fluid img-circle",
                                attrs: {
                                  src: __webpack_require__(/*! ../../assets/img/user.jpg */ "./resources/js/assets/img/user.jpg"),
                                  alt: ""
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.url
                            ? _c("img", { attrs: { src: _vm.url } })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("p", { staticClass: "mx-3 my-3 float-right" }, [
                            _vm._v("Change Photo")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group my-2" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-purple-gradient btn-rounded text-uppercase my-3",
                            attrs: { disabled: _vm.profile_submitted }
                          },
                          [
                            _vm.profile_submitted
                              ? _c("i", { staticClass: "fa fa-spinner" })
                              : _vm._e(),
                            _vm._v(
                              "\n                      Save Changes\n                      "
                            )
                          ]
                        )
                      ])
                    ]
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4 my-1" }, [
            _c("div", { staticClass: "card flex-1 settings-card" }, [
              _c(
                "form",
                {
                  attrs: { method: "post" },
                  on: {
                    submit: function($event) {
                      $event.stopPropagation()
                      $event.preventDefault()
                      return _vm.update_password()
                    }
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "card-body align-items-center px-5" },
                    [
                      _c(
                        "p",
                        { staticClass: "offline-king-header text-center" },
                        [_vm._v("Change Password")]
                      ),
                      _vm._v(" "),
                      _c("label", { staticClass: "setting-form-label" }, [
                        _vm._v("Current Password")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "settings-form",
                          class: {
                            "is-invalid": _vm.errors.has("old_password")
                          }
                        },
                        [
                          _c("div", { staticClass: "setting-input" }, [
                            _c("i", {
                              staticClass: "fas fa-unlock setting-icon"
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.change_password_form.old_password,
                                  expression:
                                    "change_password_form.old_password"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              ref: "old_password",
                              attrs: {
                                name: "old_password",
                                type: "password",
                                placeholder: " **************** "
                              },
                              domProps: {
                                value: _vm.change_password_form.old_password
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.change_password_form,
                                    "old_password",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _vm.errors.has("current_password")
                        ? _c(
                            "p",
                            { staticClass: "offline-sumo-alert-danger" },
                            [
                              _vm._v(
                                "\n                        current password is required\n                    "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("label", { staticClass: "setting-form-label" }, [
                        _vm._v("New Password")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "settings-form",
                          class: { "is-invalid": _vm.errors.has("password") }
                        },
                        [
                          _c("div", { staticClass: "setting-input" }, [
                            _c("i", {
                              staticClass: "fas fa-unlock setting-icon"
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.change_password_form.password,
                                  expression: "change_password_form.password"
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
                              domProps: {
                                value: _vm.change_password_form.password
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.change_password_form,
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
                        ? _c(
                            "p",
                            { staticClass: "offline-sumo-alert-danger" },
                            [
                              _vm._v(
                                "\n                    new password is required\n                  "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("label", { staticClass: "setting-form-label" }, [
                        _vm._v("Repeat New Password")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "settings-form",
                          class: { "is-invalid": _vm.errors.has("c_password") }
                        },
                        [
                          _c("div", { staticClass: "setting-input" }, [
                            _c("i", {
                              staticClass: "fas fa-unlock setting-icon"
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.change_password_form.c_password,
                                  expression: "change_password_form.c_password"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required|confirmed:password",
                                  expression: "'required|confirmed:password'"
                                }
                              ],
                              ref: "c_password",
                              attrs: {
                                name: "c_password",
                                type: "password",
                                placeholder: " **************** "
                              },
                              domProps: {
                                value: _vm.change_password_form.c_password
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.change_password_form,
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
                        ? _c(
                            "p",
                            { staticClass: "offline-sumo-alert-danger" },
                            [
                              _vm._v(
                                "\n                        Repeat password do not match password\n                  "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group my-2" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-purple-gradient btn-rounded text-uppercase my-3",
                            attrs: { disabled: _vm.submitted }
                          },
                          [
                            _vm.submitted
                              ? _c("i", { staticClass: "fa fa-spinner" })
                              : _vm._e(),
                            _vm._v(
                              "\n                      Update Password\n                    "
                            )
                          ]
                        )
                      ])
                    ]
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(1)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row align-items-center my-4" }, [
          _c("div", { staticClass: "col-md-12 " }, [
            _c(
              "div",
              {
                staticClass: "card d-flex flex-row invite-settings px-5 py-3 "
              },
              [
                _c("p", { staticClass: "offline-king-header" }, [
                  _vm._v(
                    "Invite Your Friend & Get 1 Month of Premium plan for Free"
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "invite-input",
                    class: { "is-invalid": _vm.referer_form.error }
                  },
                  [
                    _c("i", { staticClass: "far fa-envelope invite-icon" }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.referer_form.email,
                          expression: "referer_form.email"
                        }
                      ],
                      attrs: { type: "text", placeholder: "Email" },
                      domProps: { value: _vm.referer_form.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.referer_form,
                            "email",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-purple-gradient btn-rounded text-uppercase",
                    attrs: { disabled: _vm.referer_submitted },
                    on: {
                      click: function($event) {
                        return _vm.refer_friend()
                      }
                    }
                  },
                  [
                    _vm.referer_submitted
                      ? _c("i", { staticClass: "fa fa-spinner" })
                      : _vm._e(),
                    _vm._v("\n                Send Invite\n                ")
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-4" }),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-3" })
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container header-div" }, [
      _c(
        "p",
        { staticClass: "offline-king-header align-text-center text-center" },
        [_vm._v("Settings ")]
      ),
      _vm._v(" "),
      _c("a", { staticClass: "back-arrow", attrs: { href: "#" } }, [
        _c("p", { staticClass: "offline-king-header" }, [
          _c("i", { staticClass: "fas fa-arrow-left" }),
          _vm._v(" Back")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4 my-1" }, [
      _c("div", { staticClass: "card flex-1 settings-card" }, [
        _c("div", { staticClass: "card-body align-items-center px-5" }, [
          _c("p", { staticClass: "offline-king-header text-center" }, [
            _vm._v("Other Settings ")
          ]),
          _vm._v(" "),
          _c("label", { staticClass: "setting-form-label" }, [
            _vm._v("Language")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "settings-form" }, [
            _c("div", { staticClass: "setting-input" }, [
              _c("i", { staticClass: "fa fa-plus setting-icon" }),
              _vm._v(" "),
              _c("input", { attrs: { type: "text", placeholder: " English " } })
            ])
          ]),
          _vm._v(" "),
          _c("label", { staticClass: "setting-form-label" }, [
            _vm._v("Billing Plan")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "settings-form" }, [
            _c("div", { staticClass: "setting-input" }, [
              _c("i", { staticClass: "fa fa-plus setting-icon" }),
              _vm._v(" "),
              _c("input", { attrs: { type: "text", placeholder: " Free" } })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "setting-image" }, [
            _c("img", {
              staticClass: "img-fluid img-circle",
              attrs: { src: __webpack_require__(/*! ../../assets/img/user.jpg */ "./resources/js/assets/img/user.jpg"), alt: "" }
            }),
            _vm._v(" "),
            _c("p", { staticClass: "mx-3 my-3" }, [_vm._v("Change Photo")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group my-2" }, [
            _c(
              "button",
              {
                staticClass:
                  "btn btn-purple-gradient btn-rounded text-uppercase my-3"
              },
              [_vm._v("Save Changes")]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("i", { staticClass: "fa fa-plus" }),
      _vm._v(" Add Another Email")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-5 my-4" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-purple-gradient btn-rounded text-uppercase my-2"
        },
        [_vm._v("Deactivate Account")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-danger btn-rounded text-uppercase my-2" },
        [_vm._v("Remove Account")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/user/Settings.vue":
/*!************************************************!*\
  !*** ./resources/js/modules/user/Settings.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_5874f671___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=5874f671& */ "./resources/js/modules/user/Settings.vue?vue&type=template&id=5874f671&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/modules/user/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_5874f671___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_5874f671___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/user/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/user/Settings.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/modules/user/Settings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/user/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/user/Settings.vue?vue&type=template&id=5874f671&":
/*!*******************************************************************************!*\
  !*** ./resources/js/modules/user/Settings.vue?vue&type=template&id=5874f671& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_5874f671___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=5874f671& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/user/Settings.vue?vue&type=template&id=5874f671&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_5874f671___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_5874f671___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);