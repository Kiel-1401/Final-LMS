<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Login extends Model
{
    use HasFactory;

    protected $fillable = [
        'full',
        'deg',
        'usr',
        'rnk',
        'pass',
        'overloadID',
        'overloadone',
        'stat_emp',
        'unitEarned',
        'stat',
        'role_id', // Add role_id to fillable if needed
    ];

    /**
     * Define the relationship with the Role model.
     */
    public function role()
    {
        return $this->belongsTo(Role::class);
    }
}
