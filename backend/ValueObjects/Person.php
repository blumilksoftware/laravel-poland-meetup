<?php

declare(strict_types=1);

namespace LaravelPolandMeetup\ValueObjects;

use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class Person
{
    public readonly string $slug;

    public function __construct(
        public readonly string $id,
        public readonly string $name,
        public readonly ?string $image = null,
        public readonly ?string $bio = null,
        public readonly ?string $linkedin = null,
        public readonly Collection $meetups = new Collection(),
    ) {
        $this->slug = Str::slug($this->name);
    }


    public function toListedEntry(): array
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "image" => $this->image,
            "bio" => $this->bio,
            "slug" => $this->slug,
            "linkedin" => $this->linkedin,
            "avatar" => "https://ui-avatars.com/api/?background=random&font-size=.33&size-128&rounded=true&name=" . str_replace(" ", "-", $this->name),
        ];
    }

    public function toMeetupListEntry()
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "image" => $this->image,
            "bio" => $this->bio,
            "slug" => $this->slug,
            "linkedin" => $this->linkedin,
            "avatar" => "https://ui-avatars.com/api/?background=random&font-size=.33&size-128&rounded=true&name=" . str_replace(" ", "-", $this->name),
        ];
    }
}
