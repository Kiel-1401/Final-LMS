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
        if (!Schema::hasTable('scheduling')) {
            Schema::create('scheduling', function (Blueprint $table) {
                $table->string('schedcodeID', 200)->primary();
                $table->integer('loginID')->nullable()->index('PCY');
                $table->integer('subblockedID')->nullable();
                $table->time('start')->nullable();
                $table->time('end')->nullable();
                $table->string('day', 200)->nullable();
                $table->string('room', 200)->nullable();
                $table->integer('maxstud')->nullable();
                $table->integer('stat')->default(0);
                $table->timestamp('dtencode')->nullable();
                $table->timestamp('dtSubmit')->nullable();
                $table->timestamp('dtLock')->nullable();
                $table->integer('stat_teach')->default(0);
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasTable('scheduling')) {
            Schema::dropIfExists('scheduling');
        }
    }
};
