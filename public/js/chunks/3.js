(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _form;

    return {
      items: [],
      url: window.location.host + '/',
      form: (_form = {
        imagen: '',
        CodCliente: '',
        TipoDocumentoRetira: '',
        NroDocumentoRetira: '',
        NombreRetira: ''
      }, _defineProperty(_form, "CodCliente", ''), _defineProperty(_form, "CodEnvio", ''), _defineProperty(_form, "NroDocumento", ''), _defineProperty(_form, "NombreCliente", ''), _defineProperty(_form, "NroDocumentoRetira", ''), _defineProperty(_form, "TipoDocumentoRetira", '1'), _form),
      options: [],
      modals: {
        option: false
      }
    };
  },
  mounted: function mounted() {
    this.init();
    this.verifyAuth();
  },
  methods: {
    verifyAuth: function verifyAuth() {
      var _this = this;

      axios.get('/auth/who-am-i').then(function (response) {
        console.log(response.data);

        if (response.data == true) {
          _this.loadData();
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
    formSubmit: function formSubmit() {
      var _this3 = this;

      axios.post(this.url + 'api/entregar', this.form).then(function (response) {
        console.log('hecho');

        _this3.init();
      });
    },
    sig: function sig() {
      var me = this;
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
        me.form.imagen = obj.imageData; // document.querySelector('#imageCode').value = obj.imageData;
        //Process the response
      }
    },
    init: function init() {
      var f = new Date();
      this.form = {
        'imagen': '',
        'id_cliente': '',
        'id_paquete': '',
        'comentario': '',
        'CodCliente': '',
        'FechaRetira': f.getFullYear() + "-" + this.zfill(f.getMonth() + 1, 2) + "-" + this.zfill(f.getDate(), 2),
        'NroDocumentoRetira': '',
        'TipoDocumentoRetira': '1'
      };
      this.options = [];
      this.loadData();
    },
    searchClient: function searchClient() {
      var me = this;

      if (me.form.CodCliente) {
        this.getByClient();
      } else if (me.form.NroDocumento) {
        this.getByDocument();
      } else if (me.form.CodEnvio) {
        this.getBySend();
      } else {
        alert("No hay parametros de busqueda");
      }
    },
    send: function send() {
      var validator = true;
      var paquete = this.options.find(function (item) {
        return item.NombreMedioPago == 'PAGO PENDIENTE';
      });

      if (paquete != undefined) {
        alert('Tienes paquetes sin pagar');
      } else {
        var me = this;
        console.log(me.options);
        var codigosEnvio = me.options.map(function (item) {
          return item.CodEnvio;
        });
        var listaEnvio = codigosEnvio.join('|');

        if (me.form.imagen === null || me.form.imagen === '' || me.form.imagen === undefined) {
          alert('Debes firmar antes de procesar');
          return;
        }

        var data = {
          unaListaEnvios: me.options.length > 1 ? listaEnvio : listaEnvio.CodEnvio,
          unaFirma: me.form.imagen,
          unCodTipoDocumento: me.form.TipoDocumentoRetira,
          unNroDocumento: me.form.NroDocumentoRetira,
          unNombreClienteRetira: me.form.NombreRetira,
          unCodUsuarioModif: localStorage.getItem('userCode')
        };
        axios.post('/api/enviar', data).then(function (res) {
          var _me$form;

          me.form = (_me$form = {
            imagen: '',
            CodCliente: '',
            TipoDocumentoRetira: '',
            NroDocumentoRetira: '',
            NombreRetira: ''
          }, _defineProperty(_me$form, "CodCliente", ''), _defineProperty(_me$form, "CodEnvio", ''), _defineProperty(_me$form, "NroDocumento", ''), _defineProperty(_me$form, "NombreCliente", ''), _defineProperty(_me$form, "NroDocumentoRetira", ''), _defineProperty(_me$form, "TipoDocumentoRetira", '1'), _me$form);
          alert('Paquetes procesados con éxito');
        }).catch(function (err) {
          alert(err.response.data);
        });
      }
    },
    zfill: function zfill(number, width) {
      var numberOutput = Math.abs(number);
      /* Valor absoluto del número */

      var length = number.toString().length;
      /* Largo del número */

      var zero = "0";
      /* String de cero */

      if (width <= length) {
        if (number < 0) {
          return "-" + numberOutput.toString();
        } else {
          return numberOutput.toString();
        }
      } else {
        if (number < 0) {
          return "-" + zero.repeat(width - length) + numberOutput.toString();
        } else {
          return zero.repeat(width - length) + numberOutput.toString();
        }
      }
    },
    retiraCliente: function retiraCliente() {
      var me = this;
      me.form.TipoDocumentoRetira = 1;
      me.form.NroDocumentoRetira = me.form.NroDocumento;
      me.form.NombreRetira = me.form.NombreCliente;
      document.querySelector('#documento_retira').value = me.form.NroDocumento;
      document.querySelector('#nombre_retira').value = me.form.NombreCliente;
      console.log(me.form.NroDocumentoRetira);
    },
    getByDocument: function getByDocument() {
      var _this4 = this;

      var me = this;
      axios.get('https://exurcompras.com/getPaquetesByDocument.php?documento=' + me.form.NroDocumento).then(function (response) {
        var res = Array.isArray(response.data.Envio) ? response.data.Envio : [response.data.Envio];

        if (res[0]) {
          me.options = res;
          me.form = res[0];
          var f = new Date();
          me.form.FechaRetira = f.getFullYear() + "-" + _this4.zfill(f.getMonth() + 1, 2) + "-" + _this4.zfill(f.getDate(), 2);
          me.form.TipoDocumentoRetira = '1';
        } else {
          alert('No se encontró ningun paquete');
        }
      });
    },
    getByClient: function getByClient() {
      var _this5 = this;

      var me = this;
      axios.get('https://exurcompras.com/getPaquetes.php?id_cliente=' + (me.form.CodCliente ? me.form.CodCliente : 'null')).then(function (response) {
        var res = Array.isArray(response.data.Envio) ? response.data.Envio : [response.data.Envio];

        if (res[0]) {
          me.options = res;
          me.form = res[0];
          var f = new Date();
          me.form.FechaRetira = f.getFullYear() + "-" + _this5.zfill(f.getMonth() + 1, 2) + "-" + _this5.zfill(f.getDate(), 2);
          me.form.TipoDocumentoRetira = '1';
        } else {
          console.log("No se encontró ningun paquete");
        }
      });
    },
    getBySend: function getBySend() {
      var _this6 = this;

      var me = this;
      axios.get('https://exurcompras.com/getCodeSend.php?send_code=' + (me.form.CodEnvio ? me.form.CodEnvio : 'null')).then(function (response) {
        var res = Array.isArray(response.data.Envio) ? response.data.Envio : [response.data.Envio];

        if (res[0]) {
          me.options = res;
          me.form = res[0];
          var f = new Date();
          me.form.FechaRetira = f.getFullYear() + "-" + _this6.zfill(f.getMonth() + 1, 2) + "-" + _this6.zfill(f.getDate(), 2);
          me.form.TipoDocumentoRetira = '1';
        } else {
          console.log("No se encontró ningun paquete");
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=stylus&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=stylus& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".danger-color {\n  color: #fff;\n}[dir] .danger-color {\n  background: #f00;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=stylus&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=stylus& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--11-2!../../../../node_modules/stylus-loader!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=stylus&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \******************************************************************************************************************************************************************************************************/
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
        "vs-align": "top",
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
                  "\n                    Buscar cliente\n                    "
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
                    attrs: { "vs-type": "flex", "vs-w": "4" }
                  },
                  [
                    _c("vs-input", {
                      staticClass: "inputx",
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
                  "vs-col",
                  {
                    staticClass: "p-1",
                    attrs: {
                      "vs-type": "flex",
                      "vs-justify": "center",
                      "vs-w": "4"
                    }
                  },
                  [
                    _c(
                      "vs-button",
                      {
                        attrs: { color: "primary" },
                        on: {
                          click: function($event) {
                            return _vm.searchClient()
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
                  [_c("label", { attrs: { for: "" } }, [_vm._v("Documento")])]
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "p-1",
                    attrs: { "vs-type": "flex", "vs-w": "4" }
                  },
                  [
                    _c(
                      "select",
                      {
                        staticClass: "vs-inputx vs-input--input normal",
                        attrs: { name: "" }
                      },
                      [
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("C.I")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "2" } }, [
                          _vm._v("RUT")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "3" } }, [
                          _vm._v("PASAPORTE")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "4" } }, [
                          _vm._v("NIFE")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "5" } }, [
                          _vm._v("OTROS")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "6" } }, [_vm._v("DNI")])
                      ]
                    )
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
                          _vm._v("Nombre / Apellido")
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
                          attrs: { placeholder: "Nombre" },
                          model: {
                            value: _vm.form.NombreCliente,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "NombreCliente", $$v)
                            },
                            expression: "form.NombreCliente"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
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
        [
          _c("vs-card", [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _c("h3", [
                _vm._v(
                  "\n                        Datos de quien retira\n                    "
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
                      { staticClass: "pr-2", attrs: { "vs-w": "12" } },
                      [
                        _c(
                          "vs-row",
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.FechaRetira,
                                  expression: "form.FechaRetira"
                                }
                              ],
                              staticClass: "vs-inputx vs-input--input normal",
                              attrs: { type: "hidden", readonly: "" },
                              domProps: { value: _vm.form.FechaRetira },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "FechaRetira",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("vs-col", {
                              staticClass: "p-1",
                              attrs: {
                                "vs-type": "flex",
                                "vs-justify": "center",
                                "vs-w": "12"
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
                                attrs: { "vs-type": "flex", "vs-w": "2" }
                              },
                              [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Documento")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "p-1",
                                attrs: { "vs-type": "flex", "vs-w": "5" }
                              },
                              [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.TipoDocumentoRetira,
                                        expression: "form.TipoDocumentoRetira"
                                      }
                                    ],
                                    staticClass:
                                      "vs-inputx vs-input--input normal",
                                    attrs: { name: "" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.form,
                                          "TipoDocumentoRetira",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "option",
                                      { attrs: { value: "1", selected: "" } },
                                      [_vm._v("C.I")]
                                    ),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "2" } }, [
                                      _vm._v("RUT")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "3" } }, [
                                      _vm._v("PASAPORTE")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "4" } }, [
                                      _vm._v("NIFE")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "5" } }, [
                                      _vm._v("OTROS")
                                    ]),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "6" } }, [
                                      _vm._v("DNI")
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
                                attrs: { "vs-type": "flex", "vs-w": "5" }
                              },
                              [
                                _c("vs-input", {
                                  staticClass: "inputx",
                                  staticStyle: { width: "100%" },
                                  attrs: { id: "documento_retira" },
                                  model: {
                                    value: _vm.form.NroDocumentoRetira,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.form,
                                        "NroDocumentoRetira",
                                        $$v
                                      )
                                    },
                                    expression: "form.NroDocumentoRetira"
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
                                attrs: { "vs-type": "flex", "vs-w": "2" }
                              },
                              [
                                _c("label", { attrs: { for: "" } }, [
                                  _vm._v("Nombre")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "p-1",
                                attrs: { "vs-type": "flex", "vs-w": "10" }
                              },
                              [
                                _c("vs-input", {
                                  staticClass: "inputx block",
                                  staticStyle: { width: "100%" },
                                  attrs: { id: "nombre_retira" },
                                  model: {
                                    value: _vm.form.NombreRetira,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "NombreRetira", $$v)
                                    },
                                    expression: "form.NombreRetira"
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
                                attrs: { "vs-type": "flex", "vs-w": "3" }
                              },
                              [
                                _c(
                                  "vs-button",
                                  {
                                    staticStyle: { width: "100%" },
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
                              { staticClass: "p-1", attrs: { "vs-w": "9" } },
                              [
                                _c("img", {
                                  staticStyle: {
                                    height: "90px",
                                    border: "1px solid #ccc",
                                    "border-radius": "10px"
                                  },
                                  attrs: {
                                    id: "img_sig",
                                    width: "100%",
                                    alt: ""
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              { staticClass: "p-1", attrs: { "vs-w": "4" } },
                              [
                                _c(
                                  "vs-button",
                                  {
                                    staticStyle: { width: "100%" },
                                    attrs: { color: "primary" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.retiraCliente()
                                      }
                                    }
                                  },
                                  [_vm._v("Retira Cliente")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              { staticClass: "p-1", attrs: { "vs-w": "4" } },
                              [
                                _c(
                                  "vs-button",
                                  {
                                    staticStyle: { width: "100%" },
                                    attrs: { color: "success" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.send()
                                      }
                                    }
                                  },
                                  [_vm._v("Registrar entrega")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              { staticClass: "p-1", attrs: { "vs-w": "4" } },
                              [
                                _c(
                                  "vs-button",
                                  {
                                    staticStyle: { width: "100%" },
                                    attrs: { color: "danger" },
                                    on: {
                                      click: function($event) {
                                        return _vm.init()
                                      }
                                    }
                                  },
                                  [_vm._v("Cancelar")]
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
                  ],
                  1
                )
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
        { staticClass: "pl-1", attrs: { "vs-type": "flex", "vs-w": "12" } },
        [
          _vm.options.length
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
                  _vm._l(_vm.options, function(item) {
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
                                    _c("b", [_vm._v("Documento:")]),
                                    _vm._v(" " + _vm._s(item.Estado) + " ")
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("b", [_vm._v("Cantidad de piezas:")]),
                                    _vm._v(
                                      " " + _vm._s(item.CantidadPiezas) + " "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("b", [_vm._v("Codigo de Movimiento:")]),
                                    _vm._v(
                                      " " + _vm._s(item.CodMovimiento) + " "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("b", [_vm._v("Ubicación:")]),
                                    _vm._v(" " + _vm._s(item.Ubicacion) + " ")
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("b", [_vm._v("Estado:")]),
                                    _vm._v(" " + _vm._s(item.Estado) + " ")
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("b", [_vm._v("Método de pago:")]),
                                    _vm._v(
                                      " " + _vm._s(item.NombreMedioPago) + " "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c("b", [_vm._v("Pagado:")]),
                                    _vm._v(
                                      " " +
                                        _vm._s(item.Pago == "0" ? "No" : "Si") +
                                        " "
                                    )
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
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: { classContent: "popup-example", active: _vm.modals.option },
          on: {
            "update:active": function($event) {
              return _vm.$set(_vm.modals, "option", $event)
            }
          }
        },
        [
          _c(
            "vs-col",
            { staticClass: "mt-10", attrs: { "vs-w": "12" } },
            [
              _c(
                "vs-table",
                {
                  attrs: {
                    pagination: "",
                    "max-items": "3",
                    search: "",
                    data: _vm.options
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
                                { attrs: { data: data[indextr].Estado } },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(data[indextr].Estado) +
                                      "\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                [
                                  _c(
                                    "vs-button",
                                    {
                                      on: {
                                        click: function($event) {
                                          _vm.form = data[indextr]
                                          _vm.modals.option = false
                                        }
                                      }
                                    },
                                    [_vm._v("Seleccion")]
                                  )
                                ],
                                1
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
                        "\n                        Seleccione un paquete\n                        "
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
                          "\n                            # Envío\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "CantidadPiezas" } }, [
                        _vm._v(
                          "\n                            # Piezas\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "CodMovimiento" } }, [
                        _vm._v(
                          "\n                            Código de movimiento\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "Estado" } }, [
                        _vm._v(
                          "\n                            Estado\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-th", [
                        _vm._v(
                          "\n                            Seleccionar\n                        "
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

/***/ "./resources/js/src/views/Home.vue":
/*!*****************************************!*\
  !*** ./resources/js/src/views/Home.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=e85b2cee& */ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=stylus& */ "./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=stylus&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=stylus& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--11-2!../../../../node_modules/stylus-loader!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=e85b2cee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);