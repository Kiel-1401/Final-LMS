<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class MigrateStudrecToUsersSeeder extends Seeder
{
    public function run()
    {
        // Fetch all records from studrec
        $students = DB::table('studrec')->get();
    
        foreach ($students as $student) {
            // Ensure email is valid and use the student's email for login
            $email = $student->email;
            if ($email === '-' || empty($email)) {
                // If no valid email, set a dummy one (optional; you may choose to handle this differently)
                $email = $student->studID . '@student.sicc';
            }
    
            // Check if the email already exists in the users table
            $user = DB::table('users')->where('email', $email)->first();
    
            if ($user) {
                // Check if any data needs updating (e.g., if the studID, name, or role differs)
                $userUpdated = false;
    
                // Update the user's name or role_id if necessary
                if ($user->studID !== $student->studID) {
                    DB::table('users')->where('email', $email)->update(['studID' => $student->studID]);
                    $userUpdated = true;
                }
    
                if ($user->role_id !== ($student->role_id ?? 4)) {
                    DB::table('users')->where('email', $email)->update(['role_id' => $student->role_id ?? 4]);
                    $userUpdated = true;
                }
    
                if ($user->name !== "{$student->fname} {$student->lname}") {
                    DB::table('users')->where('email', $email)->update(['name' => "{$student->fname} {$student->lname}"]);
                    $userUpdated = true;
                }
    
                // Optionally log if the user was updated
                if ($userUpdated) {
                    echo "User {$email} updated.\n";
                }
            } else {
                // Insert the student record into the users table with the updated password generation
                DB::table('users')->insert([
                    'name'      => "{$student->fname} {$student->lname}",
                    'email'     => $email,
                    'password' => Hash::make($student->studID . 'SICC'), // New password format
                    'studID'    => $student->studID,
                    'role_id'   => $student->role_id ?? 4, // Default role for students
                    'created_at'=> now(),
                    'updated_at'=> now(),
                ]);
            }
        }
    }
    }    