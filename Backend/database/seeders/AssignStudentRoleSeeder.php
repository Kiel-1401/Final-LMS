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

        // Update users with studID and assign them the 'Student' role
        Studrec::all()->each(function ($student) use ($studentRole) {
            // Assign the studID to the user
            $user = User::where('email', $student->email)->first(); // Match via email or modify this as needed
            if ($user) {
                $user->update([
                    'studID' => $student->studID,
                    'role_id' => $studentRole->id,
                ]);
            }

            // Assign the role_id in the studrec table
            $student->update(['role_id' => $studentRole->id]);
        });
    }
}
