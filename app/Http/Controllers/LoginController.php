<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

use Auth;
use Hash;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $codigoUsuario = $this->loginUser($request->email, $request->password);

        dd($codigoUsuario);

        if ($codigoUsuario) {
            $user = User::where('email', $request->email)->first();
            if ($user === null) {
                $user = new User();
                $user->id = $codigoUsuario;
                $user->email = $request->email;
                $user->name = $request->email;
                $user->password = Hash::make($request->password);
                $user->save();
            }

            Auth::login($user, true);
            if (Auth::check()) {
                return response()->json($codigoUsuario, 200);
            }
            return response()->json($codigoUsuario, 500);
        }

        return response()->json($codigoUsuario, 500);
    }

    public function loginUser($name, $pass)
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "http://entregas.exurenvios.com/getCodeUser.php",
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
        return $response;
    }
}
