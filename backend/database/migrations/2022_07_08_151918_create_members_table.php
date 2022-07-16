<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->string("slug")->unique();
            $table->string("name");
            $table->enum("gender", ["male", "female"]);
            $table->date("birthday");
            $table->string("phone")->nullable();
            $table->string("phone2")->nullable();
            $table->boolean("tither");
            $table->foreignId('role_id')->constrained();
            $table->foreignId('church_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('members');
    }
};
