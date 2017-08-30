<?php

namespace App\Http\Controllers;

use App\Http\Requests\UsersRequest;
use App\User;
use App\Users;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Input;

class UsersController extends Controller
{
    public function allUsers(Request $request, Response $response) {
        $users = Users::all();
        return response()->json(compact('users'));
    }

    public function addUser(UsersRequest $request, Response $response) {
        $user = new Users;
        $user->firstname = $request->firstname;
        $user->lastname = $request->lastname;
        $user->username = $request->username;
        $user->birthday = $request->birthday === null ? null : $request->birthday;
        $user->age = gettype($request->age) == 'integer' ? $request->age : null;
        $user->admin = 0;
        $user->save();
        return response()->json(compact('user'));
    }

    public function deleteUser (Request $request) {
        $delete = Users::destroy($request->id);
        return $delete === 1 ? $request->id : "false";
    }
}
