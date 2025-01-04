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
        Schema::create('blocking', function (Blueprint $table) {
            $table->integer('blockID', true);
            $table->string('session', 200)->nullable();
            $table->string('yearlvl', 200)->nullable();
            $table->string('schedcodeID', 200)->nullable();
            $table->integer('courseID')->nullable();
            $table->string('class', 200)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blocking');
    }
};
