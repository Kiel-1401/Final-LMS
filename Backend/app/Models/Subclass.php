<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subclass extends Model
{
    use HasFactory;

    // Specify the table name if it doesn't follow Laravel's naming convention
    protected $table = 'subclass';

    // Specify the primary key
    protected $primaryKey = 'subclassID';

    // Indicate whether the primary key is auto-incrementing
    public $incrementing = true;

    // Specify the primary key type
    protected $keyType = 'integer';

    // Disable timestamps since the table does not have `created_at` and `updated_at` columns
    public $timestamps = false;

    // Define the fillable attributes for mass assignment
    protected $fillable = [
        'SubclassName',
    ];

    /**
     * Define the relationship with the Subject model.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function subjects()
    {
        return $this->hasMany(Subject::class, 'subclassID', 'subclassID');
    }
}
