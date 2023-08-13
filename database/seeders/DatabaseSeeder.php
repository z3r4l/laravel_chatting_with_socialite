<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        collect([
            [
                'name'  => 'admin 123',
                'email' => 'admin@gmail.com',
                'password' => bcrypt('123'),
                'username'  => 'admin'
            ],
            [
                'name'  => 'zery aldi',
                'email' => 'zeral@gmail.com',
                'password' => bcrypt('123'),
                'username'  => 'zeral'
            ],
        ])->each(fn($user)=> User::create($user));
        \App\Models\User::factory(10)->create();
    }
}
