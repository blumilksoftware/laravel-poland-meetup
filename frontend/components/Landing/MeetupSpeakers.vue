<script setup>
import People from '/resources/people.json';
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue';
import { onMounted, ref } from 'vue'

const data = ref()
const dateFull = ref()
const presentations = ref()

onMounted(async() => {
  await fetch('/api/meetups/2022-11-10-laravel-poland-meetup-23.json').then((response) => response.json()).then((meetup) => {
    data.value = meetup
    dateFull.value = meetup.dateFull
    presentations.value = meetup.presentations
  })
})

</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 lg:py-12">
      <div class="block m-8" v-if="data">
        <div class="text-center mb-14">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Tematy prezentacji <br>
            <span class="text-laravel">{{ dateFull }}</span>
            <p v-if="!presentations">ogłosimy już niebawem!</p>
          </h2>
        </div>
        <div>
          <ul role="list" class="flex flex-wrap font-bold justify-center">
            <li class="w-full md:w-1/4 xl:w-1/4 m-6" v-if="presentations" v-for="presentation in presentations">
              <div class="block flex-row" v-for="speaker in presentation.speakers" :key="speaker">
                <img class="mx-auto h-40 w-40 rounded-full shadow-xl xl:h-56 xl:w-56" v-if="speaker.image.length > 2" :src="speaker.image" alt="" />
                <img class="mx-auto h-40 w-40 rounded-full shadow-xl xl:h-56 xl:w-56"  v-else src="/images/speakers/placeholder.webp" alt="" />
                <div class="my-3 text-lg text-laravel font-bold font-medium leading-6">
                  <router-link :to="{ name: 'people' }"><h3>{{ speaker.name }}</h3></router-link>
                  <router-link :to="{ name: 'companies' }"><p class="text-zinc-600">{{ speaker.company }}</p></router-link>
                </div>
                <ul role="list" class="flex my-4 space-x-3">
                  <li>
                    <linkedin-icon :href="speaker.linkedin"></linkedin-icon>
                  </li>
                </ul>
              </div>
              <div class="text-lg">
                <div class="my-3 rounded-xl animate-pulse bg-zinc-300 w-4/5 h-4 tracking-wider" v-if="presentation.title.length < 2"></div>
                <router-link :to="{ name: 'meetups' }" v-if="presentation.title.length > 2"><p class="text-2xl bold leading-none">{{ presentation.title }}</p></router-link>
              </div>
            </li>
            <li class="w-full md:w-1/3 xl:w-1/4 m-6" v-else>
              <img class="mx-auto h-40 w-40 rounded-full brightness- animate-pulse shadow-xl xl:h-40 xl:w-40" src="/images/speakers/placeholder.webp" alt=""/>
              <div class="my-3 rounded-xl animate-pulse bg-red-200 w-1/3 h-4"></div>
              <div class="my-3 rounded-xl animate-pulse bg-zinc-300 w-1/2 h-4"></div>
              <div class="my-3 rounded-xl animate-pulse bg-zinc-300 w-3/5 h-4"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
