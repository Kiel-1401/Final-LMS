<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class LoginPasswordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Update all rows in the login table to include a default email and password
        DB::table('login')->update([
            'email' => 'default@example.com', // Default email for all rows
            'password' => Hash::make('inst2024'), // Default hashed password for all rows
        ]);
    }
}
