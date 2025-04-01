<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Chirp extends Model
{
    protected $fillable = [
        'message',
    ];

    // this is the inverse of the "has many" relationship that we created in the User model
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
