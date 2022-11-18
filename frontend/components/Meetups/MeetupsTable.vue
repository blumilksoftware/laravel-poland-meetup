<script setup>
import { CalendarIcon, ChevronRightIcon, MapPinIcon } from '@heroicons/vue/24/outline'

defineProps({
  meetups: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="overflow-hidden bg-white">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="meetup in meetups" :key="meetup.id">
        <router-link :to="{ name: 'meetups.details', params: { id: meetup.id } }" class="block hover:bg-gray-50">
          <div class="flex items-center p-4 sm:px-6">
            <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
              <div class="truncate">
                <div class="flex text-sm">
                  <p class="text-laravel truncate font-medium">
                    {{ meetup.name }}
                  </p>
                </div>
                <div class="mt-2 flex">
                  <div class="flex items-center gap-4 text-sm text-gray-500">
                    <div class="flex">
                      <calendar-icon class="mr-1.5 h-5 w-5 shrink-0 text-gray-400" aria-hidden="true"/>
                      <time :datetime="meetup.date">{{ meetup.dateFull }}</time>
                    </div>
                    <div class="flex">
                      <map-pin-icon class="mr-1.5 h-5 w-5 shrink-0 text-gray-400" aria-hidden="true"/>
                      {{ meetup.location }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4 shrink-0 sm:mt-0 sm:ml-5">
                <div class="flex -space-x-1 overflow-hidden">
                  <img v-for="speaker in meetup.speakers" :key="speaker.id" class="inline-block h-8 w-8 rounded-full ring-2 ring-white" :src="speaker.avatar" :alt="speaker.name" :title="speaker.name">
                </div>
              </div>
            </div>
            <div class="ml-5 shrink-0">
              <chevron-right-icon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
