<script setup>
import { computed, onMounted, ref } from 'vue'
import CountDown from './CountDown.vue'

const meetupsList = ref([])

onMounted(() => {
  fetch('/api/meetups.json').then((response) => response.json()).then((meetups) => {
    meetupsList.value = meetups
  })
})

const today = new Date()

const findNextMeetup = computed(() => {
  const futureMeetups = []

  for(let meetup of meetupsList.value) {
    if(new Date(meetup.date) > today) {
      futureMeetups.push(meetup)
    }
  }

  futureMeetups.sort(function(a, b){
    return (b.date) - (a.date)
  })

  return futureMeetups[futureMeetups.length - 1]
})
</script>

<template>
  <div v-if="meetupsList" class="relative bg-zinc-700">
    <div class="h-72 bg-zinc-600 sm:h-64 md:absolute md:left-0 md:h-full md:w-1/2">
      <img class="h-full w-full object-cover" src="/images/lpm_22/lpm22-img2.webp" alt="">
    </div>
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div v-if="findNextMeetup" class="md:ml-auto md:w-1/2 md:pl-10">
        <count-down :date="findNextMeetup.date"/> 
        <div v-if="meetupsList && findNextMeetup.name" class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {{ findNextMeetup.name }}
        </div>
        <p class="mt-3 text-2xl leading-8 text-zinc-300">
          <strong class="text-laravel">{{ findNextMeetup.dateFull }}</strong><br>
          Zapraszamy fascynatów Laravela i nie tylko!<br>
          Wstęp free.<br>
          <span v-if="findNextMeetup.location === 'online'">Tym razem widzimy się online!</span>
          <span v-else>Miejsce spotkania: {{ findNextMeetup.location }}</span>
        </p>
        <div class="mt-8">
          <div class="block gap-4 rounded-md tracking-wide shadow sm:block md:block lg:w-3/5">
            <a href="https://www.subscribepage.com/lpm23?fbclid=IwAR2mdIHtj7U2kCAlRMzpzbenpyKdO6HkdMsXTeFjzBm1lypc5oOwmsIfSzI" class="bg-laravel my-3 flex items-center justify-center rounded-md border border-transparent px-8 py-3 text-xl font-bold text-white duration-300 hover:scale-105 hover:bg-red-800" target="_blank">Zapisz się!</a>
            <router-link :to="{ name: 'meetups' }" class="flex items-center justify-center rounded-md border border-transparent bg-zinc-100 px-5 py-3 text-base font-medium text-zinc-900 duration-300 hover:scale-105 hover:bg-zinc-300">
              Poprzednie meetupy
            </router-link>
          </div>
        </div>
      </div>
      <div v-else-if="!findNextMeetup" class="md:ml-auto md:w-1/2 md:pl-10">
        <div class="mt-3 space-y-3 text-white sm:tracking-wider">
          <h1 class="text-3xl font-semibold sm:text-4xl">
            Już niedługo ogłosimy datę kolejnego <span class="text-laravel">meetupu!</span>
          </h1>
          <p class="text-2xl text-zinc-300">
            Obserwuj nasz profil na <a href="https://www.facebook.com/laravelpolandmeetup/" class="font-bold tracking-normal text-cyan-600">Facebooku</a>, aby być na bieżąco!
          </p>
          <p class="text-2xl font-medium text-zinc-300">
            Sprawdź też, czy nie ominęło Cię coś interesującego w
            <router-link :to="{ name: 'meetups' }" class="text-laravel font-semibold">
              poprzednich meetupach
            </router-link>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
