<script setup>
import { HashtagIcon, MapPinIcon, AtSymbolIcon, BuildingOffice2Icon, BookmarkIcon } from '@heroicons/vue/24/outline'
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'
import FacebookIcon from '@/components/Icons/FacebookIcon.vue'
import TwitterIcon from '@/components/Icons/TwitterIcon.vue'

defineProps({
  companies: {
    type: Array,
    default: () => [],
  },
  name: {
    type: String,
    default: () => '',
  },
})

</script>

<template>
  <div class="my-12 bg-white text-center text-3xl font-bold tracking-tight text-zinc-700 sm:text-4xl">
    <div class="mx-auto max-w-7xl bg-white py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12 text-zinc-700">
        <h2 class="w-auto text-center sm:h-20">
          {{ name }}
        </h2>
        <ul v-auto-animate role="list" :class="['gap-y-7 space-y-0 divide-y divide-zinc-200 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:divide-y-0', companies.length === 1 ? 'lg:grid-cols-1' : '']">
          <li v-for="(company, id) in companies" :key="id" :class="['hover:shadow-lg py-7', companies.length === 1 ? 'hover:shadow-none' : '']">
            <div class="mx-3 block truncate text-base text-zinc-500 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 md:space-y-10 md:space-x-4 lg:gap-8">
              <router-link :to="{ name: 'companies.details', params: { id: company.name } }" class="relative m-auto">
                <div class="my-5 sm:my-0">
                  <building-office-2-icon v-if="!company.logo" class="h-20 w-20 text-zinc-400" :alt="company.name"/>
                  <img v-else class="mx-auto max-h-16 w-auto object-contain" :src="company.logo" :alt="company.name">
                </div>
              </router-link>
              <div class="space-y-2 whitespace-pre-wrap text-left text-lg font-medium leading-6 text-zinc-600 sm:space-y-4 sm:text-2xl">
                <div v-if="company.organizer" class="text-laravel flex items-center">
                  <hashtag-icon class="h-7 w-7 sm:h-8 sm:w-8"/>
                  <span>organizator</span>
                </div>
                <div class="space-y-2 font-medium leading-6 sm:space-y-4">
                  <router-link :to="{ name: 'companies.details', params: { id: company.name } }" class="flex space-x-2 transition duration-200 hover:translate-x-1">
                    <bookmark-icon class="h-7 w-7 shrink-0 sm:h-8 sm:w-8"/>
                    <span class="block font-bold tracking-wide">
                      {{ company.name }}
                    </span>
                  </router-link>
                  <div class="flex space-x-2 transition duration-200 hover:translate-x-1">
                    <map-pin-icon class="h-7 w-7 sm:h-8 sm:w-8"/>
                    <span>
                      {{ company.location }}
                    </span>
                  </div>
                  <div class="flex space-x-2 transition duration-200 hover:translate-x-1">
                    <a class="flex space-x-2" :href="company.website">
                      <at-symbol-icon class="h-7 w-7 sm:h-8 sm:w-8"/>
                      <p class="block">strona internetowa</p>
                    </a>
                  </div>
                  <div class="mx-auto my-1 flex flex-wrap space-x-1 sm:my-3 sm:space-x-3">
                    <linkedin-icon v-if="company.linkedin" :href="company.linkedin" class="p-2 text-zinc-600"/>
                    <facebook-icon v-if="company.facebook" :href="company.facebook" class="p-2 text-zinc-600"/>
                    <twitter-icon v-if="company.twitter" :href="company.twitter" class="p-2 text-zinc-600"/>
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
