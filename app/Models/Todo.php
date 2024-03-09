<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $fillable = [
        'task',
        'status',
        'date',
    ];

    protected $casts = [
        'date' => 'date',
    ];
}