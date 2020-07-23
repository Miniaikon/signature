<template>
	<vs-row vs-align="center" vs-type="flex" vs-justify="space-around" vs-w="12">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" class="pr-1" vs-w="8">
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
        </vs-col>
        <vs-col vs-w="12" class="mt-10">
            <vs-card>
                <vs-table pagination max-items="20" search :data="items">
                    <template slot="header">
                        <h3>
                        Entregados
                        </h3>
                    </template>
                    <template slot="thead">
                        <vs-th sort-key="CodEnvio">
                        # Envio
                        </vs-th>
                        <vs-th sort-key="CodCliente">
                        # Cliente
                        </vs-th>
                        <vs-th sort-key="NroDocumento">
                        # Documento
                        </vs-th>
                        <vs-th sort-key="CodMovimiento">
                        # Movimiento
                        </vs-th>
                        <vs-th sort-key="CantidadPiezas">
                        Piezas
                        </vs-th>
                        <vs-th sort-key="FechaModif">
                        Fecha
                        </vs-th>
                        <vs-th sort-key="NombreMedioPago">
                        Medio de pago
                        </vs-th>
                        <vs-th sort-key="NombreCliente">
                        Nombre
                        </vs-th>
                        <vs-th sort-key="AgenciaOrigen">
                        Origen
                        </vs-th>
                        <vs-th sort-key="AgenciaDestino">
                        Destino
                        </vs-th>
                        <vs-th sort-key="Estado">
                        Estado
                        </vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
                            <vs-td :data="data[indextr].CodEnvio">
                                {{data[indextr].CodEnvio}}
                            </vs-td>

                            <vs-td :data="data[indextr].CodCliente">
                                {{data[indextr].CodCliente}}
                            </vs-td>

                            <vs-td :data="data[indextr].NroDocumento">
                                {{data[indextr].NroDocumento}}
                            </vs-td>

                            <vs-td :data="data[indextr].CodMovimiento">
                                {{data[indextr].CodMovimiento}}
                            </vs-td>

                            <vs-td :data="data[indextr].CantidadPiezas">
                                {{data[indextr].CantidadPiezas}}
                            </vs-td>

                            <vs-td :data="data[indextr].FechaModif">
                                {{data[indextr].FechaModif}}
                            </vs-td>

                            <vs-td :data="data[indextr].NombreMedioPago">
                                {{data[indextr].NombreMedioPago}}
                            </vs-td>

                            <vs-td :data="data[indextr].NombreCliente">
                                {{data[indextr].NombreCliente}}
                            </vs-td>

                            <vs-td :data="data[indextr].AgenciaOrigen">
                                {{data[indextr].AgenciaOrigen}}
                            </vs-td>

                            <vs-td :data="data[indextr].AgenciaDestino">
                                {{data[indextr].AgenciaDestino}}
                            </vs-td>

                            <vs-td :data="data[indextr].Estado">
                                {{data[indextr].Estado}}
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
      url: window.location.host+'/',
      form: {
          search: null,
          type: 1,
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
            this.form = {
                'imagen': '',
                'id_cliente': '',
                'id_paquete': '',
                'comentario': ''
            };
            this.verifyAuth();
        },
        makeQuery(){
            let me = this;
            axios.post('/api/get-envios-pendientes', this.form).then(res => {
                let resp = Array.isArray(res.data.Envio) ? res.data.Envio : [ res.data.Envio ];
                console.log(resp);
                me.items = resp;
            });
        }
    }
}
</script>
