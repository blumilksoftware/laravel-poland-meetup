<script setup>
</script>

<template>
  <div class="relative bg-zinc-700">
    <div class="h-72 bg-zinc-600 sm:h-64 md:absolute md:left-0 md:h-full md:w-1/2">
      <img class="h-full w-full object-cover" src="../../../public/images/lpm_22/310424227_1805613629799141_2350601291274663561_n.jpg" alt="" />
    </div>
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <h2 class="ppercase font-semibold text-2xl text-zinc-300">
          Następny meetup
          <span id="days" class="text-laravel">już</span>
          za miesiąc
        </h2>
        <div class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Laravel Poland MeetUp #23
        </div>
        <p class="mt-3 text-2xl text-zinc-300 leading-8">
          <strong class="text-laravel">10 listopad, godzina 18:00, czwartek</strong><br>
          Zapraszamy fascynatów Laravela i nie tylko!<br>
          Wstęp free.<br>
          Tym razem widzimy się online!
        </p>
        <div class="mt-8">
          <div class="block gap-4 rounded-md shadow sm:block md:block">
            <a href="https://www.subscribepage.com/lpm23?fbclid=IwAR2mdIHtj7U2kCAlRMzpzbenpyKdO6HkdMsXTeFjzBm1lypc5oOwmsIfSzI" class="flex items-center justify-center rounded-md border border-transparent bg-laravel px-8 py-3 my-3 text-xl font-bold text-white hover:bg-zinc-300 hover:scale-105 duration-300 ">Zapisz się!</a>
            <router-link :to="{ name: 'meetups' }" class="flex items-center justify-center rounded-md border border-transparent bg-zinc-100 px-5 py-3 text-base font-medium text-zinc-900 hover:bg-zinc-300 hover:scale-105 duration-300">Poprzednie meetupy</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

