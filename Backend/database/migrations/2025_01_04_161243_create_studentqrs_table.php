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
        Schema::create('studentqrs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('studentId');
            $table->string('qrcode');
            $table->integer('is_active')->default(1);
            $table->string('parentsEmail')->nullable();
            $table->timestamps();
            $table->integer('is_ext_lcl')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('studentqrs');
    }
};
