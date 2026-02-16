<?php

namespace Authorization\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use User\Models\User;

class TelegramContact extends Model
{
    protected $fillable = [
        'telegram_id',
        'phone',
        'user_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
