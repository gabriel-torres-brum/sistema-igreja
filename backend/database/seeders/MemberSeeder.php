<?php

namespace Database\Seeders;

use App\Models\Church;
use App\Models\Member;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class MemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Member::factory()->create([
            "slug" => Str::slug("Gabriel Torres Brum"),
            "name" => "Gabriel Torres Brum",
            "gender" => "male",
            "birthday" => "1999-04-01",
            "phone" => "(21) 96676-3047",
            "phone2" => "(21) 99594-6757",
            "tither" => true,
            "role_id" => Role::all()->first()->id,
            "church_id" => Church::all()->first()->id
        ]);
    }
}
