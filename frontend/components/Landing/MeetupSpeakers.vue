<script setup>
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'
import { useFindNextMeetup } from '@/components/Meetup/useFindNextMeetup.js'

const { nextMeetup } = useFindNextMeetup()

</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 lg:py-12">
      <div class="block m-8" v-if="nextMeetup">
        <div class="text-center mb-14">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Tematy prezentacji <br>
            <span class="text-laravel">{{ nextMeetup.dateFull }}</span>
          </h2>
        </div>
        <div>
          <ul role="list" class="flex flex-wrap font-bold justify-center">
            <li class="w-full md:w-1/4 xl:w-1/4 m-6" v-if="nextMeetup.presentations.length != 0" v-for="presentation of nextMeetup.presentations">
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
                <router-link :to="{ name: 'meetups' }"><p class="text-2xl bold leading-none" v-if="presentation.title.length > 2">{{ presentation.title }}</p></router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="block m-8" v-if="!nextMeetup || nextMeetup.presentations.length === 0">
        <div class="text-center mb-14">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Tutaj już niedługo pojawią się nowi prelegenci! <br>
            <ul role="list" class="flex flex-wrap font-bold justify-center mt-14">
              <li class="w-full md:w-1/3 xl:w-1/4 mt-6" v-for="i in 2" v-if="!nextMeetup || nextMeetup.presentations.length == 0">
              <img class="mx-auto h-40 w-40 rounded-full brightness- animate-pulse shadow-xl xl:h-40 xl:w-40" src="/images/speakers/placeholder.webp" alt=""/>
              <div class="my-3 rounded-xl animate-pulse bg-red-200 w-1/3 h-4"></div>
              <div class="my-3 rounded-xl animate-pulse bg-zinc-300 w-1/2 h-4"></div>
              <div class="my-3 rounded-xl animate-pulse bg-zinc-300 w-3/5 h-4"></div>
            </li>
            </ul>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
