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
        Schema::create('form2', function (Blueprint $table) {
            $table->string('studID', 200)->primary();
            $table->integer('lab')->default(0);
            $table->integer('comlab')->default(0);
            $table->integer('totunit')->default(0);
            $table->integer('nstp')->default(0);
            $table->float('tui', 10, 0)->default(0);
            $table->float('nstptui', 10, 0)->default(0);
            $table->float('at', 10, 0)->default(0);
            $table->float('comfee', 10, 0)->default(0);
            $table->float('cul', 10, 0)->default(0);
            $table->float('dev', 10, 0)->default(0);
            $table->float('ad', 10, 0)->default(0);
            $table->float('en', 10, 0)->default(0);
            $table->float('gu', 10, 0)->default(0);
            $table->float('handbook', 10, 0)->default(0);
            $table->float('labs', 10, 0)->default(0);
            $table->float('lib', 10, 0)->default(0);
            $table->float('med', 10, 0)->default(0);
            $table->float('reg', 10, 0)->default(0);
            $table->float('id', 10, 0)->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('form2');
    }
};
