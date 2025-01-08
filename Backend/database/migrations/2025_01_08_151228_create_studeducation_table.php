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
        Schema::create('studeducation', function (Blueprint $table) {
            $table->string('studID_id', 100)->primary();
            $table->string('JH', 200)->nullable();
            $table->string('yrJH', 200)->nullable();
            $table->string('SH', 200)->nullable();
            $table->string('yrSH', 200)->nullable();
            $table->string('trackStrand', 10)->default('0');
            $table->string('report_card', 10)->nullable()->default('0');
            $table->string('good_moral', 10)->nullable()->default('0');
            $table->string('birth_cert', 10)->nullable()->default('0');
            $table->string('picture', 10)->nullable()->default('0');
            $table->string('hon_dis', 10)->default('0');
            $table->string('info_copy', 10)->default('0');
            $table->string('transfer_cred', 10)->default('0');
            $table->string('completion_dip', 10)->default('0');
            $table->string('marriage_cert', 10)->default('0');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('studeducation');
    }
};
