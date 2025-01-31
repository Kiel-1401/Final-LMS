<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
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
            // Check if the user already exists by email
            $existingUser = User::where('email', 'user@gmail.com')->first();

            if (!$existingUser) {
                // Create a user and assign the Admin role if not found
                User::create([
                    'name' => 'User Account',
                    'email' => 'user@gmail.com',
                    'password' => Hash::make('!p@ssword123'),
                    'role_id' => $adminRole->id, // Assign the Admin role ID to the user
                ]);
            } else {
                // Optionally update the user data if needed
                $existingUser->update([
                    'name' => 'User Account', // Update name or any other field
                    'password' => Hash::make('!p@ssword123'), // Optionally update password
                ]);
            }
        } else {
            // Handle case if the role is not found
            echo "Admin role not found.";
        }
    }
}
