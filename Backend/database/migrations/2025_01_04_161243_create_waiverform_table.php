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
        Schema::create('waiverform', function (Blueprint $table) {
            $table->string('COL 1', 30)->nullable();
            $table->string('COL 2', 13)->nullable();
            $table->string('COL 3', 19)->nullable();
            $table->string('COL 4', 14)->nullable();
            $table->string('COL 5', 90)->nullable();
            $table->string('COL 6', 4)->nullable();
            $table->string('COL 7', 24)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('waiverform');
    }
};
