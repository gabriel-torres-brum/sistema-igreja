<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MemberResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "slug" => $this->slug,
            "name" => $this->name,
            "gender" => $this->gender,
            "birthday" => $this->birthday,
            "phone" => $this->phone,
            "phone2" => $this->phone2,
            "tither" => $this->tither ? "Dizimista" : "Não dizimista",
            "role" => new RoleResource($this->role),
            "church" => new ChurchResource($this->church),
            "user" => new UserResource($this->whenLoaded('user')),
        ];
    }
}
