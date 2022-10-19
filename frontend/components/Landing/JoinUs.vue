<template>
  <div class="w-100% relative bg-zinc-800 my-20 ">
    <div class="absolute inset-0">
      <img class="h-full w-full object-cover" src="../../../public/images/lpm_22/310212195_1805613846465786_5841279197212749089_n.jpg" alt="" />
      <div class="absolute inset-0 bg-zinc-800 mix-blend-multiply" aria-hidden="true" ></div>
    </div>
    <div class="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl py-8 px-4 text-center sm:px-6 lg:py-10 lg:px-8">
        <h2 class="text-3xl tracking-tight text-white">
          <span class="block mb-7">Dołącz do nas!</span>
          <span class="block">Jeśli masz ciekawy pomysł i chciałbyś się z nim podzielić lub interesuje cię wzięzie udziału w <span class="text-4xl font-bold tracking-tight">Laravel <span class="text-laravel">Poland</span> Meetup</span> jako słuchacz, daj nam znać!</span>
        </h2>
      </div>
      <div class="mt-8 flex justify-center">
        <div class="inline-flex rounded-md shadow">
          <router-link :to="{ name: 'contact' }" class="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-xl font-medium text-white hover:bg-red-800 hover:scale-105 duration-300">Zgłaszam prezentację</router-link>
        </div>
        <div class="ml-5 inline-flex">
          <a href="https://www.subscribepage.com/lpm23?fbclid=IwAR1T_Qe0E6vIkfwm0Z4_W39tP_IsWKxv06KCLwoPxKlMZzn9-3jmIcri8pg" class="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-100 px-5 py-3 text-lg font-medium text-zinc-700 hover:bg-zinc-200 hover:scale-105 duration-300">Biorę udział jako sluchacz</a>
        </div>
      </div>
    </div>
  </div>
</template>
