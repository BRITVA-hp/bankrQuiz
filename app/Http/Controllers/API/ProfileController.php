<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{
    public function update(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => ['required','string', 'max:255'],
            'email' => ['required','string', 'email', 'max:255'],
            'password' => ['required','string','min:6'],
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $arr = $request->only(['name','email','password']);
        $arr['password'] = Hash::make($arr['password']);


        $user = DB::table('users')->where('id',$request['id'])->update($arr);
        return response()->json(['success' => 'Данные обновлены'], 200);
    }
}
