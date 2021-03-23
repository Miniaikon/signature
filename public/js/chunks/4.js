(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Historial.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Historial.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
      url: window.location.host + '/',
      items: []
    };
  },
  mounted: function mounted() {
    this.getEnvios();
  },
  methods: {
    getEnvios: function getEnvios() {
      var me = this;
      axios.get('/api/get-envios-procesados/' + localStorage.getItem('CodAgencia')).then(function (res) {
        me.items = res.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Historial.vue?vue&type=template&id=47d50475&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Historial.vue?vue&type=template&id=47d50475& ***!
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
                    "max-items": "15",
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
                                { attrs: { data: data[indextr].id_paquete } },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(data[indextr].id_paquete) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].id_cliente } },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(data[indextr].id_cliente) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].firma } },
                                [
                                  _c("img", {
                                    staticStyle: { height: "64px" },
                                    attrs: {
                                      src:
                                        "data:image/gif;base64," +
                                        data[indextr].firma,
                                      alt: ""
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].created_at } },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(data[indextr].created_at) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "vs-component vs-button vs-button-success vs-button-filled",
                                    attrs: {
                                      href:
                                        "/auth/imprimir-envio/" +
                                        data[indextr].id_paquete,
                                      target: "_blank"
                                    }
                                  },
                                  [_vm._v("Imprimir")]
                                )
                              ])
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
                      _c("vs-th", { attrs: { "sort-key": "id_paquete" } }, [
                        _vm._v(
                          "\n                            # Paquete\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "id_cliente" } }, [
                        _vm._v(
                          "\n                            # Cliente\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "firma" } }, [
                        _vm._v(
                          "\n                            Firma\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "created_at" } }, [
                        _vm._v(
                          "\n                            Fecha\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-th", [
                        _vm._v(
                          "\n                            Imprimir\n                        "
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

/***/ "./resources/js/src/views/Historial.vue":
/*!**********************************************!*\
  !*** ./resources/js/src/views/Historial.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Historial_vue_vue_type_template_id_47d50475___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Historial.vue?vue&type=template&id=47d50475& */ "./resources/js/src/views/Historial.vue?vue&type=template&id=47d50475&");
/* harmony import */ var _Historial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Historial.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Historial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Historial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Historial_vue_vue_type_template_id_47d50475___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Historial_vue_vue_type_template_id_47d50475___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Historial.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Historial.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/Historial.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Historial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Historial.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Historial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Historial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Historial.vue?vue&type=template&id=47d50475&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/Historial.vue?vue&type=template&id=47d50475& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Historial_vue_vue_type_template_id_47d50475___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Historial.vue?vue&type=template&id=47d50475& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Historial.vue?vue&type=template&id=47d50475&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Historial_vue_vue_type_template_id_47d50475___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Historial_vue_vue_type_template_id_47d50475___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);