<script setup>
import { HashtagIcon, MapPinIcon, LinkIcon, BuildingOffice2Icon, GlobeAmericasIcon } from '@heroicons/vue/24/outline'
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'

const props = defineProps({
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
        <ul v-auto-animate role="list" :class="['gap-y-7 space-y-16 divide-y divide-zinc-200 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:space-y-0 lg:divide-y-0', companies.length === 1 ? 'lg:grid-cols-1' : '']">
          <li v-for="(company, id) in companies" :key="id" :class="['hover:shadow-lg', companies.length === 1 ? 'hover:shadow-none' : '']">
            <div class="my-5 ml-3 grid grid-cols-2 truncate text-base text-zinc-500 sm:gap-6 sm:space-y-0 md:space-x-4 lg:gap-8">
              <router-link :to="{ name: 'companies.details', params: { id: company.name } }" class="relative m-auto">
                <div>
                  <building-office-2-icon v-if="!company.logo" class="h-20 w-20 text-zinc-400" :alt="company.name"/>
                  <img v-else class="max-h-12 w-auto object-contain" :src="company.logo" :alt="company.name">
                </div>
              </router-link>
              <div class="space-y-4 self-center text-lg font-medium leading-6">
                <div v-if="company.organizer" class="text-laravel flex items-center text-xl">
                  <hashtag-icon class="h-6 w-6"/>
                  <span>organizator</span>
                </div>
                <div class="space-y-4 text-lg font-medium leading-6">
                  <router-link :to="{ name: 'companies.details', params: { id: company.name } }" class="flex space-x-2 transition duration-200 hover:translate-x-1">
                    <link-icon class="h-5 w-5 self-center"/>
                    <span class="flex text-xl font-bold tracking-wide text-zinc-600">
                      {{ company.name }}
                    </span>
                  </router-link>
                  <div class="flex space-x-2 text-indigo-600 transition duration-200 hover:translate-x-1">
                    <map-pin-icon class="h-6 w-6"/>
                    <span>
                      {{ company.location }}
                    </span>
                  </div>
                  <div class=" flex space-x-3 self-center">
                    <a class="flex space-x-2 transition duration-200 hover:scale-110" :src="company.website">
                      <globe-americas-icon class="h-7 w-7 text-zinc-600"/>
                    </a>
                    <a class="flex space-x-2 transition duration-200 hover:hover:scale-110">
                      <linkedin-icon :href="company.linkedin" class="h-7 w-7 text-zinc-600"/>
                    </a>
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
