<?php

namespace Database\Seeders;

use App\Models\Address;
use App\Models\Member;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Address::factory()->create([
            "address_name" => "Rua Paraná",
            "number" => "71",
            "adjunct" => "Fundos",
            "district" => "Piedade",
            "city" => "Rio de Janeiro",
            "state" => "RJ",
            "cep" => "20745-250",
            "member_id" => Member::all()->first()->id
        ]);
    }
}
