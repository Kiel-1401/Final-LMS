<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Login extends Model
{
    use HasFactory;

    protected $table = 'login';

    protected $primaryKey = 'loginID';

    public $incrementing = true;
    
    protected $keyType = 'integer';

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
        'email', // Add email to fillable if needed
    ];

    /**
     * Define the relationship with the Role model.
     */
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function schedules()
    {
        return $this->hasMany(Scheduling::class, 'loginID', 'loginID');
    }
}
