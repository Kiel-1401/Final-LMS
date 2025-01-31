<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\Studrec;
use App\Models\User;
use Illuminate\Database\Seeder;

class AssignStudentRoleSeeder extends Seeder
{
    public function run()
    {
        $studentRole = Role::where('name', 'Student')->first();

        // Check if the student role exists
        if ($studentRole) {
            // Update users with studID and assign them the 'Student' role
            Studrec::all()->each(function ($student) use ($studentRole) {
                // Find the user associated with the student by email
                $user = User::where('email', $student->email)->first(); // Match via email or modify this as needed

                if ($user) {
                    // Check if there are any changes needed before updating
                    $userUpdated = false;

                    // Update only if studID or role_id is different
                    if ($user->studID !== $student->studID || $user->role_id !== $studentRole->id) {
                        $user->update([
                            'studID' => $student->studID,
                            'role_id' => $studentRole->id,
                        ]);
                        $userUpdated = true;
                    }

                    // Optionally log if the user was updated
                    if ($userUpdated) {
                        echo "User {$user->email} updated.\n";
                    }
                }

                // Check if the role_id is different in the studrec table before updating
                if ($student->role_id !== $studentRole->id) {
                    $student->update(['role_id' => $studentRole->id]);
                }
            });
        } else {
            echo "Student role not found.\n";
        }
    }
}
