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
</head>
<body>

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
            <span class="style5"><img src="http://signature.courierplus.net/images/logo/logo.png" alt=""> </span>
        </div>

        <div class="right">
            <div align="right">
                <span class="style2">AWB</span><br />
                <span class="style5">{{ $paquetes->id_paquete }}</span>
            </div>
        </div>
        <div class="clear"></div>
	</div>
    <div style="border-bottom: solid 1px #000000; padding-bottom:8px; padding-top:10px;">
	    <div class="left">
            <span class="style2">Remitente:</span><br />
            <span class="style5">{{ $resp->Remitente }}</span>
        </div>
        <div align="right">
            <span class="style2">Destinatario:</span>:<br />
                {{ $resp->NombreCliente }}
        </div>
        <div class="clear"></div>
    </div>
    <div style="border-bottom: solid 1px #000000; padding-bottom:8px; padding-top:10px;">
        <div class="left" style="width:5cm;">
            <span class="style2">Agencia origen:</span><br />
            <span class="style5">{{ $resp->AgenciaOrigen }}</span>
        </div>
        <div align="right">
            <span class="style2">Agencia destino</span><br />
            <span class="style5">{{ $resp->AgenciaDestino }}</span>
        </div>

        <div class="clear"></div>
    </div>
    <div style="border-bottom: solid 1px #000000; padding-bottom:8px; padding-top:10px;">
        <div class="left" style="width:5cm;">
            <span class="style2">Peso:</span><br />
            <span class="style5">{{ $resp->Peso  }} </span>
        </div>

        <div align="right">
            <span class="style2">Ubicación</span><br />
            <span class="style5">Alto: {{ $resp->Ubicacion }}</span>
        </div>

        <div class="clear"></div>
    </div>

    <div style="border-bottom: solid 1px #000000; padding-bottom:8px; padding-top:10px;">

        <div style="text-align: left;">
            <img src="data:image/gif;base64,{{ $paquetes->firma }}" width="150px" alt=""><br>
            {{ $resp->NombreCliente }} - {{ $resp->NroDocumento }}
        </div>
        <div class="clear"></div>
    </div>
  <div class="clear"> </div>
  <div id="conten" style="width:10cm; margin-top:7px; padding-bottom:7px; height:30px;" >
  <h1 style="margin: 0; text-align: center;">

  </h1>

  </div>
</div><p>
<div class="saltopagina"></div>




</body>
</html>
