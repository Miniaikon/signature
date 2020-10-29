<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>



<style type="text/css">

body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
	font-family:Arial, Helvetica, sans-serif;
	font-size:14px;

}
.content {
	width:10cm;
	min-height: 15.50cm;
	margin:auto;
	margin-top:20px;
}
.left {
	float:left;
}
.right {
	float:right;
}
.warehouse_number {
	width:10cm;
	text-align:center;
	float:left;
}
.clear { clear: both; height: 0px; }
.style2 {
	font-size: 20px;
	/*font-weight: bold;*/
}
.style5 {font-size: 16px; font-weight: bold; }

.style4 {font-size: 14px; }

.style6 {font-size: 15px; font-weight: bold; }

ul li#t_01{
	text-decoration: none;
	list-style: none;
}

  @media all {
   .saltopagina{
      display: none;
   }
}

@media print{
   .saltopagina{
      display:block;
      page-break-before:always;
   }
}
</style>
<!-- <script type="text/javascript" src="js/jquery-1.4.4.min.js"></script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script language="javascript">
        $(function(){
            $("#print").click(function(){
                $("#conten").css("display","none");
                print();
                $("#conten").css("display","block");
            });
        });
    </script>

    <script src="{{ asset('zip/WebContent/zip.js') }}"></script>
    <script src="{{ asset('zip/WebContent/zip-ext.js') }}"></script>
    <script src="{{ asset('zip/WebContent/deflate.js') }}"></script>
    <script src="{{ asset('node_modules/jsprintmanager/JSPrintManager.js') }}"></script>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script src="{{ asset('bluebird.min.js') }}"></script>
    <script src="{{ asset('jquery-3.2.1.slim.min.js') }}"></script>
    <!-- https://github.com/niklasvh/html2canvas/releases/download/v1.0.0-rc.5/html2canvas.min.js -->
    <script src="{{ asset('html2canvas.js') }}"></script>

