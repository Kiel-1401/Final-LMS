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
        // Retrieve only necessary columns from the `login` table
        $logins = DB::table('login')->select('loginID', 'usr', 'full', 'role_id')->get();

        foreach ($logins as $login) {
            // Generate the default email
            $email = $login->usr . $login->loginID . '@sicc.edu';

            // Update the `login` table's email column
            DB::table('login')
                ->where('loginID', $login->loginID)
                ->update(['email' => $email]);

            // **Ensure we don't overwrite the admin account**
            if ($email !== 'user@gmail.com') {
                DB::table('users')->updateOrInsert(
                    ['email' => $email], // Check existing email
                    [
                        'name' => $login->full,
                        'password' => Hash::make($login->loginID . 'ONESICC'), // Default password
                        'role_id' => $login->role_id ?? 1, // Default role
                        'updated_at' => now(),
                    ]
                );
            }
        }

        echo "Seeder executed successfully.\n";
    }
}
