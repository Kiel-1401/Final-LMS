<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::firstOrCreate(
            ['email' => 'dh@example.com'], // Condition to check existing record
            [
                'name' => 'Department Head',
                'password' => Hash::make('password123'),
                'role_id' => 3,
            ]
        );

        User::firstOrCreate(
            ['email' => 'instuctor@gmail.com'],
            [
                'name' => 'Instructor',
                'password' => Hash::make('password123'),
                'role_id' => 2,
            ]
        );

        User::firstOrCreate(
            ['email' => 'student@gmail.com'],
            [
                'name' => 'Student',
                'password' => Hash::make('password123'),
                'role_id' => 4,
            ]
        );
    }
}
