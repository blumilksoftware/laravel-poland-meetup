<script setup>
import { HashtagIcon, MapPinIcon, AtSymbolIcon, BuildingOffice2Icon, BookmarkIcon } from '@heroicons/vue/24/outline'
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'
import FacebookIcon from '@/components/Icons/FacebookIcon.vue'
import TwitterIcon from '@/components/Icons/TwitterIcon.vue'
import Counter from '@/components/Companies/Counters.vue'
import LoadingSpinner from '@/components/Icons/LoadingSpinner.vue'

defineProps({
  companies: {
    type: Array,
    default: () => [],
  },
  meetups: {
    type: Array, 
    default: () => [],
  },
  name: {
    type: String,
    default: () => '',
  },
  loading: {
    type: Boolean,
    default: true,
  },
})

</script>

<template>
  <div class="my-12 bg-white text-center text-3xl font-bold tracking-tight text-zinc-700 sm:text-4xl">
    <div class="mx-auto max-w-7xl bg-white py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12 text-zinc-700">
        <h2 class="first-letter:text-laravel h-16 w-auto border-b border-zinc-200 text-center sm:h-20">
          {{ name }}
        </h2>
        <ul v-auto-animate role="list" :class="['gap-y-7 space-y-0 divide-y divide-zinc-200 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:divide-y-0', companies.length === 1 ? 'lg:grid-cols-1' : '']">
          <li v-if="loading">
            <LoadingSpinner/>
          </li>
          <li v-if="companies.length === 0" class="col-span-2">
            <div class="mx-3 block animate-pulse sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 md:space-x-4 lg:gap-8">
              <div class="relative m-auto">
                <div class="my-auto sm:my-0">
                  <building-office-2-icon class="h-20 w-20 text-zinc-200"/>
                </div>
              </div>
              <div class="space-y-2 whitespace-pre-wrap sm:space-y-4">
                <div class="h-5 w-72 shrink rounded-lg bg-zinc-200"/>
                <div class="h-5 w-64 shrink rounded-lg bg-zinc-100"/>
                <div class="h-4 w-48 shrink rounded-lg bg-zinc-100"/>
              </div>
            </div>
          </li>
          <li v-for="company in companies" :key="company.id" :class="['hover:shadow-lg py-7', companies.length === 1 ? 'hover:shadow-none' : '']">
            <div class="mx-3 block truncate text-base text-zinc-500 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 md:space-y-10 lg:gap-8">
              <div class="m-auto">
                <router-link :to="{ name: 'companies.details', params: { id: company.id } }" class="my-5 sm:my-0">
                  <building-office-2-icon v-if="!company.logo" class="h-20 w-20 text-zinc-400" :alt="company.name"/>
                  <img v-else class="mx-auto max-h-16 w-auto shrink object-contain" :src="company.logo" :alt="company.name">
                </router-link>
                <counter v-if="meetups" :meetups="meetups" :company="company.name"/>
              </div>
              <div class="space-y-2 whitespace-pre-wrap py-2 px-5 text-left text-lg font-medium leading-6 text-zinc-600 sm:space-y-4 sm:text-2xl">
                <div v-if="company.organizer" class="text-laravel flex space-x-3 text-xl">
                  <hashtag-icon class="h-7 w-7 sm:h-8 sm:w-8"/>
                  <span class="col-span-11 text-2xl">organizator</span>
                </div>
                <div class="space-y-2 font-medium leading-6 sm:space-y-4">
                  <router-link :to="{ name: 'companies.details', params: { id: company.id } }" class="flex space-x-3 transition duration-200 hover:translate-x-1">
                    <bookmark-icon class="h-7 w-7 shrink-0 sm:h-8 sm:w-8"/>
                    <span class="col-span-11 block font-bold tracking-wide">
                      {{ company.name }}
                    </span>
                  </router-link>
                  <div class="flex space-x-3 transition duration-200 hover:translate-x-1">
                    <map-pin-icon class="h-7 w-7 sm:h-8 sm:w-8"/>
                    <a href="#map" class="col-span-11">
                      {{ company.location }}
                    </a>
                  </div>
                  <div class="flex space-x-2 transition duration-200 hover:translate-x-1">
                    <a class="flex space-x-3" :href="company.website">
                      <at-symbol-icon class="h-7 w-7 sm:h-8 sm:w-8"/>
                      <p class="col-span-11 block">strona internetowa</p>
                    </a>
                  </div>
                  <div class="my-1 mx-auto flex space-x-5 sm:my-3 sm:gap-3">
                    <linkedin-icon v-if="company.linkedin" :href="company.linkedin" class="h-10 w-10 pr-2 text-zinc-600"/>
                    <facebook-icon v-if="company.facebook" :href="company.facebook" class="h-10 w-10 pr-2 text-zinc-600"/>
                    <twitter-icon v-if="company.twitter" :href="company.twitter" class="h-10 w-10 pr-2 text-zinc-600"/>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
