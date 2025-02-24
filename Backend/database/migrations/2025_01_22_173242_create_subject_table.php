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
        if (!Schema::hasTable('subject')) {
            Schema::create('subject', function (Blueprint $table) {
                $table->integer('subID', true);
                $table->string('code', 200)->nullable();
                $table->string('description', 200)->nullable();
                $table->integer('lec')->nullable();
                $table->integer('lab')->nullable();
                $table->integer('total')->nullable();
                $table->integer('subclassID')->nullable();
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
        if (Schema::hasTable('subject')) {
            Schema::dropIfExists('subject');
        }
    }
};
