<?php

declare(strict_types=1);

namespace LaravelPolandMeetup\ValueObjects;

use Illuminate\Support\Str;

class Company
{
    public readonly string $slug;

    public function __construct(
        public readonly string $id,
        public readonly string $name,
        public readonly string $location,
        public readonly ?string $logo = null,
        public readonly ?string $website = null,
        public readonly ?string $linkedin = null,
        public readonly ?bool $organizer = false,
        public readonly ?string $bio = null,
        public readonly ?array $coordinates = null,
    ) {
        $this->slug = Str::slug(sprintf("%s-%s", $this->id, $this->name));
    }

    public function toListedEntry(): array
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "slug" => $this->slug,
            "location" => $this->location,
            "logo" => $this->logo,
            "website" => $this->website,
            "linkedin" => $this->linkedin,
            "organizer" => $this->organizer,
            "bio" => $this->bio,
            "coordinates" => $this->coordinates,
        ];
    }

    public function toPresentationEntry(): array
    {
        return [
            "name" => $this->name,
            "slug" => $this->slug,
        ];
    }
}
