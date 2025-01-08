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
        Schema::create('credit', function (Blueprint $table) {
            $table->integer('credit_id', true);
            $table->string('studID', 200)->nullable();
            $table->integer('subID')->nullable();
            $table->string('grade', 200)->nullable();
            $table->string('gpoint', 200)->nullable();
            $table->string('school', 200)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('credit');
    }
};
