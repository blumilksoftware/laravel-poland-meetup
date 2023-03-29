<template>
  <div class="w-100% relative my-20 bg-zinc-800 ">
    <div class="absolute inset-0">
      <img class="h-full w-full object-cover" src="/images/lpm_22/lpm22-img1.webp" alt="">
      <div class="absolute inset-0 bg-zinc-800 mix-blend-multiply" aria-hidden="true"/>
    </div>
    <div class="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl py-8 px-4 text-center sm:px-6 lg:py-10 lg:px-8">
        <h2 class="tracking-tight text-white">
          <span class="mb-7 block text-3xl">Weź udział!</span>
          <span class="block text-2xl">Jeśli masz ciekawy pomysł i chciałbyś się z nim podzielić lub interesuje cię wzięzie udziału w <span class="font-bold tracking-tight">Laravel <span class="text-laravel">Poland</span> Meetup</span> jako słuchacz, daj nam znać!</span>
        </h2>
      </div>
      <div class="mt-8 justify-center md:flex ">
        <router-link :to="{ name: 'contact' }" class="mb-4 flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-xl font-medium text-white shadow duration-300 hover:scale-105 hover:bg-red-800 md:mb-0 md:mr-6">
          Zgłaszam prezentację
        </router-link>
        <a href="https://www.subscribepage.com/lpm23?fbclid=IwAR1T_Qe0E6vIkfwm0Z4_W39tP_IsWKxv06KCLwoPxKlMZzn9-3jmIcri8pg" target="_blank" rel="noopener" class="flex items-center justify-center rounded-md border border-transparent bg-zinc-100 px-5 py-3 text-lg font-medium text-zinc-700 duration-300 hover:scale-105 hover:bg-zinc-200">Biorę udział jako słuchacz</a>
      </div>
    </div>
  </div>
</template>
