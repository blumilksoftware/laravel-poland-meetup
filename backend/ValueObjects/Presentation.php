<?php

declare(strict_types=1);

namespace LaravelPolandMeetup\ValueObjects;

use Illuminate\Support\Collection;

/**
 * @property-read Collection<Speaker> $speakers
 * @property-read Collection<string> $tags
 */
class Presentation
{
    public function __construct(
        public readonly string $title,
        public readonly ?string $youtube = null,
        public readonly ?string $slideshare = null,
        public readonly ?string $slideshareEmbed = null,
        public readonly Collection $speakers = new Collection(),
        public readonly ?array $tags = null,
    ) {}

    public function toMeetupEntry(): array
    {
        return [
            "title" => $this->title,
            "youtube" => $this->youtube,
            "slideshare" => $this->slideshare,
            "slideshareEmbed" => $this->slideshareEmbed,
            "speakers" => $this->speakers->map(
                fn(Speaker $speaker): array => $speaker->toMeetupDetailsEntry(),
            ),
            "tags" => $this->tags,
        ];
    }
}
