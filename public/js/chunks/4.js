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
        type: 1
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
      this.form = {
        'imagen': '',
        'id_cliente': '',
        'id_paquete': '',
        'comentario': ''
      };
      this.verifyAuth();
    },
    makeQuery: function makeQuery() {
      var me = this;
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
            "vs-align": "center",
            "vs-w": "8"
          }
        },
        [
          _c("vs-card", { staticClass: "cardx" }, [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("h3", [_vm._v("Consultar envíos")])
            ]),
            _vm._v(" "),
            _c("div", [
              _c(
                "form",
                { attrs: { action: "" } },
                [
                  _c(
                    "vs-col",
                    {
                      staticClass: "p-1",
                      attrs: { "vs-type": "flex", "vs-w": "6" }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.search,
                            expression: "form.search"
                          }
                        ],
                        staticClass: "vs-inputx vs-input--input normal",
                        attrs: { placeholder: "Dato a buscar" },
                        domProps: { value: _vm.form.search },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "search", $event.target.value)
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "p-1",
                      attrs: { "vs-type": "flex", "vs-w": "6" }
                    },
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.type,
                              expression: "form.type"
                            }
                          ],
                          staticClass: "vs-inputx vs-input--input normal",
                          attrs: { name: "" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.form,
                                "type",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("Codigo de cliente")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "2" } }, [
                            _vm._v("Número de documento")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "3" } }, [
                            _vm._v("Número de envío")
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "p-1",
                      attrs: { "vs-type": "flex", "vs-w": "12" }
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticStyle: { width: "100%" },
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
                  )
                ],
                1
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-col",
        { staticClass: "mt-10", attrs: { "vs-w": "12" } },
        [
          _c(
            "vs-card",
            [
              _c(
                "vs-table",
                {
                  attrs: {
                    pagination: "",
                    "max-items": "20",
                    search: "",
                    data: _vm.items
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(ref) {
                        var data = ref.data
                        return _vm._l(data, function(tr, indextr) {
                          return _c(
                            "vs-tr",
                            { key: indextr, attrs: { data: tr } },
                            [
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].CodEnvio } },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(data[indextr].CodEnvio) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].CodCliente } },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(data[indextr].CodCliente) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].NroDocumento } },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(data[indextr].NroDocumento) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                {
                                  attrs: { data: data[indextr].CodMovimiento }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(data[indextr].CodMovimiento) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                {
                                  attrs: { data: data[indextr].CantidadPiezas }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(data[indextr].CantidadPiezas) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].FechaModif } },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(data[indextr].FechaModif) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                {
                                  attrs: { data: data[indextr].NombreMedioPago }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(data[indextr].NombreMedioPago) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                {
                                  attrs: { data: data[indextr].NombreCliente }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(data[indextr].NombreCliente) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                {
                                  attrs: { data: data[indextr].AgenciaOrigen }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(data[indextr].AgenciaOrigen) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                {
                                  attrs: { data: data[indextr].AgenciaDestino }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(data[indextr].AgenciaDestino) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].Estado } },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(data[indextr].Estado) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        })
                      }
                    }
                  ])
                },
                [
                  _c("template", { slot: "header" }, [
                    _c("h3", [
                      _vm._v(
                        "\n                        Entregados\n                        "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "template",
                    { slot: "thead" },
                    [
                      _c("vs-th", { attrs: { "sort-key": "CodEnvio" } }, [
                        _vm._v(
                          "\n                        # Envio\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "CodCliente" } }, [
                        _vm._v(
                          "\n                        # Cliente\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "NroDocumento" } }, [
                        _vm._v(
                          "\n                        # Documento\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "CodMovimiento" } }, [
                        _vm._v(
                          "\n                        # Movimiento\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "CantidadPiezas" } }, [
                        _vm._v(
                          "\n                        Piezas\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "FechaModif" } }, [
                        _vm._v(
                          "\n                        Fecha\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-th",
                        { attrs: { "sort-key": "NombreMedioPago" } },
                        [
                          _vm._v(
                            "\n                        Medio de pago\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "NombreCliente" } }, [
                        _vm._v(
                          "\n                        Nombre\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "AgenciaOrigen" } }, [
                        _vm._v(
                          "\n                        Origen\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "AgenciaDestino" } }, [
                        _vm._v(
                          "\n                        Destino\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "Estado" } }, [
                        _vm._v(
                          "\n                        Estado\n                        "
                        )
                      ])
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          )
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