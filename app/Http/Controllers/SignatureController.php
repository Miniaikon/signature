<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Signature;

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
}
