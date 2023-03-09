<template>
  <div class="mx-auto h-full w-full max-w-7xl bg-white">
    <div class="mx-auto max-w-4xl">
      <p class="my-8 pt-10 text-center text-xl sm:my-12 sm:text-2xl">
        Strona, której szukasz nie istnieje.
      </p>
      <ul class="list-disc">
        <li class="text-md mx-8 my-5 text-left sm:my-6 sm:mx-20 sm:text-xl">
          Spróbuj odświeżyć stronę.
        </li>
        <li class="text-md mx-8 my-5 text-left sm:my-6 sm:mx-20 sm:text-xl">
          <router-link :to="{ name: 'landing' }" class="underline hover:bg-zinc-50">
            Wróć na stronę główną.
          </router-link>
        </li>
      </ul>
    </div>
    <img src="/images/placeholders/error.webp" class="mx-auto lg:w-2/3">
  </div>
</template>
