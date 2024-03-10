<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Str;

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

    public function setTaskAttribute($value)
    {
        $this->attributes['task'] = Str::title($value);
    }

    public function getDateAttribute($value)
    {
        return Carbon::parse($value)->format('d F Y');
    }
}
