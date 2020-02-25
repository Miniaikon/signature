(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Retirar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Retirar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      users: [],
      url: 'http://' + window.location.host + '/',
      newPrealerta: false,
      form: {},
      formPart: 1
    };
  },
  mounted: function mounted() {
    this.loadData();
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      axios.get(this.url + 'api/pre-alerta').then(function (response) {
        _this.users = response.data;
        console.log(response);
      });
    },
    formSubmit: function formSubmit() {
      var _this2 = this;

      axios.post(this.url + 'api/prealerta', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        console.log('hecho');

        _this2.loadData();
      });
    },
    sig: function sig() {
      var message = {
        "firstName": "",
        "lastName": "",
        "eMail": "",
        "location": "",
        "imageFormat": 1,
        "imageX": "200",
        "imageY": "200",
        "imageTransparency": false,
        "imageScaling": false,
        "maxUpScalePercent": 0.0,
        "rawDataFormat": "ENC",
        "minSigPoints": 25
      };
      top.document.addEventListener('SignResponse', SignResponse, false);
      var messageData = JSON.stringify(message);
      var element = document.createElement("MyExtensionDataElement");
      element.setAttribute("messageAttribute", messageData);
      document.documentElement.appendChild(element);
      var evt = document.createEvent("Events");
      evt.initEvent("SignStartEvent", true, false);
      element.dispatchEvent(evt);

      function SignResponse(event) {
        var str = event.target.getAttribute("msgAttribute");
        var obj = JSON.parse(str);
        console.log(obj);
        document.querySelector('#img_sig').setAttribute('src', 'data:image/gif;base64,' + obj.imageData);
        this.form.imagen = obj.imageData; // document.querySelector('#imageCode').value = obj.imageData;
        //Process the response
      }
    },
    getImage: function getImage(e) {
      var file = e.target.files;
      console.log(file);
      this.form.images = file;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Retirar.vue?vue&type=template&id=176c0581&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Retirar.vue?vue&type=template&id=176c0581& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c(
    "vs-row",
    {
      attrs: {
        "vs-align": "center",
        "vs-type": "flex",
        "vs-justify": "space-around",
        "vs-w": "12"
      }
    },
    [
      _c(
        "vs-col",
        {
          staticClass: "pr-1",
          attrs: {
            "vs-type": "flex",
            "vs-justify": "center",
            "vs-align": "center",
            "vs-w": "8"
          }
        },
        [
          _c("vs-card", [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("h3", [
                _vm._v(
                  "\n                        Retirar paquete\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "vs-row",
                  [
                    _c(
                      "vs-col",
                      {
                        staticClass: "p-1",
                        attrs: { "vs-type": "flex", "vs-w": "4" }
                      },
                      [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Nro. Cliente")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-col",
                      {
                        staticClass: "p-1",
                        attrs: { "vs-type": "flex", "vs-w": "4" }
                      },
                      [
                        _c("vs-input", {
                          staticClass: "inputx",
                          attrs: { placeholder: "Nro. Cliente" },
                          model: {
                            value: _vm.form.cliente,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "cliente", $$v)
                            },
                            expression: "form.cliente"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-row",
                  [
                    _c(
                      "vs-col",
                      {
                        staticClass: "p-1",
                        attrs: { "vs-type": "flex", "vs-w": "4" }
                      },
                      [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Nro. Envío")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-col",
                      {
                        staticClass: "p-1",
                        attrs: { "vs-type": "flex", "vs-w": "4" }
                      },
                      [
                        _c("vs-input", {
                          staticClass: "inputx",
                          attrs: { placeholder: "Nro. Envío" },
                          model: {
                            value: _vm.form.envio,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "envio", $$v)
                            },
                            expression: "form.envio"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "p-1",
                    attrs: { "vs-type": "flex", "vs-w": "4" }
                  },
                  [_c("label", { attrs: { for: "" } }, [_vm._v("Firma")])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "p-1",
                    attrs: {
                      "vs-type": "flex",
                      "vs-w": "2",
                      "vs-justify": "center",
                      "vs-align": "center"
                    }
                  },
                  [
                    _c(
                      "vs-button",
                      {
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.sig()
                          }
                        }
                      },
                      [_vm._v("Firmar")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "p-1",
                    attrs: { "vs-type": "flex", "vs-w": "6" }
                  },
                  [
                    _c("img", {
                      staticStyle: {
                        height: "100px",
                        border: "1px solid black",
                        "border-radius": "10px"
                      },
                      attrs: { id: "img_sig", width: "100%", alt: "" }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "vs-row",
                  [
                    _c(
                      "vs-col",
                      {
                        staticClass: "p-1",
                        attrs: { "vs-type": "flex", "vs-w": "4" }
                      },
                      [
                        _c("label", { attrs: { for: "" } }, [
                          _vm._v("Comentario")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-col",
                      {
                        staticClass: "p-1",
                        attrs: { "vs-type": "flex", "vs-w": "8" }
                      },
                      [
                        _c("vs-textarea", {
                          staticClass: "inputx",
                          attrs: { placeholder: "Comentario" },
                          model: {
                            value: _vm.form.comentario,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "comentario", $$v)
                            },
                            expression: "form.comentario"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-row",
                  { staticClass: "p-5" },
                  [
                    _c("vs-button", { attrs: { color: "success" } }, [
                      _vm._v("Registrar Entrega")
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Retirar.vue":
/*!********************************************!*\
  !*** ./resources/js/src/views/Retirar.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Retirar_vue_vue_type_template_id_176c0581___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Retirar.vue?vue&type=template&id=176c0581& */ "./resources/js/src/views/Retirar.vue?vue&type=template&id=176c0581&");
/* harmony import */ var _Retirar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Retirar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Retirar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Retirar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Retirar_vue_vue_type_template_id_176c0581___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Retirar_vue_vue_type_template_id_176c0581___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Retirar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Retirar.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/Retirar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Retirar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Retirar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Retirar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Retirar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Retirar.vue?vue&type=template&id=176c0581&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/Retirar.vue?vue&type=template&id=176c0581& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Retirar_vue_vue_type_template_id_176c0581___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Retirar.vue?vue&type=template&id=176c0581& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Retirar.vue?vue&type=template&id=176c0581&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Retirar_vue_vue_type_template_id_176c0581___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Retirar_vue_vue_type_template_id_176c0581___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);