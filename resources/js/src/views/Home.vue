<template>
	<vs-row vs-align="top" vs-type="flex" vs-justify="space-around" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="top" class="pr-1" vs-w="5">
            <vs-card>
                <div slot="header">
                    <h3>
                    Buscar cliente
                    </h3>
                </div>
                <div>
                    <vs-col vs-type="flex" vs-w="4" class="p-1">
                        <label for="">Nro. Cliente</label>
                    </vs-col>
                     <vs-col vs-type="flex" vs-w="4" class="p-1">
                        <vs-input class="inputx" v-model="form.CodCliente" placeholder="Nro. Cliente" />
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="center" vs-w="4" class="p-1">
                         <vs-button color="primary" v-on:click="searchClient()">Buscar</vs-button>
                    </vs-col>
                    <!-- other -->
                    <vs-row>
                        <vs-col vs-type="flex" vs-w="4" class="p-1">
                            <label for="">Nro. Envío</label>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="8" class="p-1">
                            <vs-input class="inputx" style="width: 100%;" v-model="form.CodEnvio" placeholder="Nro. Envío" />
                        </vs-col>
                    </vs-row>
                    <!-- other -->
                    <vs-col vs-type="flex" vs-w="4" class="p-1">
                        <label for="">Documento</label>
                    </vs-col>
                    <vs-col vs-type="flex" vs-w="4" class="p-1">
                        <select name="" class="vs-inputx vs-input--input normal" >
                            <option value="1">C.I</option>
                            <option value="2">RUT</option>
                            <option value="3">PASAPORTE</option>
                            <option value="4">NIFE</option>
                            <option value="5">OTROS</option>
                            <option value="6">DNI</option>
                        </select>
                    </vs-col>
                    <vs-col vs-type="flex" vs-w="4" class="p-1">
                        <vs-input class="inputx" placeholder="" v-model="form.NroDocumento" />
                    </vs-col>
                    <!-- Other -->
                    <vs-row>
                        <vs-col vs-type="flex" vs-w="4" class="p-1">
                            <label for="">Nombre / Apellido</label>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="8" class="p-1">
                            <vs-input class="inputx" style="width: 100%;" v-model="form.NombreCliente" placeholder="Nombre" />
                        </vs-col>
                    </vs-row>
                </div>
            </vs-card>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" class="pr-1" vs-w="7">
            <vs-card>
                <div slot="header">
                    <h3>
                        Datos de quien retira
                    </h3>
                </div>
                <div>
                    <vs-row>
                        <vs-col vs-w="12" class="pr-2">
                            <vs-row>
                                <input type="hidden" v-model="form.FechaRetira" readonly class="vs-inputx vs-input--input normal">
                                <vs-col vs-type="flex" vs-justify="center" vs-w="12" class="p-1">
                                </vs-col>
                            </vs-row>
                            <!-- other -->
                            <vs-row>
                                <vs-col vs-type="flex" vs-w="2" class="p-1">
                                    <label for="">Documento</label>
                                </vs-col>
                                <vs-col vs-type="flex" vs-w="5" class="p-1">
                                    <select name="" class="vs-inputx vs-input--input normal" v-model="form.TipoDocumentoRetira">
                                        <option value="1" selected>C.I</option>
                                        <option value="2">RUT</option>
                                        <option value="3">PASAPORTE</option>
                                        <option value="4">NIFE</option>
                                        <option value="5">OTROS</option>
                                        <option value="6">DNI</option>
                                    </select>
                                </vs-col>
                                <vs-col vs-type="flex" vs-w="5" class="p-1">
                                    <vs-input class="inputx" style="width:100%;" id="documento_retira" v-model="form.NroDocumentoRetira" />
                                </vs-col>
                            </vs-row>
                            <!-- Other -->
                            <vs-row>
                                <vs-col vs-type="flex" vs-w="2" class="p-1">
                                    <label for="">Nombre</label>
                                </vs-col>
                                <vs-col vs-type="flex" vs-w="10" class="p-1">
                                    <vs-input class="inputx block" style="width: 100%;" id="nombre_retira" v-model="form.NombreRetira" />
                                </vs-col>
                            </vs-row>
                            <vs-row>
                                <vs-col vs-type="flex" vs-w="3" class="p-1">
                                    <vs-button v-on:click.prevent="sig()" style="width:100%">Firmar</vs-button>
                                </vs-col>
                                <vs-col vs-w="9" class="p-1">
                                    <img  id="img_sig" width="100%" style="height: 90px; border: 1px solid #ccc; border-radius: 10px;" alt="">
                                </vs-col>
                                <vs-col vs-w="4" class="p-1">
                                    <vs-button color="primary" @click.prevent="retiraCliente()" style="width: 100%">Retira Cliente</vs-button>
                                </vs-col>
                                <vs-col vs-w="4" class="p-1">
                                    <vs-button color="success" @click.prevent="send()" style="width: 100%">Registrar entrega</vs-button>
                                </vs-col>
                                <vs-col vs-w="4" class="p-1">
                                        <vs-button color="warning" @click="init()" style="width: 100%">Nueva busqueda</vs-button>
                                </vs-col>
                            </vs-row>
                        </vs-col>
                    </vs-row>


                </div>

            </vs-card>
        </vs-col>
        <!-- <vs-col vs-w="12" class="p-1">
            <center>
                <vs-button color="success" @click.prevent="send()">Registrar entrega</vs-button>
                <vs-button color="danger" @click="init()">Cancelar</vs-button>
            </center>

        </vs-col> -->
        <vs-col vs-type="flex" class="pl-1" vs-w="12">

             <vs-row v-if="options.length">
                <vs-col vs-type="flex" class="pl-1" vs-w="12" vs-justify="center" vs-align="center">
                    <h3>Todos los envíos</h3>
                </vs-col>
                <template v-for="item in options">
                    <vs-col vs-type="flex" class="pl-1" vs-w="4">
                        <vs-card  vz-color="danger" class="" v-bind:class="{'danger-color':item.Pago == '0'}">
                            <div slot="header">
                                <h3>{{ item.CodEnvio }}</h3>
                            </div>
                            <div>
                                <ul>
                                    <li><b>AWB:</b> {{ item.CodEnvio }} </li>
                                    <li><b>Cantidad de piezas:</b> {{ item.CantidadPiezas }} </li>
                                    <li><b>Peso:</b> {{ item.Peso }} </li>
                                    <li><b>Ubicación:</b> {{ item.Ubicacion }} </li>
                                    <li><b>Codigo de Movimiento:</b> {{ item.CodMovimiento }} </li>
                                    <li><b>Pago:</b> {{ item.Pago ? item.NombreMedioPago : 'Impago' }} </li>
                                    <li><b>Envio:</b> {{ item.Pago == '0' ? 'Impago' : 'Pago' }} </li>
                                    <li v-if="!item.Pago"><b>Flete:</b> {{ item.importeFlete }} </li>
                                </ul>
                            </div>

                        </vs-card>
                    </vs-col>
                </template>
            </vs-row>


        </vs-col>
        <vs-popup classContent="popup-example" :active.sync="modals.option">
        <vs-col vs-w="12" class="mt-10">
                <vs-table pagination max-items="3" search :data="options">
                    <template slot="header">
                        <h3>
                        Seleccione un paquete
                        </h3>
                    </template>
                    <template slot="thead">
                        <vs-th sort-key="CodEnvio">
                            # Envío
                        </vs-th>
                        <vs-th sort-key="CantidadPiezas">
                            # Piezas
                        </vs-th>
                        <vs-th sort-key="CodMovimiento">
                            Código de movimiento
                        </vs-th>
                        <vs-th sort-key="Estado">
                            Estado
                        </vs-th>
                        <vs-th>
                            Seleccionar
                        </vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
                            <vs-td :data="data[indextr].CodEnvio">
                                {{data[indextr].CodEnvio}}
                            </vs-td>

                            <vs-td :data="data[indextr].CantidadPiezas">
                                {{data[indextr].CantidadPiezas}}
                            </vs-td>

                            <vs-td :data="data[indextr].CodMovimiento">
                                {{data[indextr].CodMovimiento}}
                            </vs-td>

                            <vs-td :data="data[indextr].Estado">
                                {{data[indextr].Estado}}
                            </vs-td>

                            <vs-td>
                                <vs-button v-on:click="form = data[indextr]; modals.option = false">Seleccion</vs-button>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
        </vs-col>
    </vs-popup>
    </vs-row>
