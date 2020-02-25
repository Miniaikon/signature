<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaquetesSig extends Model
{
    protected $table = 'paquetes_sigs';
    protected $fillable = [
        'id_paquete',
        'id_sig'
    ];
}
