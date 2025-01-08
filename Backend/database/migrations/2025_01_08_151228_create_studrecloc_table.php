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
        Schema::create('studrecloc', function (Blueprint $table) {
            $table->string('studID', 200)->primary();
            $table->string('lname', 200)->nullable();
            $table->string('fname', 200)->nullable();
            $table->string('mname', 200)->nullable();
            $table->string('gender', 100)->nullable()->index('gender');
            $table->string('status', 100)->nullable();
            $table->string('rega', 200)->nullable();
            $table->string('tria', 200)->nullable();
            $table->string('birthdate', 200)->nullable();
            $table->string('nationality', 200)->nullable();
            $table->string('placeofbirth', 200)->nullable();
            $table->string('cnumber', 200)->nullable();
            $table->integer('brgyID')->nullable();
            $table->integer('courseID')->nullable();
            $table->string('ex', 50)->nullable();
            $table->string('yrStanding', 200)->nullable();
            $table->string('prk', 50)->nullable();
            $table->string('lrn', 200)->nullable()->default('-');
            $table->string('email', 200)->nullable()->default('-');
            $table->integer('is_extracted')->default(0);
            $table->string('guardian', 200)->nullable();
            $table->string('gconnum', 200)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('studrecloc');
    }
};
