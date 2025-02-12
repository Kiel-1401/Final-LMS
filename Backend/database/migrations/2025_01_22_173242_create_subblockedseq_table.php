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
        if (!Schema::hasTable('subblockedseq')) {
            Schema::create('subblockedseq', function (Blueprint $table) {
                $table->integer('subblockedID', true);
                $table->integer('seq')->nullable();
                $table->string('year', 10)->nullable();
                $table->string('sem', 10)->nullable();
                $table->integer('subID')->nullable();
                $table->integer('courseID')->nullable();
                $table->integer('subclassid')->default(1);
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
        if (Schema::hasTable('subblockedseq')) {
            Schema::dropIfExists('subblockedseq');
        }
    }
};
