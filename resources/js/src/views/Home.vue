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
                        <vs-input class="inputx" placeholder="Nro. Cliente" />
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="center" vs-w="4" class="p-1">
                         <vs-button color="primary">Buscar</vs-button>
                    </vs-col>
                    <!-- other -->
                    <vs-row>
                        <vs-col vs-type="flex" vs-w="4" class="p-1">
                            <label for="">Nro. Envío</label>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="4" class="p-1">
                            <vs-input class="inputx" placeholder="Nro. Envío" />
                        </vs-col>
                    </vs-row>
                    <!-- other -->
                    <vs-col vs-type="flex" vs-w="4" class="p-1">
                        <label for="">Documento</label>
                    </vs-col>
                    <vs-col vs-type="flex" vs-w="4" class="p-1">
                        <select name="" class="vs-inputx vs-input--input normal" id="">
                            <option value="C.I">C.I</option>
                        </select>
                    </vs-col>
                    <vs-col vs-type="flex" vs-w="4" class="p-1">
                        <vs-input class="inputx" placeholder="" />
                    </vs-col>
                    <!-- Other -->
                    <vs-row>
                        <vs-col vs-type="flex" vs-w="4" class="p-1">
                            <label for="">Nombre / Apellido</label>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="4" class="p-1">
                            <vs-input class="inputx" placeholder="Nombre" />
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="4" class="p-1">
                            <vs-input class="inputx" placeholder="Apellido" />
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
                        <vs-col vs-type="flex" vs-w="2" class="pb-5">
                            <label for="">Fecha</label>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="3" class="pb-5">
                            <vs-input class="inputx" placeholder="Fecha" />
                        </vs-col>
                        <vs-col vs-type="flex" vs-justify="center" vs-w="4" class="pb-5">
                            <vs-button color="primary">Retira Cliente</vs-button>
                        </vs-col>
                        <vs-col vs-type="flex" vs-justify="center" vs-w="3" class="pb-5">

                            <vs-button color="success" class=" ml-3">Registrar Entrega</vs-button>
                        </vs-col>
                    </vs-row>
                    <!-- other -->
                    <vs-row>
                        <vs-col vs-type="flex" vs-w="2" class="pb-5">
                            <label for="">Documento</label>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="3" class="pb-5">
                            <select name="" class="vs-inputx vs-input--input normal" id="">
                                <option value="C.I">C.I</option>
                            </select>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="4" class="pb-5 pl-3">
                            <vs-input class="inputx" placeholder="" />
                        </vs-col>
                        <vs-col vs-type="flex" vs-justify="center" vs-w="3" class="pb-5">

                            <vs-button color="warning" class=" ml-3">Cancelar</vs-button>
                        </vs-col>
                    </vs-row>
                    <!-- Other -->
                    <vs-row>
                        <vs-col vs-type="flex" vs-w="2" class="pb-5">
                            <label for="">Nombre</label>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="7" class="pb-6">
                            <vs-input class="inputx block" placeholder="Nombre" />
                        </vs-col>
                        <vs-col vs-type="flex" vs-justify="center" vs-w="3" class="pb-5">

                            <vs-button color="danger" class=" ml-3">Salir</vs-button>
                        </vs-col>
                    </vs-row>
                    <vs-row>
                        <!-- other -->
                        <vs-col vs-type="flex" vs-w="2" class="p-1">
                            <label for="">Firma</label>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="2" class="p-1" vs-justify="center" vs-align="center">
                            <vs-button v-on:click.prevent="sig()">Firmar</vs-button>
                        </vs-col>
                        <vs-col vs-type="flex" vs-w="8" class="p-1">
                            <img  id="img_sig" width="100%" style="height: 100px; border: 1px solid black; border-radius: 10px;" alt="">
                        </vs-col>
                    </vs-row>
                </div>

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
      this.loadData();
  },
  methods: {
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
      }
  }
}
</script>
