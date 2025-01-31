<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class MigrateLoginDataSeeder extends Seeder
{
    /**
     * Run the seeder.
     *
     * @return void
     */
    public function run()
    {
        // Retrieve all records from the `login` table
        $logins = DB::table('login')->get();

        foreach ($logins as $login) {
            // Generate the default email
            $email = $login->usr . $login->loginID . '@sicc.edu';

            // Update the `login` table's email column
            DB::table('login')
                ->where('loginID', $login->loginID)
                ->update(['email' => $email]);

            // Check if the email already exists in the `users` table
            $existingUser = DB::table('users')->where('email', $email)->first();

            if ($existingUser) {
                // Update the `users` table if necessary
                DB::table('users')
                    ->where('email', $email)
                    ->update([
                        'name' => $login->full,
                        'password' => Hash::make($login->loginID . 'ONESICC'), // Default password
                        'role_id' => $login->role_id ?? 1, // Assign a default role if not present
                        'updated_at' => now(),
                    ]);
            } else {
                // Insert a new record in the `users` table
                DB::table('users')->insert([
                    'name' => $login->full,
                    'email' => $email,
                    'password' => Hash::make( $login->loginID . 'ONESICC'), // Default password
                    'role_id' => $login->role_id ?? 1, // Default role
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }

        echo "Seeder executed successfully.\n";
    }
}
