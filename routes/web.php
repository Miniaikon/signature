<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any}', 'ApplicationController')->where('any', '^(?!auth).*$');

Route::prefix('auth')->group(function(){
    Route::post('login', 'LoginController@login');
    Route::get('who-am-i', function(){
        if(Auth::user()){
            return response()->json(true, 200);
        }
        return response()->json(false, 200);
    })->middleware('auth');

    Route::get('logout', function() {
        Auth::logout();
    });

    Route::get('/imprimir-envio/{id}', 'SignatureController@printPackage')->name('signature.printPackage');

});

Route::prefix('factura')->group(function () {
    // Route::get()
});

