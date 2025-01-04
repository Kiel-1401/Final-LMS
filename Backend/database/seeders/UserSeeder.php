<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        {

           

    
            // You can add more users as needed
            User::create([
                'name' => 'Depatment Head',
                'email' => 'dh@example.com',
                'password' => Hash::make('password123'),
                'role_id' => 3,
            ]);
    
            User::create([
                'name' => 'Instructor',
                'email' => 'instuctor@gmail.com',
                'password' => Hash::make('password123'),
                'role_id' => 2,
            ]);
    
            User::create([
                'name' => 'Student',
                'email' => 'student@gmail.com',
                'password' => Hash::make('password123'),
                'role_id' => 4,

            ]);
        }
    }
}