</template>
<style lang="stylus">
    .danger-color{
        background: red;
        color: white;
    }
</style>
<script>
export default {
    data() {
        return {
            items: [],
            url: window.location.host+'/',
            form: {
                imagen: '',
                CodCliente: '',
                TipoDocumentoRetira: '',
                NroDocumentoRetira: '',
                NombreRetira: '',
                CodCliente: '',
                CodEnvio:'',
                NroDocumento: '',
                NombreCliente: '',
                NroDocumentoRetira: '',
                TipoDocumentoRetira: '1'
            },
            options: [

            ],
            modals: {
                option: false
            }
        }
    },
    mounted(){
        this.init();
        this.verifyAuth();
    },
    methods: {
        verifyAuth(){
            axios.get('/auth/who-am-i').then(response => {
                console.log(response.data);
                if(response.data == true){
                    this.loadData();
                }else{
                    this.$router.push('/pages/login');
                }
            }).catch(error => {
                    this.$router.push('/pages/login');
            });
        },
        loadData(){
            axios.get(this.url+'api/entregados').then(response => {
                this.items = response.data;
                console.log(response);
            });
        },
        formSubmit(){
                axios.post(this.url+'api/entregar', this.form).then(response => {
                console.log('hecho');
                this.init();
            });
        },
        sig(){
            let me = this;
            var message = { "firstName": "", "lastName": "", "eMail": "", "location": "", "imageFormat": 1, "imageX": "200",
                            "imageY": "200", "imageTransparency": false, "imageScaling": false, "maxUpScalePercent": 0.0,
                            "rawDataFormat": "ENC", "minSigPoints": 25 };
                top.document.addEventListener('SignResponse', SignResponse, false);
                var messageData = JSON.stringify(message);
                var element = document.createElement("MyExtensionDataElement");
                element.setAttribute("messageAttribute", messageData);
                document.documentElement.appendChild(element);
                var evt = document.createEvent("Events");
                evt.initEvent("SignStartEvent", true, false);
                element.dispatchEvent(evt);
                function SignResponse(event)
                {
                    var str = event.target.getAttribute("msgAttribute");
                    var obj = JSON.parse(str);
                    console.log(obj);
                    document.querySelector('#img_sig').setAttribute('src', 'data:image/gif;base64,'+obj.imageData)
                    me.form.imagen = obj.imageData;
                    // document.querySelector('#imageCode').value = obj.imageData;
                    //Process the response
                }
        },
        init(){
            let f = new Date();

            this.form = {
                'imagen': '',
                'id_cliente': '',
                'id_paquete': '',
                'comentario': '',
                'CodCliente': '',
                'FechaRetira': f.getFullYear() + "-" + this.zfill(f.getMonth() +1, 2) + "-" + this.zfill(f.getDate(), 2),
                'NroDocumentoRetira': '',
                'TipoDocumentoRetira': '1'
            };
            this.options = [];
            this.loadData();
            document.querySelector('#img_sig').setAttribute('src', '');
        },
        searchClient(){
            let me = this;
            if(me.form.CodCliente){
                this.getByClient();
            }else if(me.form.NroDocumento){
                this.getByDocument();
            }else if(me.form.CodEnvio){
                this.getBySend()
            }else{
                alert("No hay parametros de busqueda");
            }
        },
        send(){
            let validator = true;
            let paquete = this.options.find(item => {
                return item.NombreMedioPago == 'PAGO PENDIENTE';
            });
            if(paquete != undefined){
                alert('Tienes paquetes sin pagar');
            }else{

                let me = this;

                console.log(me.options);

                let codigosEnvio = me.options.map(item => item.CodEnvio);
                let listaEnvio = codigosEnvio.join('|');

                if(me.form.imagen === null || me.form.imagen === '' || me.form.imagen === undefined){
                    alert('Debes firmar antes de procesar');
                    return;
                }

                let data = {
                    unaListaEnvios: listaEnvio,
                    unaFirma: me.form.imagen,
                    unCodTipoDocumento: me.form.TipoDocumentoRetira,
                    unNroDocumento: me.form.NroDocumentoRetira,
                    unNombreClienteRetira: me.form.NombreRetira,
                    unCodUsuarioModif: localStorage.getItem('userCode')
                }

                axios.post('/api/enviar', data).then(res => {
                    me.form = {
                        imagen: '',
                        CodCliente: '',
                        TipoDocumentoRetira: '',
                        NroDocumentoRetira: '',
                        NombreRetira: '',
                        CodCliente: '',
                        CodEnvio:'',
                        NroDocumento: '',
                        NombreCliente: '',
                        NroDocumentoRetira: '',
                        TipoDocumentoRetira: '1'
                    };
                    alert('Paquetes procesados con éxito');
                    // location.reload();
                }).catch(err => {
                    alert(err.response.data);
                });
            }

        },
        zfill(number, width) {
            var numberOutput = Math.abs(number); /* Valor absoluto del número */
            var length = number.toString().length; /* Largo del número */
            var zero = "0"; /* String de cero */

            if (width <= length) {
                if (number < 0) {
                    return ("-" + numberOutput.toString());
                } else {
                    return numberOutput.toString();
                }
            } else {
                if (number < 0) {
                    return ("-" + (zero.repeat(width - length)) + numberOutput.toString());
                } else {
                    return ((zero.repeat(width - length)) + numberOutput.toString());
                }
            }
        },
        retiraCliente(){
            let me = this;
            me.form.TipoDocumentoRetira = 1;
            me.form.NroDocumentoRetira = me.form.NroDocumento;
            me.form.NombreRetira = me.form.NombreCliente;

            document.querySelector('#documento_retira').value = me.form.NroDocumento;
            document.querySelector('#nombre_retira').value = me.form.NombreCliente;
            console.log(me.form.NroDocumentoRetira);
        },
        getByDocument(){
            let me = this;
            axios.get('https://exurcompras.com/getPaquetesByDocument.php?documento='+me.form.NroDocumento).then(response => {
                let res = Array.isArray(response.data.Envio) ? response.data.Envio : [ response.data.Envio ];
                if(res[0]){
                    me.options = res;
                    me.form = res[0];
                    let f = new Date();
                    me.form.FechaRetira = f.getFullYear() + "-" + this.zfill(f.getMonth() +1, 2) + "-" + this.zfill(f.getDate(), 2);
                    me.form.TipoDocumentoRetira = '1';

                }else{alert('No se encontró ningun envío');
                }
            });
        },
        getByClient(){
            let me = this;
            axios.get('https://exurcompras.com/getPaquetes.php?id_cliente='+(me.form.CodCliente ? me.form.CodCliente : 'null')).then(response => {
                let res = Array.isArray(response.data.Envio) ? response.data.Envio : [ response.data.Envio ];
                if(res[0]){
                    me.options = res;
                    me.form = res[0];
                    let f = new Date();
                    me.form.FechaRetira = f.getFullYear() + "-" + this.zfill(f.getMonth() +1, 2) + "-" + this.zfill(f.getDate(), 2);
                    me.form.TipoDocumentoRetira = '1';
                }else{
                    alert("No se encontró ningun envío");

                }
            });
        },
        getBySend(){
            let me = this;
            axios.get('https://exurcompras.com/getCodeSend.php?send_code='+(me.form.CodEnvio ? me.form.CodEnvio : 'null')).then(response => {
                let res = Array.isArray(response.data.Envio) ? response.data.Envio : [ response.data.Envio ];
                if(res[0]){
                    me.options = res;
                    me.form = res[0];
                    let f = new Date();
                    me.form.FechaRetira = f.getFullYear() + "-" + this.zfill(f.getMonth() +1, 2) + "-" + this.zfill(f.getDate(), 2);
                    me.form.TipoDocumentoRetira = '1';
                }else{
                    alert("No se encontró ningun envío");
                }
            });
        }
    }
}
</script>
