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
                        <vs-button color="success">Registrar Entrega</vs-button>
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
      users: [],
      url: 'http://'+window.location.host+'/',
      newPrealerta: false,
      form: {
      },
      formPart: 1,
    }
  },
  mounted(){
      this.loadData();
  },
  methods: {
      loadData(){
          axios.get(this.url+'api/pre-alerta').then(response => {
              this.users = response.data;
              console.log(response);
          });
      },
      formSubmit(){
        axios.post(this.url+'api/prealerta', formData,{ headers: { 'Content-Type': 'multipart/form-data' } }).then(response => {
            console.log('hecho');
            this.loadData();
        });
      },
      sig(){
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
                this.form.imagen = obj.imageData;
                // document.querySelector('#imageCode').value = obj.imageData;
                //Process the response
            }
      },
      getImage(e){
          let file = e.target.files;
          console.log(file);
          this.form.images = file;
      }
  }
}
</script>
