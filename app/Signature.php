<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Signature extends Model
{
    protected $table = 'signatures';
    protected $fillable = [
        'id_agencia',
        'id_cliente',
        'id_paquete',
        'firma',
        'comentario',
        'envio',
        'remitente',
        'destinatario',
        'tipo_servicio',
        'agencia_origen',
        'agencia_destino',
        'numero_pcs',
        'peso',
        'ubicacion',
        'nombre',
        'cedula',
        'fecha_entrega'
    ];
}
