<?php

declare(strict_types=1);

namespace LaravelPolandMeetup\ValueObjects;

use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

/**
 * @property-read Collection<Presentation> $presentations
 */
class Meetup
{
    public readonly string $id;

    public function __construct(
        public readonly string $name,
        public readonly ?string $location = null,
        public readonly ?Carbon $date = null,
        public readonly ?string $facebook = null,
        public readonly Collection $presentations = new Collection(),
    ) {
        $this->id = Str::slug($this->date->format("Y-m-d") . " " . $this->name);
    }

    public function toListedEntry(): array
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "location" => $this->location,
            "date" => $this->date->format("Y-m-d H:i:s"),
            "dateFull" => $this->date->isoFormat("LL, LT"),
            "presentations" => $this->presentations->map(fn(Presentation $presentation): array => $presentation->toMeetupEntry()),
            "facebook" => $this->facebook,
        ];
    }

    public function toDetailedEntry(): array
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "location" => $this->location,
            "date" => $this->date->format("Y-m-d H:i:s"),
            "dateFull" => $this->date->isoFormat("LL, LT"),
            "presentations" => $this->presentations->map(fn(Presentation $presentation): array => $presentation->toMeetupEntry()),
            "facebook" => $this->facebook,
        ];
    }
}
