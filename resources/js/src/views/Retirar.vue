<template>
	<vs-row vs-align="center" vs-type="flex" vs-justify="space-around" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" class="pr-1" vs-w="8">
            <vs-card>
                <div slot="header">
                    <h3>
                        Retirar paquete
                    </h3>
                </div>
                <div>
                    <vs-row>
                        <vs-col vs-type="flex" vs-w="4" class="p-1">
                            <label for="">Nro. Cliente</label>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="4" class="p-1">
                            <vs-input class="inputx"  v-model="form.cliente" placeholder="Nro. Cliente" />
                        </vs-col>
                    </vs-row>
                    <!-- other -->
                    <vs-row>
                        <vs-col vs-type="flex" vs-w="4" class="p-1">
                            <label for="">Nro. Envío</label>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="4" class="p-1">
                            <vs-input class="inputx" v-model="form.envio" placeholder="Nro. Envío" />
                        </vs-col>
                    </vs-row>
                    <!-- other -->
                    <vs-col vs-type="flex" vs-w="4" class="p-1">
                        <label for="">Firma</label>
                    </vs-col>
                    <vs-col vs-type="flex" vs-w="2" class="p-1" vs-justify="center" vs-align="center">
                        <vs-button v-on:click.prevent="sig()">Firmar</vs-button>
                    </vs-col>
                    <vs-col vs-type="flex" vs-w="6" class="p-1">
                        <img  id="img_sig" width="100%" style="height: 100px; border: 1px solid black; border-radius: 10px;" alt="">
                    </vs-col>

                    <!-- Other -->
                    <vs-row>
                        <vs-col vs-type="flex" vs-w="4" class="p-1">
                            <label for="">Comentario</label>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="8" class="p-1">
                            <vs-textarea class="inputx" v-model="form.comentario" placeholder="Comentario" />
                        </vs-col>
                    </vs-row>
                    <vs-row class="p-5">
                        <vs-button color="success" v-on:click="formSubmit()">Registrar Entrega</vs-button>
                    </vs-row>
                </div>

            </vs-card>
        </vs-col>
        <vs-col vs-w="12" class="mt-10">
            <vs-card>
                <vs-table pagination max-items="3" search :data="items">
                    <template slot="header">
                        <h3>
                        Entregados
                        </h3>
                    </template>
                    <template slot="thead">
                        <vs-th sort-key="id_paquete">
                        # Paquete
                        </vs-th>
                        <vs-th sort-key="id_cliente">
                        # Cliente
                        </vs-th>
                        <vs-th sort-key="comentario">
                        Comentario
                        </vs-th>
                        <vs-th sort-key="firma">
                        Firma
                        </vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
                            <vs-td :data="data[indextr].id_paquete">
                                {{data[indextr].id_paquete}}
                            </vs-td>

                            <vs-td :data="data[indextr].id_cliente">
                                {{data[indextr].id_cliente}}
                            </vs-td>

                            <vs-td :data="data[indextr].comentario">
                                {{data[indextr].comentario}}
                            </vs-td>

                            <vs-td :data="data[indextr].firma">
                                <img :src="'data:image/gif;base64,'+data[indextr].firma" style="height: 64px" alt="">
                            </vs-td>
                        </vs-tr>
                    </template>
                    </vs-table>
            </vs-card>
        </vs-col>
    </vs-row>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      url: 'https://'+window.location.host+'/',
      form: {
        imagen: '',
      },
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
            this.verifyAuth();
        }
    }
}
</script>
