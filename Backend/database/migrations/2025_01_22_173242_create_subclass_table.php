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
        if (!Schema::hasTable('subclass')) {
            Schema::create('subclass', function (Blueprint $table) {
                $table->integer('subclassID', true);
                $table->string('SubclassName', 200)->nullable();
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
        if (Schema::hasTable('subclass')) {
            Schema::dropIfExists('subclass');
        }
    }
};
