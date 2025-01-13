<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Login;
use App\Models\Role;

class LoginSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Fetch roles
        $departmentHeadRole = Role::where('name', 'Program Head')->first();
        $instructorRole = Role::where('name', 'Instructor')->first();

        // Check if roles exist
        if (!$departmentHeadRole || !$instructorRole) {
            $this->command->error('Roles not found in the database.');
            return;
        }

        // Define specific loginIDs for Department Head
        $departmentHeadIDs = [8, 7, 248, 6, 141]; // Replace with actual loginIDs

        // Assign roles
        Login::chunk(100, function ($logins) use ($departmentHeadIDs, $departmentHeadRole, $instructorRole) {
            foreach ($logins as $login) {
                if (in_array($login->loginID, $departmentHeadIDs)) {
                    // Assign Department Head role
                    $login->role_id = $departmentHeadRole->id;
                } else {
                    // Assign Instructor role
                    $login->role_id = $instructorRole->id;
                }
                $login->save();
            }
        });
    }
}
