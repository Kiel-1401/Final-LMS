<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    // Specify the table name
    protected $table = 'course';

    // Specify the primary key
    protected $primaryKey = 'courseID';

    // Indicate whether the primary key is auto-incrementing
    public $incrementing = true;

    // Specify the primary key type
    protected $keyType = 'integer';

    // Disable timestamps since the table does not have `created_at` and `updated_at` columns
    public $timestamps = false;

    // Define the fillable attributes for mass assignment
    protected $fillable = [
        'cname',
        'loginID',
        'av',
        'cmo',
    ];

    /**
     * Define the relationship with the Login model.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function login()
    {
        return $this->belongsTo(Login::class, 'loginID', 'loginID');
    }

    /**
     * Define the relationship with the Blocking model.
     * 
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function blockings()
    {
        return $this->hasMany(Blocking::class, 'courseID', 'courseID');
    }

    public function students()
    {
        return $this->hasMany(Studrec::class, 'courseID', 'courseID');
    }
}
