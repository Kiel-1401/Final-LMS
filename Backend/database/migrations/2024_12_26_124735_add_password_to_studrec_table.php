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
        Schema::table('studrec', function (Blueprint $table) {
            $table->string('password')->nullable(); // Add the password column
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('studrec', function (Blueprint $table) {
            $table->dropColumn('password'); // Drop the password column if rolling back
        });
    }
};
