<?php

namespace Database\Seeders;

use App\Models\Member;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            "username" => "gabriel",
            "email" => "gabriel@gmail.com",
            "password" => Hash::make("1234"),
            "admin" => false,
            "member_id" => Member::all()->first()->id
        ]);
        
        User::factory()->create([
            "username" => "admin",
            "email" => "admin@gmail.com",
            "password" => Hash::make("1234"),
            "admin" => true,
        ]);
    }
}
