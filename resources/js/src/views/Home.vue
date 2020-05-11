<template>
	<vs-row vs-align="center" vs-type="flex" vs-justify="space-around" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" class="pr-1" vs-w="5">
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
                        <vs-col vs-type="flex" vs-w="4" class="p-1">
                            <vs-input class="inputx" v-model="form.CodEnvio" placeholder="Nro. Envío" />
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
                            <vs-input class="inputx" v-model="form.NombreCliente" placeholder="Nombre" />
                        </vs-col>
                    </vs-row>
                </div>
            </vs-card>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" class="pl-1" vs-w="7">
            <vs-card>
                <div slot="header">
                    <h3>
                        Datos de quien retira
                    </h3>
                </div>
                <div>
                    <vs-row>
                        <vs-col vs-w="9" class="pr-2">
                            <vs-row>
                                <vs-col vs-type="flex" vs-w="2" class="pb-1">
                                    <label for="">Fecha</label>
                                </vs-col>
                                <vs-col vs-type="flex" vs-w="5" class="pb-1">
                                    <input type="date" class="vs-inputx vs-input--input normal">
                                </vs-col>
                                <vs-col vs-type="flex" vs-justify="center" vs-w="5" class="pb-1 pl-3">
                                    <vs-button color="primary" style="width: 100%;">Retira Cliente</vs-button>
                                </vs-col>
                            </vs-row>
                            <!-- other -->
                            <vs-row>
                                <vs-col vs-type="flex" vs-w="2" class="pb-1">
                                    <label for="">Documento</label>
                                </vs-col>
                                <vs-col vs-type="flex" vs-w="5" class="pb-1">
                                    <select name="" class="vs-inputx vs-input--input small" v-model="form.TipoDocumentoRetira">
                                        <option value="1">C.I</option>
                                        <option value="2">RUT</option>
                                        <option value="3">PASAPORTE</option>
                                        <option value="4">NIFE</option>
                                        <option value="5">OTROS</option>
                                        <option value="6">DNI</option>
                                    </select>
                                </vs-col>
                                <vs-col vs-type="flex" vs-w="5" class="pb-1 pl-3">
                                    <vs-input class="inputx" v-model="form.NroDocumentoRetira" />
                                </vs-col>
                            </vs-row>
                            <!-- Other -->
                            <vs-row>
                                <vs-col vs-type="flex" vs-w="2" class="pb-1">
                                    <label for="">Nombre</label>
                                </vs-col>
                                <vs-col vs-type="flex" vs-w="10" class="pb-1">
                                    <vs-input class="inputx block" style="width: 100%;" v-model="form.NombreRetira" />
                                </vs-col>
                            </vs-row>
                            <vs-row>
                                <vs-col vs-type="flex" vs-w="2" class="p-1">
                                    <vs-col vs-type="flex" vs-w="12" class="p-1">
                                        <label for="">Firma</label>
                                    </vs-col>
                                </vs-col>
                                <vs-col vs-w="10">
                                    <vs-button style="width: 100%;" v-on:click.prevent="sig()">Firmar</vs-button>
                                </vs-col>
                            </vs-row>
                        </vs-col>
                        <vs-col vs-w="3" class="p-1">
                            <vs-button color="success" @click.prevent="send()">Registrar entrega</vs-button>
                            <center class="pt-1">
                                <vs-button color="danger">Cancelar</vs-button>
                            </center>
                            <vs-col vs-type="flex" vs-w="12" class="p-1">
                                <img  id="img_sig" width="100%" style="height: 90px; border: 1px solid #ccc; border-radius: 10px;" alt="">
                            </vs-col>
                        </vs-col>
                    </vs-row>

                </div>

            </vs-card>
        </vs-col>
        <vs-col vs-type="flex" class="pl-1" vs-w="12">

            <vs-row v-if="options.length">
                <vs-col vs-type="flex" class="pl-1" vs-w="12" vs-justify="center" vs-align="center">
                    <h3>Todos los envíos</h3>
                </vs-col>
                <template v-for="item in options">
                    <vs-col vs-type="flex" class="pl-1" vs-w="4">
                        <vs-card>
                            <div slot="header">
                                <h3>{{ item.CodEnvio }}</h3>
                            </div>
                            <div>
                                <ul>
                                    <li><b>Documento:</b> {{ item.Estado }} </li>
                                    <li><b>Cantidad de piezas:</b> {{ item.CantidadPiezas }} </li>
                                    <li><b>Codigo de Movimiento:</b> {{ item.CodMovimiento }} </li>
                                    <li><b>Ubicación:</b> {{ item.Ubicacion }} </li>
                                    <li><b>Estado:</b> {{ item.Estado }} </li>
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
            },
            options: [

            ],
            modals: {
                option: false
            }
        }
    },
    mounted(){
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
            this.form = {
                'imagen': '',
                'id_cliente': '',
                'id_paquete': '',
                'comentario': ''
            };
            this.loadData();
        },
        searchClient(){
            let me = this;

            axios.get('http://exurcompras.com/getPaquetes.php?id_cliente='+me.form.CodCliente).then(response => {
                let res = Array.isArray(response.data.Envio) ? response.data.Envio : [ response.data.Envio ];
                me.options = res;
                me.form = res[0];
                console.log('options', typeof me.option);
            });
        },
        send(){
            let me = this;
            let listaEnvio = me.options.reduce((count, item) => {
                return count.CodEnvio + '|'+ item.CodEnvio;
            });
            let data = {
                unaListaEnvios: me.options.length>1 ? listaEnvio: listaEnvio.CodEnvio,
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
                };
                alert('Paquetes procesados con éxito');
            }).catch(err => {
                alert(err.response.data);
            });

            console.log(data);
        }
    }
}
</script>
