<?php

namespace App\Http\Controllers;

use App\Http\Resources\MemberCollection;
use App\Http\Resources\MemberResource;
use App\Models\Member;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    public function list()
    {
        return MemberResource::collection(Member::all()->loadMissing('user'));
    }

    public function get(Request $request)
    {
        $request->validate([
            "id" => "required|exists,members,id"
        ]);
    }
}
