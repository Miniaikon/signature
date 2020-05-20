<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;

class LoginController extends Controller
{
    public function login(Request $request){
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {

            $codigoUsuario = $this->loginUser(Auth::user()->name, $request->password);

            // Authentication passed
            return response()->json($codigoUsuario, 200);
        }else{
            return response()->json(false, 412);
        }
    }

    public function loginUser($name, $pass){
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://exurcompras.com/getCodeUser.php",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => "username=$name&password=$pass",
            CURLOPT_HTTPHEADER => array(
                "Content-Type: application/x-www-form-urlencoded"
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        return (int)$response;

    }
}
