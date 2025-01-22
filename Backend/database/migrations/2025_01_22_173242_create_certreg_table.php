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
        Schema::create('certreg', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('studID', 200)->nullable()->index('PCX');
            $table->string('schedcodeID', 200)->nullable()->index('schedcodeID');
            $table->integer('loginID')->nullable();
            $table->string('Session', 200)->nullable();
            $table->string('grade', 200)->nullable();
            $table->string('remarks', 200)->nullable();
            $table->string('gpoint', 200)->nullable();
            $table->timestamp('dateregs')->nullable();
            $table->string('ctrl_no', 200)->nullable();
            $table->integer('inc_stat')->default(0);
            $table->timestamp('inc_in')->nullable();
            $table->timestamp('inc_fin')->nullable();
            $table->integer('drp')->default(0);
            $table->integer('FHECheck')->default(0);
            $table->integer('FHEtrach')->default(1);
            $table->string('classer', 200)->default('-');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('certreg');
    }
};
