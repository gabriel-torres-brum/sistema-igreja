<?php

namespace Database\Seeders;

use App\Models\Church;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ChurchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Church::factory()->create([
            "slug" => Str::slug("Assembleia de Deus Ministério Monte Moriá"),
            "church_name" => "Assembleia de Deus Ministério Monte Moriá",
        ]);
    }
}
