<script setup>
import { computed } from 'vue'
import CountDown from './CountDown.vue'

const props = defineProps({
  nextMeetup: {
    type: Object,
    default: () => {},
  },
})

const computedNextMeetup = computed(() => {
  if(props.nextMeetup === 0) return {}
  return props.nextMeetup.value
})
</script>

<template>
  <div class="relative bg-zinc-700">
    <div class="h-72 bg-zinc-600 sm:h-64 md:absolute md:left-0 md:h-full md:w-1/2">
      <img class="h-full w-full object-cover" src="/images/lpm_22/lpm22-img2.webp" alt="">
    </div>
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div v-if="computedNextMeetup.date" class="md:ml-auto md:w-1/2 md:pl-10">
        <count-down v-if="computedNextMeetup.date" :date="computedNextMeetup.date"/> 
        <div v-if="computedNextMeetup && computedNextMeetup.name" class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {{ computedNextMeetup.name }}
        </div>
        <p class="mt-3 text-2xl leading-8 text-zinc-300">
          <strong class="text-laravel">{{ computedNextMeetup.dateFull }}</strong><br>
          Zapraszamy fascynatów Laravela i nie tylko!<br>
          Wstęp free.<br>
          <span v-if="computedNextMeetup.location === 'online'">Tym razem widzimy się online!</span>
          <span v-else>Miejsce spotkania: {{ computedNextMeetup.location }}</span>
        </p>
        <div class="mt-8">
          <div class="block gap-4 rounded-md tracking-wide shadow sm:block md:block lg:w-3/5">
            <a :href="computedNextMeetup.signUpLink" class="bg-laravel my-3 flex items-center justify-center rounded-md border border-transparent px-8 py-3 text-xl font-bold text-white duration-300 hover:scale-105 hover:bg-red-800" target="_blank">Zapisz się!</a>
            <router-link :to="{ name: 'meetups' }" class="flex items-center justify-center rounded-md border border-transparent bg-zinc-100 px-5 py-3 text-base font-medium text-zinc-900 duration-300 hover:scale-105 hover:bg-zinc-300">
              Poprzednie meetupy
            </router-link>
          </div>
        </div>
      </div>
      <div v-else-if="!computedNextMeetup.length" class="md:ml-auto md:w-1/2 md:pl-10">
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
