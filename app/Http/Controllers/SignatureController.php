<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Signature;
use Auth;

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
        $url = "http://148.72.153.90:8080/WsEntregasUes/WsEntregasUes.asmx?wsdl";

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
        CURLOPT_URL => "http://exurcompras.com/proccessSend.php",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => "unaListaEnvios=".$request->unaListaEnvios."&unaFirma=".$request->unaFirma."&unCodTipoDocumento=".$request->unCodTipoDocumento."&unNroDocumento=".$request->unNroDocumento."&unNombreClienteRetira=".$request->unNombreClienteRetira."&unCodUsuarioModif=".$request->unCodUsuarioModif."",
        CURLOPT_HTTPHEADER => array(
            "Content-Type: application/x-www-form-urlencoded"
        ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        $res = json_encode($response);

        if(isset($res->Mensaje) && $res->Mensaje->CodMensaje == 0)
            return response()->json('El envío que interntas procesar con es correcto', 412);

        return response()->json($res, 201);
    }
}
