<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Scheduling extends Model
{
    use HasFactory;

    // Specify the table name
    protected $table = 'scheduling';

    // Specify the primary key
    protected $primaryKey = 'schedcodeID';

    // The primary key is a string, not an integer
    protected $keyType = 'string';

    // The primary key is not auto-incrementing
    public $incrementing = false;

    // Enable timestamps for `dtencode`, `dtSubmit`, and `dtLock` if needed
    public $timestamps = false;

    // Define the fillable attributes for mass assignment
    protected $fillable = [
        'schedcodeID',
        'loginID',
        'subblockedID',
        'start',
        'end',
        'day',
        'room',
        'maxstud',
        'stat',
        'dtencode',
        'dtSubmit',
        'dtLock',
        'stat_teach',
    ];

    /**
     * Define the relationship with the Login model.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function login()
    {
        return $this->belongsTo(Login::class, 'loginID', 'loginID'); // Replace 'loginID' in Login with the actual primary key
    }

    /**
     * Define the relationship with the Subblocked model.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function subblocked()
    {
        return $this->belongsTo(SubBlockedSeq::class, 'subblockedID', 'subblockedID');
    }
}
