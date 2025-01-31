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
            // Drop any existing foreign key constraints if they exist
            $table->dropForeign(['role_id']);
            // Drop any existing indexes if they exist
            $table->dropIndex(['role_id']);

            // Add the foreign key constraint again
            $table->foreign('role_id')->references('id')->on('roles')->onDelete('CASCADE');
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
            // Drop the foreign key constraint
            $table->dropForeign(['role_id']);
        });
    }
};