</head>
<body>

    <div id="PrintLabel">
        @foreach($datos as $item)

        <div class="content">
            <div style="border-bottom: solid 1px #000000; padding-bottom:10px;">
                <div style="text-align: center;"  class="center">
                    <ul style="padding: 0px; margin: 0px;" class="box">
                        <li id="t_01">
                            <img src="{{ asset('assets/images/logo-light.png') }}" alt="">
                        </li>
                    </ul>
                </div>
                <!--   <div class="center" style="text-align:center;">Casillero express Usa - 3509 nw 115 Ave,<br />
                Doral FL 33178 USA - Tel. (305)-591-8361</div> -->
                <div class="clear"></div>
            </div>
            <div style="border-bottom: solid 1px #000000; padding-bottom:6px; padding-top:10px;">
                <div class="left">
                    <span class="style5"><img src="data:image/png;base64,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" alt=""> </span>
                </div>

                <div class="right">
                    <div align="right">
                        <span class="style2">AWB</span><br />
                        <span class="style5">{{ $item->id_paquete }}</span>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <div style="border-bottom: solid 1px #000000; padding-bottom:8px; padding-top:10px;">
                <div class="left">
                    <span class="style2">Remitente:</span><br />
                    <span class="style5">{{ $item->Remitente }}</span>
                </div>
                <div align="right">
                    <span class="style2">Destinatario:</span>:<br />
                        {{ $item->NombreCliente }}
                </div>
                <div class="clear"></div>
            </div>
            <div style="border-bottom: solid 1px #000000; padding-bottom:8px; padding-top:10px;">
                <div class="left" style="width:5cm;">
                    <span class="style2">Agencia origen:</span><br />
                    <span class="style5">{{ $item->AgenciaOrigen }}</span>
                </div>
                <div align="right">
                    <span class="style2">Agencia destino</span><br />
                    <span class="style5">{{ $item->AgenciaDestino }}</span>
                </div>

                <div class="clear"></div>
            </div>
            <div style="border-bottom: solid 1px #000000; padding-bottom:8px; padding-top:10px;">
                <div class="left" style="width:5cm;">
                    <span class="style2">Peso:</span><br />
                    <span class="style5">{{ $item->Peso  }} </span>
                </div>

                <div align="right">
                    <span class="style2">Ubicación</span><br />
                    <span class="style5">Alto: {{ $item->Ubicacion }}</span>
                </div>

                <div class="clear"></div>
            </div>

            <div style="border-bottom: solid 1px #000000; padding-bottom:8px; padding-top:10px;">

                <div style="text-align: left;">
                    <img src="data:image/gif;base64,{{ $item->firma }}" width="150px" alt=""><br>
                    {{ $item->NombreCliente }} - {{ $item->NroDocumento }}
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"> </div>
        </div><p>
        @endforeach
    </div>

    <div style="text-align: center;" id="content-print" style="">
        <p id="MessagePrint">Buscando Impresora</p>
        <div id="select-print" style="display: none;">
            <label class="checkbox">
                <input type="checkbox" id="useDefaultPrinter" /> <strong>Print to Default printer</strong>
            </label>
            <p>or...</p>
            <div id="installedPrinters">
                <label for="installedPrinterName">Select an installed Printer:</label>
                <select name="installedPrinterName" id="installedPrinterName" style="height: 38px;font-size: 14px;"></select>
            </div>
            <br /><br />
            <button type="button" onclick="print(1);" style="width: 200px;font-size: 16px;">Print Now...</button>
        </div>
    </div>
    <div id="contenedorCanvas"></div>

    <script>
        var PrintName = "ExurPrint";
        var isExistPrint = false;
        //WebSocket settings
        JSPM.JSPrintManager.auto_reconnect = true;
        JSPM.JSPrintManager.start();
        JSPM.JSPrintManager.WS.onStatusChanged = function () {
            if (jspmWSStatus()) {
                JSPM.JSPrintManager.getPrinters().then(function (myPrinters) {
                    var options = '';
                    for (var i = 0; i < myPrinters.length; i++) {
                        if(myPrinters[i] == PrintName){
                            isExistPrint = true;
                            document.querySelector("#select-print").style.display = "none";
                            options += '<option selected>' + myPrinters[i] + '</option>';
                        }else{
                            options += '<option>' + myPrinters[i] + '</option>';
                        }
                    }
                    $('#installedPrinterName').html(options);
                }).then(function () {
                    if(isExistPrint){
                        document.querySelector("#MessagePrint").innerHTML = "El Label se enviara en <span id='countdowntimer'>10</span> Segundos"
                        print(0);
                    }else{
                        document.querySelector("#MessagePrint").innerHTML = "Impresora no encontrada selecione manualmente"
                        document.querySelector("#select-print").style.display = "block";
                    }
                });
            }
        };

        //Check JSPM WebSocket status
        function jspmWSStatus() {
            if (JSPM.JSPrintManager.websocket_status == JSPM.WSStatus.Open)
                return true;
            else if (JSPM.JSPrintManager.websocket_status == JSPM.WSStatus.Closed) {
                alert('JSPrintManager (JSPM) is not installed or not running! Download JSPM Client App from https://neodynamic.com/downloads/jspm');
                return false;
            }
            else if (JSPM.JSPrintManager.websocket_status == JSPM.WSStatus.Blocked) {
                alert('JSPM has blocked this website!');
                return false;
            }
        }

        function print(value) {
            if(isExistPrint){
                let timeleft = 5;
                let downloadTimer = setInterval(function(){
                    timeleft--;
                    document.getElementById("countdowntimer").textContent = timeleft;
                    if(timeleft <= 0){
                        clearInterval(downloadTimer);
                        document.querySelector("#content-print").style.display = "none";
                        CallPrintJs(value);
                    }
                },1000);
            }else if(value == 1){
                CallPrintJs(value);
            }
        }

        function CallPrintJs(value){
            if (jspmWSStatus()) {
                $contenedorCanvas = document.querySelector("#contenedorCanvas");
                html2canvas(document.querySelector("#PrintLabel")).then(function (canvas) {
                    // $contenedorCanvas.appendChild(canvas);
                    let cpj = new JSPM.ClientPrintJob();
                    if(value == 0){
                        cpj.clientPrinter = new JSPM.InstalledPrinter(PrintName);
                    }else{
                        if ($('#useDefaultPrinter').prop('checked')) {
                            cpj.clientPrinter = new JSPM.DefaultPrinter();
                        } else {
                            cpj.clientPrinter = new JSPM.InstalledPrinter($('#installedPrinterName').val());
                        }
                    }
                    var b64Prefix = "data:image/png;base64,";
                    var imgBase64DataUri = canvas.toDataURL("image/png");
                    var imgBase64Content = imgBase64DataUri.substring(b64Prefix.length, imgBase64DataUri.length);
                    var myImageFile = new JSPM.PrintFile(imgBase64Content, JSPM.FileSourceType.Base64, 'myFileToPrint.png', 1);
                    cpj.files.push(myImageFile);
                    cpj.sendToClient();
                });
            }
        }
    </script>

</body>
</html>
