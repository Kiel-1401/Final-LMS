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
        // Check if the 'login' table exists before modifying it
        if (Schema::hasTable('login') && !Schema::hasColumn('login', 'role_id')) {
            Schema::table('login', function (Blueprint $table) {
                $table->foreignId('role_id')->nullable()->constrained('roles')->onDelete('set null');
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
        // Ensure the 'login' table exists before modifying it
        if (Schema::hasTable('login')) {
            Schema::table('login', function (Blueprint $table) {
                if (Schema::hasColumn('login', 'role_id')) {
                    $table->dropForeign(['role_id']);
                    $table->dropColumn('role_id');
                }
            });
        }
    }
};
