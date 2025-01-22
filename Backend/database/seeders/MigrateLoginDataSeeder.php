<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class MigrateLoginDataSeeder extends Seeder
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function run()
    {
        // Retrieve all login data
        $logins = DB::table('login')->get();

        foreach ($logins as $login) {
            // Create the email and password combination
            $email = $login->usr . $login->loginID . '@sicc.edu'; // Adjust domain as needed
            $password = 'Default' . $login->loginID;

            // Insert data into users table
            DB::table('users')->insert([
                'name' => $login->full, // You can adjust this field to fit your logic
                'email' => $email,
                'password' => Hash::make($password), // Hash the generated password
                'role_id' => $login->role_id ?? 1, // Use the login's role_id or default to 1
                'studID' => null, // Adjust if you have a studID value
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
