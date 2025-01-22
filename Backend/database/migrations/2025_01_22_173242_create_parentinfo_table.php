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
        Schema::create('parentinfo', function (Blueprint $table) {
            $table->string('pidstudid', 200)->primary();
            $table->string('guardian', 200)->nullable();
            $table->string('gconnum', 200)->nullable();
            $table->integer('is_extracted')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('parentinfo');
    }
};
