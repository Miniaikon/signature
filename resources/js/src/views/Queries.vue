<template>
	<vs-row vs-align="center" vs-type="flex" vs-justify="space-around" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="top" class="pr-1" vs-w="5">
            <vs-card>
                <div slot="header">
                    <h3>
                    Consultar envios
                    </h3>
                </div>
                <div>
                    <vs-col vs-type="flex" vs-w="4" class="p-1">
                        <label for="">Nro. Cliente</label>
                    </vs-col>
                     <vs-col vs-type="flex" vs-w="8" class="p-1">
                        <vs-input class="inputx" style="width: 100%;" v-model="form.CodCliente" placeholder="Nro. Cliente" />
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
                        <label for="">Nro. de Documento</label>
                    </vs-col>
                    <vs-col vs-type="flex" vs-w="8" class="p-1">
                        <vs-input class="inputx" style="width: 100%;" placeholder="" v-model="form.NroDocumento" />
                    </vs-col>
                    <!-- Other -->
                    <vs-col vs-type="flex" vs-justify="center" vs-w="6" class="p-1">
                         <vs-button color="primary" v-on:click="makeQuery()">Buscar</vs-button>
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="center" vs-w="6" class="p-1">
                         <vs-button color="warning" v-on:click="init()">Nueva busqueda</vs-button>
                    </vs-col>
                    <vs-row>
                    </vs-row>
                </div>
            </vs-card>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" class="pr-1" vs-w="7">
            <vs-card>


            </vs-card>
        </vs-col>
        <!-- <vs-col vs-type="flex" vs-justify="center" vs-align="center" class="pr-1" vs-w="8">
            <vs-card class="cardx">
                <div slot="header">
                    <h3>Consultar envíos</h3>
                </div>
                <div>
                    <form action="">
                        <vs-col vs-type="flex" vs-w="6" class="p-1">
                            <input class="vs-inputx vs-input--input normal" v-model="form.search" placeholder="Dato a buscar" />
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="6" class="p-1">
                            <select name="" v-model="form.type" class="vs-inputx vs-input--input normal" >
                                <option value="1">Codigo de cliente</option>
                                <option value="2">Número de documento</option>
                                <option value="3">Número de envío</option>
                            </select>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="12" class="p-1">
                            <vs-button color="primary" style="width: 100%;" v-on:click="makeQuery()">Buscar</vs-button>
                        </vs-col>
                    </form>
                </div>
            </vs-card>
        </vs-col> -->
        <vs-col vs-type="flex" class="pl-1" vs-w="12">

             <vs-row v-if="items.length">
                <vs-col vs-type="flex" class="pl-1" vs-w="12" vs-justify="center" vs-align="center">
                    <h3>Todos los envíos</h3>
                </vs-col>
                <template v-for="item in items">
                    <vs-col vs-type="flex" class="pl-1" vs-w="4">
                        <vs-card  vz-color="danger" class="" v-bind:class="{'danger-color':item.Pago == '0'}">
                            <div slot="header">
                                <h3>{{ item.CodEnvio }}</h3>
                            </div>
                            <div>
                                <ul>
                                    <li><b>AWB:</b> {{ item.CodEnvio }} </li>
                                    <li><b>Fecha generado:</b> {{ item.FechaModif }} </li>
                                    <li><b>Remitente:</b> {{ item.Remitente }} </li>
                                    <li><b>Agencia de origen:</b> {{ item.AgenciaOrigen }} </li>
                                    <li><b>Destinatario:</b> {{ item.NombreCliente }} </li>
                                    <li><b>Agencia de destino:</b> {{ item.AgenciaDestino }} </li>
                                </ul><br>
                                <h5>Detalle del envío</h5>
                                <ul>
                                    <li><b>Forma de pago:</b> {{ item.MedioPago }} </li>
                                    <li><b>Peso:</b> {{ item.Peso }} </li>
                                    <li><b>Importe:</b> {{ item.ImporteFlete }} </li>
                                    <li><b>Estado del envio:</b> {{ item.Estado }} </li>
                                </ul>
                            </div>

                        </vs-card>
                    </vs-col>
                </template>
            </vs-row>


        </vs-col>
    </vs-row>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      url: window.location.host+'/',
      form: {
          search: null,
          type: 1,
          NroDocumento: null,
          CodCliente: null,
          CodEnvio: null
      },
      options: []
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
                    // this.loadData();
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
        init(){
            let me = this;
            this.form = {
                'imagen': '',
                'id_cliente': '',
                'id_paquete': '',
                'comentario': ''
            };
            this.verifyAuth();
            me.items = [];
        },
        makeQuery(){
            let me = this;

            if(me.form.CodCliente){
                me.form.search = me.form.CodCliente;
                me.form.type = 1;
            }else if(me.form.CodEnvio){
                me.form.search = me.form.CodEnvio;
                me.form.type = 3;
            }else if(me.form.NroDocumento){
                me.form.search = me.form.NroDocumento;
                me.form.type = 2;
            }
            axios.post('/api/get-envios-pendientes', this.form).then(res => {
                let resp = Array.isArray(res.data.Envio) ? res.data.Envio : [ res.data.Envio ];
                console.log(resp);
                me.items = resp;
            }).catch(err => {
                alert(err.response.data);
            });
        }
    }
}
</script>
