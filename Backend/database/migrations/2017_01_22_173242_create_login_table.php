<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        // Ensure the 'login' table exists
        if (Schema::hasTable('login')) {
            if (!Schema::hasColumn('login', 'role_id')) {
                Schema::table('login', function (Blueprint $table) {
                    $table->string('email')->nullable()->default('default@sicc.edu')->change();
                    $table->string('password')->nullable()->change(); // Allow NULL for password
                    $table->string('rnk')->nullable()->change(); // Allow NULL for rnk
                });
            } else {
                Schema::table('login', function (Blueprint $table) {
                    $table->foreign('role_id')->references('id')->on('roles')->onDelete('set null');
                    $table->string('email')->default('default@sicc.edu');
                });
            }
        }
    }

    public function down()
    {
        // Drop the 'role_id' column if the 'login' table exists
        if (Schema::hasTable('login')) {
            Schema::table('login', function (Blueprint $table) {
                $table->dropForeign(['role_id']);
                $table->dropColumn('role_id');
            });
        }
    }
};
