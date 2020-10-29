<template>
	<vs-row vs-align="center" vs-type="flex" vs-justify="space-around" vs-w="12">
        <vs-col vs-w="12" class="mt-10">
            <vs-card>
                <vs-table pagination max-items="15" search :data="items">
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
                        <vs-th sort-key="firma">
                            Firma
                        </vs-th>
                        <vs-th sort-key="created_at">
                            Fecha
                        </vs-th>
                        <vs-th>
                            Imprimir
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

                            <vs-td :data="data[indextr].firma">
                                <img :src="'data:image/gif;base64,'+data[indextr].firma" style="height: 64px" alt="">
                            </vs-td>

                            <vs-td :data="data[indextr].created_at">
                                {{data[indextr].created_at}}
                            </vs-td>

                            <vs-td>
                                <a :href="'/auth/imprimir-envio/'+data[indextr].id_paquete" class="vs-component vs-button vs-button-success vs-button-filled" target="_blank">Imprimir</a>
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
        url: window.location.host+'/',
        items: [],
    }
  },
  mounted(){
      this.getEnvios();
  },
  methods: {
      getEnvios(){
          let me = this;
          axios.get('/api/get-envios-procesados').then(res => {
              me.items = res.data;
          });
      }
  }
}
</script>
