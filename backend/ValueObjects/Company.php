<?php

declare(strict_types=1);

namespace LaravelPolandMeetup\ValueObjects;

use Illuminate\Support\Collection;

class Company
{
    public function __construct(
        public readonly string $name,
        public readonly string $location,
        public readonly ?string $logo = null,
        public readonly ?string $website = null,
        public readonly ?string $linkedin = null,
        public readonly ?bool $organizer = false,
        public readonly ?string $bio = null,
        public readonly Collection $meetups = new Collection(),
    ) {}

    public function toListedEntry(): array
    {
        return [
            "name" => $this->name,
            "location" => $this->location,
            "logo" => $this->logo,
            "website" => $this->website,
            "linkedin" => $this->linkedin,
            "organizer" => $this->organizer,
            "bio" => $this->bio,
        ];
    }
}
