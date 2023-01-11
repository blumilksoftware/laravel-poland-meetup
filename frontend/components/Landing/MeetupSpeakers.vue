<script setup>
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  nextMeetup: {
    type: Object,
    default: () => {},
  },
})

const computedNextMeetup = computed(() => {
  if(props.nextMeetup == 0) return {}
  return props.nextMeetup
})

</script>

<template>
  <div class="relative my-20 overflow-hidden bg-white">
    <div class="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
      <div class="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
        <svg class="absolute top-12 left-full translate-x-32 animate-pulse" width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"/>
        </svg>
        <svg class="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
        </svg>
      </div>
    </div>
    <div class="relative mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 lg:py-12">
      <div v-if="computedNextMeetup" class="m-8 block">
        <div class="mb-14 text-center">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            Tematy prezentacji <br>
            <span class="text-laravel">{{ computedNextMeetup.dateFull }}</span>
          </h2>
        </div>
        <div>
          <ul v-if="computedNextMeetup.presentations" role="list" class="flex flex-wrap justify-center font-bold">
            <li v-for="presentation of computedNextMeetup.presentations" :key="presentation.id" class="m-6 w-full md:w-1/4 xl:w-1/4">
              <div v-for="speaker in presentation.speakers" :key="speaker.id" class="block flex-row">
                <img v-if="speaker.image.length > 2" class="mx-auto h-40 w-40 rounded-full shadow-xl xl:h-56 xl:w-56" :src="speaker.image" alt="">
                <img v-else class="mx-auto h-40 w-40 rounded-full shadow-xl xl:h-56 xl:w-56" src="/images/speakers/placeholder.webp" alt="">
                <div class="text-laravel my-3 text-lg font-medium leading-6">
                  <router-link :to="{ name: 'people' }">
                    <h3>{{ speaker.name }}</h3>
                  </router-link>
                  <router-link :to="{ name: 'companies' }">
                    <p class="text-zinc-600">
                      {{ speaker.company }}
                    </p>
                  </router-link>
                </div>
                <ul role="list" class="my-4 flex space-x-3">
                  <li>
                    <linkedin-icon :href="speaker.linkedin"/>
                  </li>
                </ul>
              </div>
              <div class="text-lg">
                <div v-if="presentation.title.length < 2" class="my-3 h-4 w-4/5 animate-pulse rounded-xl bg-zinc-300 tracking-wider"/>
                <router-link :to="{ name: 'meetups' }">
                  <p v-if="presentation.title.length > 2" class="bold text-2xl leading-none">
                    {{ presentation.title }}
                  </p>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="!computedNextMeetup || !computedNextMeetup.presentations" class="m-8 block">
        <div class="mb-14 text-center">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            Tutaj już niedługo pojawią się nowi prelegenci!
          </h2>
          <ul v-if="!computedNextMeetup || !computedNextMeetup.presentations" role="list" class="mt-14 flex flex-wrap justify-center font-bold">
            <li v-for="i in 2" :key="i" class="mt-6 w-full md:w-1/3 xl:w-1/4">
              <img class="brightness- mx-auto h-40 w-40 animate-pulse rounded-full shadow-xl xl:h-40 xl:w-40" src="/images/speakers/placeholder.webp" alt="">
              <div class="my-3 h-4 w-1/3 animate-pulse rounded-xl bg-red-200"/>
              <div class="my-3 h-4 w-1/2 animate-pulse rounded-xl bg-zinc-300"/>
              <div class="my-3 h-4 w-3/5 animate-pulse rounded-xl bg-zinc-300"/>
            </li>
          </ul>
          <div class="mt-12 justify-center md:flex ">
            <router-link :to="{ name: 'contact' }" class="mb-4 flex items-center justify-center rounded-md border border-transparent bg-red-600 px-10 py-3 text-xl font-medium text-white shadow duration-300 hover:scale-105 hover:bg-red-800 md:mb-0 md:mr-6">
              Zostań jednym z nich!
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
