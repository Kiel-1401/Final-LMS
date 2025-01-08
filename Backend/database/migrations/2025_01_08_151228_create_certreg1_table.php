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
        Schema::create('certreg1', function (Blueprint $table) {
            $table->integer('id')->primary();
            $table->string('studID', 200)->nullable();
            $table->string('schedcodeID', 200)->nullable();
            $table->string('Session', 200)->nullable();
            $table->string('datereg', 200)->nullable();
            $table->string('encoded', 200)->nullable();
            $table->string('grade', 200)->nullable();
            $table->string('remarks', 200)->nullable();
            $table->string('gpoint', 200)->nullable();
            $table->string('exam', 100)->nullable();
            $table->string('performance', 100)->nullable();
            $table->string('o_requirement', 100)->nullable();
            $table->string('total', 200)->nullable();
            $table->string('date_issued', 200)->nullable();
            $table->string('stat', 200)->nullable()->default('\'\'1\'\'');
            $table->integer('is_extracted')->default(0);
            $table->string('ctrl_no', 200)->nullable();
            $table->string('stat_no_grade', 10)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('certreg1');
    }
};
