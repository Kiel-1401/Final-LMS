<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('login', function (Blueprint $table) {
            // Update the 'email', 'password', and 'rnk' fields
            $table->string('email')->nullable()->default('default@sicc.edu')->change();
            $table->string('password')->nullable()->change();
            $table->string('rnk')->nullable()->change();
        });
    }

    public function down()
    {
        Schema::table('login', function (Blueprint $table) {
            // Revert changes if needed
            $table->string('email')->nullable(false)->default(null)->change();
            $table->string('password')->nullable(false)->change();
            $table->string('rnk')->nullable(false)->change();
        });
    }
};
