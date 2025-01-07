<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blocking extends Model
{
    use HasFactory;

    // Specify the table name
    protected $table = 'blocking';

    // Specify the primary key
    protected $primaryKey = 'blockID';

    // Indicate whether the primary key is auto-incrementing
    public $incrementing = true;

    // Specify the primary key type
    protected $keyType = 'integer';

    // Disable timestamps since the table does not have `created_at` and `updated_at` columns
    public $timestamps = false;

    // Define the fillable attributes for mass assignment
    protected $fillable = [
        'session',
        'yearlvl',
        'schedcodeID',
        'courseID',
        'class',
    ];

    /**
     * Define the relationship with the Scheduling model.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function schedule()
    {
        return $this->belongsTo(Scheduling::class, 'schedcodeID', 'schedcodeID');
    }

    /**
     * Define the relationship with the Course model.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function course()
    {
        return $this->belongsTo(Course::class, 'courseID', 'courseID');
    }
}
