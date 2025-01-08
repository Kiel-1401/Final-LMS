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
        Schema::create('login', function (Blueprint $table) {
            $table->integer('loginID', true);
            $table->string('full', 200)->nullable();
            $table->string('deg', 200)->nullable();
            $table->string('usr', 200);
            $table->string('rnk', 200);
            $table->string('pass', 200);
            $table->integer('overloadID')->default(1);
            $table->integer('overloadone')->nullable()->default(1);
            $table->integer('stat_emp')->nullable()->default(0);
            $table->integer('unitEarned')->nullable()->default(0);
            $table->integer('stat')->default(0);
            $table->unsignedBigInteger('role_id')->nullable()->index('login_role_id_foreign');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('login');
    }
};
