<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Signature extends Model
{
    protected $table = 'signatures';
    protected $fillable = [
        'id_cliente',
        'firma',
        'comentario'
    ];
}
