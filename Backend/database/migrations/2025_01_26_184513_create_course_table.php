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
        if (!Schema::hasTable('course')) {
            Schema::create('course', function (Blueprint $table) {
                $table->integer('courseID');
                $table->string('cname', 200)->nullable();
                $table->integer('loginID')->nullable();
                $table->string('av', 100)->nullable();
                $table->string('cmo')->nullable();
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
        if (Schema::hasTable('course')) {
            Schema::dropIfExists('course');
        }
    }
};
