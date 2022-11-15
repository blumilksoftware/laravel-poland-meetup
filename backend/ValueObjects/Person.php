<?php

declare(strict_types=1);

namespace LaravelPolandMeetup\ValueObjects;

use Illuminate\Support\Collection;

class Person
{
    public function __construct(
        public readonly string $name,
        public readonly Collection $meetups = new Collection(),
    ) {}

    public function toListedEntry(): array
    {
        return [
            "name" => $this->name,
        ];
    }

    public function toMeetupListEntry()
    {
        return [
            "name" => $this->name,
            "avatar" => "https://ui-avatars.com/api/?background=random&font-size=.33&size-128&rounded=true&name=" . $this->name,
        ];
    }
}
