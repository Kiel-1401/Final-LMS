<?php


namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Studrec;

class StudrecSeeder extends Seeder
{
    public function run()
    {
        Studrec::all()->each(function ($student) {
            $student->update([
                'password' => Hash::make('defaultpassword') // Set a default password
            ]);
        });
    }
}
