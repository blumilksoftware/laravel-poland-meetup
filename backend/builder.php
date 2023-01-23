<?php

declare(strict_types=1);

require __DIR__ . "/../vendor/autoload.php";

use Carbon\Carbon;
use Illuminate\Support\Collection;
use LaravelPolandMeetup\ValueObjects\Company;
use LaravelPolandMeetup\ValueObjects\Meetup;
use LaravelPolandMeetup\ValueObjects\Person;
use LaravelPolandMeetup\ValueObjects\Presentation;
use LaravelPolandMeetup\ValueObjects\Speaker;

function retrieveData(): array
{
    $resourcesPath = realpath(__DIR__ . "/../resources");

    $people = Collection::make(json_decode(file_get_contents($resourcesPath . "/people.json"), associative: true));
    $companies = Collection::make(json_decode(file_get_contents($resourcesPath . "/companies.json"), associative: true));
    $meetups = Collection::make();
    foreach (array_reverse(glob($resourcesPath . "/meetups/*.json")) as $file) {
        $meetups[] = json_decode(file_get_contents($file), associative: true);
    }

    return [
        $people,
        $companies,
        $meetups,
    ];
}

function mapData(Collection $people, Collection $companies, Collection $meetups): array
{
    $people = $people->map(fn(array $person): Person => new Person(
        name: $person["name"],
        image: $person["image"] ?? "",
        bio: $person["bio"] ?? "",
        linkedin: $person["linkedin"] ?? "",
    ));
    $companies = $companies->map(fn(array $company): Company => new Company(
        name: $company["name"],
        location: $company["location"],
        logo: $company["logo"] ?? "",
        website: $company["website"] ?? "",
        linkedin: $company["linkedin"] ?? "",
        organizer: $company["organizer"],
    ));

    $meetups = $meetups->map(fn(array $meetup): Meetup => new Meetup(
        name: $meetup["name"],
        location: $meetup["location"] ?? "",
        date: isset($meetup["date"]) ? Carbon::parse($meetup["date"])->locale("pl_PL") : null,
        facebook: $meetup["facebook"] ?? null,
        presentations: Collection::make($meetup["presentations"])->map(
            fn(array $presentation): Presentation => new Presentation(
                title: $presentation["title"],
                youtube: $presentation["youtube"],
                slideshare: $presentation["slideshare"],
                speakers: Collection::make($presentation["speakers"])->map(
                    fn(array $speaker): Speaker => new Speaker(
                        person: $people[$speaker["person"]],
                        company: $companies[$speaker["company"]] ?? null,
                    ),
                ),
                tags: Collection::make(),
            ),
        ),
    ));

    return [
        $people,
        $companies,
        $meetups,
    ];
}

function saveData(Collection $people, Collection $companies, Collection $meetups): void
{
    $apiPath = realpath(__DIR__ . "/../public/api");
    $flags = JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES;

    file_put_contents(
        filename: $apiPath . "/people.json",
        data: json_encode(
            value: $people->map(fn(Person $person): array => $person->toListedEntry())->values(),
            flags: $flags,
        ),
    );

    file_put_contents(
        filename: $apiPath . "/companies.json",
        data: json_encode(
            value: $companies->map(fn(Company $company): array => $company->toListedEntry())->values(),
            flags: $flags,
        ),
    );

    file_put_contents(
        filename: $apiPath . "/meetups.json",
        data: json_encode(
            value: $meetups->map(fn(Meetup $meetup): array => $meetup->toListedEntry())->values(),
            flags: $flags,
        ),
    );

    if (!is_dir($apiPath . "/meetups")) {
        mkdir($apiPath . "/meetups");
    }

    /** @var Meetup $meetup */
    foreach ($meetups as $meetup) {
        file_put_contents(
            filename: $apiPath . "/meetups/" . $meetup->id . ".json",
            data: json_encode(value: $meetup->toDetailedEntry(), flags: $flags),
        );
    }

    file_put_contents(
        filename: $apiPath . "/counters.json",
        data: json_encode(
            value: [
                "meetups" => $meetups->count(),
                "presentations" => $meetups->map(fn(Meetup $meetup): int => $meetup->presentations->count())->sum(),
                "people" => $people->count(),
            ],
            flags: $flags,
        ),
    );
}

[$people, $companies, $meetups] = retrieveData();
[$people, $companies, $meetups] = mapData($people, $companies, $meetups);
saveData($people, $companies, $meetups);

echo "Static database has been created." . PHP_EOL;
