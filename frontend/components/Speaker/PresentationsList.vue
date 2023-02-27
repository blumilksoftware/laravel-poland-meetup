<script setup>
import { PresentationChartLineIcon } from '@heroicons/vue/24/outline'
import YouTubeIcon from '@/components/Icons/YouTubeIcon.vue'
import SlideShareIcon from '@/components/Icons/SlideShareIcon.vue'

defineProps({
  meetups: {
    type: Array,
    default: () => [],
  },
  speaker: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: true,
  },
})

const presentations = [
  {
    name: 'Laravel 8 - co nowego?',
    meetup: 'Laravel Poznań Meetup #15',
    tags: ['laravel', 'php', 'meetup', 'firma', 'summer', 'sms'],
  },
  {
    name: 'Laravel 8 - co nowego?',
    meetup: 'Laravel Poznań Meetup #15',
  },
  {
    name: 'Laravel 8 - co nowego?',
    meetup: 'Laravel Poznań Meetup #15',
  },
  {
    name: 'Laravel 8 - co nowego?',
    meetup: 'Laravel Poznań Meetup #15',

  },
]

</script>
<template>
  <div class="mx-auto">
    <div class="justify-center">
      <h2
        class="first-letter:text-laravel lg:py-18 w-full border-b py-10 px-7 text-2xl font-bold sm:px-6 md:text-4xl lg:px-8">
        Meetupowy wkład
      </h2>
      <div class="m-10 block justify-center md:flex md:space-x-24">
        <ul class="block w-full divide-y divide-zinc-200">
          <li v-for="presentation of presentations" :key="presentation.name" class="flex justify-between py-5">
            <div class="block">
              <div class="flex">
                <presentation-chart-line-icon class="mr-3 h-7 w-7 shrink-0 text-zinc-600" aria-hidden="true"/>
                <router-link :to="{ name: 'meetups.details', params: { id: '2020-09-17-laravel-poznan-meetup-15' } }" class="flex justify-center text-lg font-medium transition duration-200 hover:translate-x-1">
                  {{ presentation.name }}
                </router-link>
              </div>
              <div class="my-1 flex w-fit rounded-full bg-zinc-100 px-3">
                {{ presentation.meetup }}
              </div>
              <div class="flex px-3 text-zinc-500">
                <p>Tagi:</p>
                <ul class="flex">
                  <li v-for="tag of presentation.tags" :key="tag" class="mx-1 underline">
                    <router-link :to="{ name: 'searching.results', params: { id: tag }}">
                      {{ tag }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mx-5 flex items-center sm:space-x-5">
              <a href="#" target="_blank" class="group flex w-fit space-x-2 font-semibold transition hover:scale-105 md:space-x-3">
                <div class="h-6 w-6 ">
                  <you-tube-icon aria-hidden="true" href="#"/>
                </div>
              </a>
              <a href="#" target="_blank" class="group flex w-fit space-x-2 font-semibold transition hover:scale-105 md:space-x-3">
                <slide-share-icon aria-hidden="true" class="h-6 w-6 fill-zinc-600"/>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
