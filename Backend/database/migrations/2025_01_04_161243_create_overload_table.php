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
        Schema::create('overload', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('teach_quali', 200)->nullable();
            $table->string('info_name', 200)->nullable();
            $table->integer('rate')->nullable();
            $table->integer('unit')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('overload');
    }
};
