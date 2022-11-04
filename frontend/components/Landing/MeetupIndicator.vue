<script setup>
import { onMounted, ref } from 'vue'

let date = ref()
let data = ref()

onMounted(() => {
  fetch('/api/meetups/2022-11-24-laravel-poland-meetup-23.json').then((response) => response.json()).then((meetup) => {
    data.value = meetup
    date.value = new Date(meetup.date)
  })
})

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour12: false,
  hour: 'numeric',
  minute: 'numeric',
}
</script>

<template>
  <div class="relative bg-zinc-700" v-if="data">
    <div class="h-72 bg-zinc-600 sm:h-64 md:absolute md:left-0 md:h-full md:w-1/2">
      <img class="h-full w-full object-cover" src="/images/lpm_22/lpm22-img2.webp" alt=""/>
    </div>
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <h2 class="ppercase font-semibold text-2xl text-zinc-300">
          Następny meetup
          <span class="text-laravel">już</span>
          za miesiąc
        </h2>
        <div class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl" v-if="data && data.name">
          {{ data.name }}
        </div>
        <p class="mt-3 text-2xl text-zinc-300 leading-8">
          <strong class="text-laravel">{{ date }}</strong><br>
          Zapraszamy fascynatów Laravela i nie tylko!<br>
          Wstęp free.<br>
          <span v-if="data.location === 'online'">Tym razem widzimy się online!</span>
          <span v-else>Miejsce spotkania: {{ data.location }}!</span>
        </p>
        <div class="mt-8">
          <div class="block gap-4 tracking-wide rounded-md shadow sm:block md:block lg:w-3/5">
            <a href="https://www.subscribepage.com/lpm23?fbclid=IwAR2mdIHtj7U2kCAlRMzpzbenpyKdO6HkdMsXTeFjzBm1lypc5oOwmsIfSzI" class="flex items-center justify-center rounded-md border border-transparent bg-laravel px-8 py-3 my-3 text-xl font-bold text-white hover:bg-red-800 hover:scale-105 duration-300 ">Zapisz się!</a>
            <router-link :to="{ name: 'meetups' }" class="flex items-center justify-center rounded-md border border-transparent bg-zinc-100 px-5 py-3 text-base font-medium text-zinc-900 hover:bg-zinc-300 hover:scale-105 duration-300">Poprzednie meetupy</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
