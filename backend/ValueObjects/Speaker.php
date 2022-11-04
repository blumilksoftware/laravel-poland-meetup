<?php

declare(strict_types=1);

namespace LaravelPolandMeetup\ValueObjects;

class Speaker
{
    public function __construct(
        public readonly Person $person,
        public readonly ?Company $company = null,
    ) {}

    public function toMeetupDetailsEntry(): array
    {
        return [
            "name" => $this->person->name,
            "avatar" => "https://ui-avatars.com/api/?background=random&font-size=.33&size-128&rounded=true&name=" .str_replace(" ","-",$this->person->name),
            "company" => $this->company?->name,
        ];
    }
}
