<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;  // Make sure to import the Role model
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Find the Admin role from the roles table
        $adminRole = Role::where('name', 'Admin')->first();

        if ($adminRole) {
            // Create a user and assign the Admin role
            User::create([
                'name' => 'User Account',
                'email' => 'user@gmail.com',
                'password' => Hash::make('!p@ssword123'),
                'role_id' => $adminRole->id, // Assign the Admin role ID to the user
            ]);
        } else {
            // Handle case if the role is not found (optional)
            echo "Admin role not found.";
        }
    }
}
