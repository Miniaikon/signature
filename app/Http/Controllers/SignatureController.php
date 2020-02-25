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
}
