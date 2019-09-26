<?php

use Illuminate\Database\Seeder;

class UserRole extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_roles')->insert(['id'=> 1, 'name' => 'Super Admin', 'description' => 'Admin Dashboard']);
        DB::table('user_roles')->insert(['id'=> 2, 'name' => 'Admin', 'description' => 'Admin']);
        DB::table('user_roles')->insert(['id'=> 3, 'name' => 'Manager', 'description' => 'Manager']);
        DB::table('user_roles')->insert(['id'=> 4, 'name' => 'Vendor ', 'description' => 'Vendor admins']);
        DB::table('user_roles')->insert(['id'=> 5, 'name' => 'User ', 'description' => 'users']);
        // DB::table('user_roles')->insert(['id'=> 5, 'name' => 'vendor_user ', 'description' => 'Vendor admins']);
    }
}
