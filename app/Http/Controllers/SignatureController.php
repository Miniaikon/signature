<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Signature;
use Auth;
use stdClass;

class SignatureController extends Controller
{
    public function entregar(Request $request){
        $item = Signature::create([
            'id_cliente' => $request->cliente,
            'id_paquete' => $request->envio,
            'firma' => $request->imagen,
            'comentario' => $request->comentario
        ]);
    }

    public function entregados(){
        $items = Signature::get();
        return response()->json($items);
    }

    public function getClient($id){
        $url = "https://148.72.153.90:8080/WsEntregasUes/WsEntregasUes.asmx?wsdl";

        $options = array(
            'login' => 'WSExurClientesUser',
            'password' => 'Prueba.WS2019',
        );

        try {
            $client = new \SoapClient($url, $options);
            $result = $client->Mostrar_envios_para_entregar_en_agente(['unCodCliente'=>$id, 'unCodAgencia' => 1]);

            $cliente = simplexml_load_string($result->Mostrar_envios_para_entregar_en_agenteResult);


            return response()->json($cliente);
        } catch ( \SoapFault $e ) {
            echo $e->getMessage();
        }


        echo PHP_EOL;
    }

    public function enviarPaquetes(Request $request){

        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => "https://exurcompras.com/proccessSend.php",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => "unaListaEnvios=".$request->unaListaEnvios."&unaFirma=".urlencode($request->unaFirma)."&unCodTipoDocumento=".$request->unCodTipoDocumento."&unNroDocumento=".$request->unNroDocumento."&unNombreClienteRetira=".$request->unNombreClienteRetira."&unCodUsuarioModif=".$request->unCodUsuarioModif."",
        CURLOPT_HTTPHEADER => array(
            "Content-Type: application/x-www-form-urlencoded"
        ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        $res = json_decode($response);

        if(isset($res->Mensaje) && $res->Mensaje->Mensaje != "OK")
            return response()->json($res->Mensaje->Mensaje, 412);

        $envios = explode('|', $request->unaListaEnvios);

        for($i = 0; $i < count($envios); $i++){
            $item = Signature::create([
                'id_cliente' => $request->unNroDocumento,
                'id_paquete' => $envios[$i],
                'firma' => $request->unaFirma,
                'comentario' => 'asdasdds',
            ]);
        }

        return response()->json('Hola',200);
    }

    public function printPackage($ids){


        $envios = explode('|', $ids);
        $datos = [];

        for($i = 0; $i < count($envios); $i++){
            $paquetes = Signature::where('id_paquete', $envios[$i])->orderBy('id', 'desc')->first();

            $curl = curl_init();

            curl_setopt_array($curl, array(
            CURLOPT_URL => "https://exurcompras.com/ExurController.php",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => "method=PendientesPorEnvio&search=$envios[$i]",
            CURLOPT_HTTPHEADER => array(
                    "Authorization: Bearer 67ac2b5faf2c0513ccfa2000f769d905",
                    "Content-Type: application/x-www-form-urlencoded"
                ),
            ));

            $response = curl_exec($curl);

            curl_close($curl);
            $res = json_decode($response);

            if(isset($res->Mensaje) && $res->Mensaje->Mensaje != "OK")
                return response()->json($res->Mensaje->Mensaje, 412);

            $resp = is_array($res->Envio) ? $res->Envio[0] : $res->Envio ;

            $objeto = new stdClass();
            $objeto->id_paquete = $envios[$i];
            $objeto->Remitente = $resp->Remitente;
            $objeto->NombreCliente = $resp->NombreCliente;
            $objeto->AgenciaOrigen = $resp->AgenciaOrigen;
            $objeto->AgenciaDestino = $resp->AgenciaDestino;
            $objeto->Peso = $resp->Peso;
            $objeto->Ubicacion = $resp->Ubicacion;
            $objeto->firma = $paquetes->firma;
            $objeto->NroDocumento = $resp->NroDocumento;

            $datos[] = $objeto;


        }




        return view('tag', compact('datos'));


    }

    public function EnviosPendientes(Request $request){

        $method = '';
        if($request->type == 1){
            $method = 'PendientesPorCliente';
        }else if($request->type == 2){
            $method = 'PendientesPorDocumento';
        }else if($request->type == 3){
            $method = 'PendientesPorEnvio';
        }

        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => "https://exurcompras.com/ExurController.php",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => "method=$method&search=$request->search",
        CURLOPT_HTTPHEADER => array(
                "Authorization: Bearer 67ac2b5faf2c0513ccfa2000f769d905",
                "Content-Type: application/x-www-form-urlencoded"
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        $res = json_decode($response);

        if(isset($res->Mensaje) && $res->Mensaje->Mensaje != "OK")
            return response()->json($res->Mensaje->Mensaje, 412);

        return response()->json($res, 200);

    }
}
