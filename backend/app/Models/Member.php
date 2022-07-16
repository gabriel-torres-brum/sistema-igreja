<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "slug",
        "gender",
        "birthday",
        "phone",
        "phone2",
        "tither",
        "role_id",
        "church_id",
    ];

    protected $casts = [
        "birthday" => "date:Y-m-d"
    ];

    public function addresses()
    {
        return $this->hasMany(Address::class);
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function church()
    {
        return $this->belongsTo(Church::class);
    }

    public function user()
    {
        return $this->hasOne(User::class);
    }
}
