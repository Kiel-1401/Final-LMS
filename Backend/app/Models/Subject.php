<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;

    // Specify the table name if it doesn't follow Laravel's naming convention
    protected $table = 'subject';

    // Specify the primary key
    protected $primaryKey = 'subID';

    // Indicate whether the primary key is auto-incrementing
    public $incrementing = true;

    // Specify the primary key type
    protected $keyType = 'integer';

    // Disable timestamps since the table does not have `created_at` and `updated_at` columns
    public $timestamps = false;

    // Define the fillable attributes for mass assignment
    protected $fillable = [
        'code',
        'description',
        'lec',
        'lab',
        'total',
        'subclassID',
    ];

    /**
     * Define the relationship with the Subclass model.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
     public function subclass()
     {
        return $this->belongsTo(Subclass::class, 'subclassID', 'subclassID'); // Replace 'id' with the primary key column of the `subclass` table
     }

     public function subBlockedSeq()
{
    return $this->hasMany(SubBlockedSeq::class, 'subID', 'subID');
}
}
