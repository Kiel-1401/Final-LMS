<?php


namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class MigrateStudrecToUsersSeeder extends Seeder
{
    public function run()
    {
        // Fetch all records from studrec
        $students = DB::table('studrec')->get();

        foreach ($students as $student) {
            // Ensure email is unique and valid
            $email = $student->email;
            if ($email === '-' || empty($email)) {
                $email = $student->studID . '@example.com'; // Generate a dummy unique email
            }

            // Check if the email already exists in the users table
            if (DB::table('users')->where('email', $email)->exists()) {
                continue; // Skip duplicates
            }

            // Insert the student record into the users table
            DB::table('users')->insert([
                'name'      => "{$student->fname} {$student->lname}",
                'email'     => $email,
                'password'  => Hash::make('default_password_' . $student->studID), // Default hashed password with studID
                'studID'    => $student->studID,
                'role_id'   => $student->role_id ?? 4, // Default role for students
                'created_at'=> now(),
                'updated_at'=> now(),
            ]);
        }
    }
}
