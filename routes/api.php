<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::post('/entregar', 'SignatureController@entregar')->name('signature.entregar');

Route::get('/entregados', 'SignatureController@entregados')->name('signature.entregados');

Route::get('/getClient/{id}', 'SignatureController@getClient')->name('get.client');

Route::post('/enviar', 'SignatureController@enviarPaquetes')->name('signature.enviar');

Route::post('/get-envios-pendientes', 'SignatureController@EnviosPendientes')->name('signature.EnviosPendientes');

Route::get('/get-envios-procesados/{id}', 'SignatureController@ObtenerEnvios')->name('signature.EnviosProcesados');

Route::get('test', function(){
    return view('test');
});
