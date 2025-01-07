<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubBlockedSeq extends Model
{
    use HasFactory;

    // The table associated with the model
    protected $table = 'subblockedseq';

    // The primary key for the table
    protected $primaryKey = 'subblockedID';

    // Indicates if the IDs are auto-incrementing
    public $incrementing = true;

    // The data type of the primary key
    protected $keyType = 'integer';

    // Indicates if the model should be timestamped
    public $timestamps = false;

    // The attributes that are mass assignable
    protected $fillable = [
        'seq',
        'year',
        'sem',
        'subID',
        'courseID',       //wala pa nabuhatan model
        'subclassid',
    ];

    // Add relationships if needed, e.g., belongsTo, hasMany
    // Example:
    public function subject()
    {
        return $this->hasMany(Subject::class, 'subID');
    }

    public function subclass ()
    {
        return $this->hasMany(SubClass::class, 'subclassid');
    }

    public function course()
{
    return $this->belongsTo(Course::class, 'courseID', 'courseID');
}

}
