(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Queries.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Queries.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      items: [],
      url: window.location.host + '/',
      form: {
        search: null,
        type: 1,
        NroDocumento: null,
        CodCliente: null,
        CodEnvio: null
      },
      options: []
    };
  },
  mounted: function mounted() {
    this.verifyAuth();
  },
  methods: {
    verifyAuth: function verifyAuth() {
      var _this = this;

      axios.get('/auth/who-am-i').then(function (response) {
        console.log(response.data);

        if (response.data == true) {// this.loadData();
        } else {
          _this.$router.push('/pages/login');
        }
      }).catch(function (error) {
        _this.$router.push('/pages/login');
      });
    },
    loadData: function loadData() {
      var _this2 = this;

      axios.get(this.url + 'api/entregados').then(function (response) {
        _this2.items = response.data;
        console.log(response);
      });
    },
    init: function init() {
      var me = this;
      this.form = {
        'imagen': '',
        'id_cliente': '',
        'id_paquete': '',
        'comentario': ''
      };
      this.verifyAuth();
      me.items = [];
    },
    makeQuery: function makeQuery() {
      var me = this;

      if (me.form.CodCliente) {
        me.form.search = me.form.CodCliente;
        me.form.type = 1;
      } else if (me.form.CodEnvio) {
        me.form.search = me.form.CodEnvio;
        me.form.type = 3;
      } else if (me.form.NroDocumento) {
        me.form.search = me.form.NroDocumento;
        me.form.type = 2;
      }

      axios.post('/api/get-envios-pendientes', this.form).then(function (res) {
        var resp = Array.isArray(res.data.Envio) ? res.data.Envio : [res.data.Envio];
        console.log(resp);
        me.items = resp;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Queries.vue?vue&type=template&id=2e6047a8&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Queries.vue?vue&type=template&id=2e6047a8& ***!
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
            "vs-align": "top",
            "vs-w": "5"
          }
        },
        [
          _c("vs-card", [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("h3", [
                _vm._v(
                  "\n                    Consultar envios\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
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
                    attrs: { "vs-type": "flex", "vs-w": "8" }
                  },
                  [
                    _c("vs-input", {
                      staticClass: "inputx",
                      staticStyle: { width: "100%" },
                      attrs: { placeholder: "Nro. Cliente" },
                      model: {
                        value: _vm.form.CodCliente,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "CodCliente", $$v)
                        },
                        expression: "form.CodCliente"
                      }
                    })
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
                        attrs: { "vs-type": "flex", "vs-w": "8" }
                      },
                      [
                        _c("vs-input", {
                          staticClass: "inputx",
                          staticStyle: { width: "100%" },
                          attrs: { placeholder: "Nro. Envío" },
                          model: {
                            value: _vm.form.CodEnvio,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "CodEnvio", $$v)
                            },
                            expression: "form.CodEnvio"
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
                  [
                    _c("label", { attrs: { for: "" } }, [
                      _vm._v("Nro. de Documento")
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
                    _c("vs-input", {
                      staticClass: "inputx",
                      staticStyle: { width: "100%" },
                      attrs: { placeholder: "" },
                      model: {
                        value: _vm.form.NroDocumento,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "NroDocumento", $$v)
                        },
                        expression: "form.NroDocumento"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "p-1",
                    attrs: {
                      "vs-type": "flex",
                      "vs-justify": "center",
                      "vs-w": "6"
                    }
                  },
                  [
                    _c(
                      "vs-button",
                      {
                        attrs: { color: "primary" },
                        on: {
                          click: function($event) {
                            return _vm.makeQuery()
                          }
                        }
                      },
                      [_vm._v("Buscar")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "p-1",
                    attrs: {
                      "vs-type": "flex",
                      "vs-justify": "center",
                      "vs-w": "6"
                    }
                  },
                  [
                    _c(
                      "vs-button",
                      {
                        attrs: { color: "warning" },
                        on: {
                          click: function($event) {
                            return _vm.init()
                          }
                        }
                      },
                      [_vm._v("Nueva busqueda")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("vs-row")
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-col",
        {
          staticClass: "pr-1",
          attrs: {
            "vs-type": "flex",
            "vs-justify": "center",
            "vs-align": "center",
            "vs-w": "7"
          }
        },
        [_c("vs-card")],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-col",
        { staticClass: "pl-1", attrs: { "vs-type": "flex", "vs-w": "12" } },
        [
          _vm.items.length
            ? _c(
                "vs-row",
                [
                  _c(
                    "vs-col",
                    {
                      staticClass: "pl-1",
                      attrs: {
                        "vs-type": "flex",
                        "vs-w": "12",
                        "vs-justify": "center",
                        "vs-align": "center"
                      }
                    },
                    [_c("h3", [_vm._v("Todos los envíos")])]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.items, function(item) {
                    return [
                      _c(
                        "vs-col",
                        {
                          staticClass: "pl-1",
                          attrs: { "vs-type": "flex", "vs-w": "4" }
                        },
                        [
                          _c(
                            "vs-card",
                            {
                              class: { "danger-color": item.Pago == "0" },
                              attrs: { "vz-color": "danger" }
                            },
                            [
                              _c(
                                "div",
                                { attrs: { slot: "header" }, slot: "header" },
                                [_c("h3", [_vm._v(_vm._s(item.CodEnvio))])]
                              ),
                              _vm._v(" "),
                              _c("div", [
                                _c("ul", [
                                  _c("li", [
                                    _c("b", [_vm._v("AWB:")]),
                                    _vm._v(" " + _vm._s(item.CodEnvio) + " ")
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("b", [_vm._v("Fecha generado:")]),
                                    _vm._v(" " + _vm._s(item.FechaModif) + " ")
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("b", [_vm._v("Remitente:")]),
                                    _vm._v(" " + _vm._s(item.Remitente) + " ")
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("b", [_vm._v("Agencia de origen:")]),
                                    _vm._v(
                                      " " + _vm._s(item.AgenciaOrigen) + " "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("b", [_vm._v("Destinatario:")]),
                                    _vm._v(
                                      " " + _vm._s(item.NombreCliente) + " "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("b", [_vm._v("Agencia de destino:")]),
                                    _vm._v(
                                      " " + _vm._s(item.AgenciaDestino) + " "
                                    )
                                  ])
                                ]),
                                _c("br"),
                                _vm._v(" "),
                                _c("h5", [_vm._v("Detalle del envío")]),
                                _vm._v(" "),
                                _c("ul", [
                                  _c("li", [
                                    _c("b", [_vm._v("Forma de pago:")]),
                                    _vm._v(" " + _vm._s(item.MedioPago) + " ")
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("b", [_vm._v("Peso:")]),
                                    _vm._v(" " + _vm._s(item.Peso) + " ")
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("b", [_vm._v("Importe:")]),
                                    _vm._v(
                                      " " + _vm._s(item.ImporteFlete) + " "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("b", [_vm._v("Estado del envio:")]),
                                    _vm._v(" " + _vm._s(item.Estado) + " ")
                                  ])
                                ])
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  })
                ],
                2
              )
            : _vm._e()
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

/***/ "./resources/js/src/views/Queries.vue":
/*!********************************************!*\
  !*** ./resources/js/src/views/Queries.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Queries_vue_vue_type_template_id_2e6047a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Queries.vue?vue&type=template&id=2e6047a8& */ "./resources/js/src/views/Queries.vue?vue&type=template&id=2e6047a8&");
/* harmony import */ var _Queries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Queries.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Queries.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Queries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Queries_vue_vue_type_template_id_2e6047a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Queries_vue_vue_type_template_id_2e6047a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Queries.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Queries.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/Queries.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Queries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Queries.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Queries.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Queries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Queries.vue?vue&type=template&id=2e6047a8&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/Queries.vue?vue&type=template&id=2e6047a8& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Queries_vue_vue_type_template_id_2e6047a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Queries.vue?vue&type=template&id=2e6047a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Queries.vue?vue&type=template&id=2e6047a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Queries_vue_vue_type_template_id_2e6047a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Queries_vue_vue_type_template_id_2e6047a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);