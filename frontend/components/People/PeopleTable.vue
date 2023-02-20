<script setup>
import { ref } from 'vue'
import { PresentationChartBarIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import FacebookIcon from '@/components/Icons/FacebookIcon.vue'
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'
import TwitterIcon from '@/components/Icons/TwitterIcon.vue'
import PresentationsCounter from '@/components/People/PresentationsCounter.vue'
import SortButton from '@/components/People/SortButton.vue'

const props = defineProps({
  speakers: {
    type: Array,
    default: () => [],
  },
  meetups: {
    type: Array,
    default: () => [],
  },
})
// sortowanie ludzi po ilości prezentacji:
// 1. trzeba wiedzieć kto ile zrobił prezentacji
//     klikam na przycisk, do przycisku wysyłam tam imię speakera i listą meetapów
//     liczy prezentacje i zwraca obiekt speakera powiększony o liczbę prezentacji 
// 2. zapisuję wszystkie obiekty z 1. do tablicy.
// 3. wysyłam do people table
// 4. ponownie renderuje listę speakerów na nowej liście


let sortedSpeakers = ref(props.speakers)
let updatedSpeakers = ref([])

const updatedSpeaker = function(updatedSpeaker){ 
  updatedSpeakers.value.push(updatedSpeaker)
console.log('sortedSpeakers', sortedSpeakers.value)
console.log('updatedSpeaker', updatedSpeaker)
}

const sortedUpdatedSpeakers = function(speakers) {
  sortedSpeakers.value = speakers.value
}

</script>

<template>
  <div class="my-10 bg-white tracking-tight text-zinc-700 shadow-lg">
    <div class="lg:py-18 mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
      <div class="space-y-12">
        <h2 class="first-letter:text-laravel lg:py-18 w-full justify-center border-b py-10 px-7 text-2xl font-bold sm:px-6 md:text-4xl lg:px-8">
          Nasi prelegenci
        </h2>
        <div class="mt-8 overflow-hidden rounded-lg shadow md:mx-0">
          <table class="min-w-full divide-y divide-zinc-800">
            <thead class="bg-zinc-800">
              <tr>
                <th scope="col" class="w-1/6 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"/>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-white">
                  Imię i nazwisko
                </th>
                <th scope="col" class="hidden py-2.5 text-left text-base font-medium leading-5 text-white ring-zinc-700/60 ring-offset-2 ring-offset-zinc-800 focus:outline-none focus:ring-2 md:table-cell">Kontakt</th>
                <th scope="col" class="flex py-2.5 text-left text-base font-medium leading-5 text-white ring-zinc-700/60 ring-offset-2 ring-offset-zinc-800 focus:outline-none focus:ring-2">
                  <SortButton :speakers="sortedSpeakers" @sorted-speakers="sortedUpdatedSpeakers"/>
                </th>
                <th scope="col" class="py-3.5 pl-3 pr-4 sm:pr-6">
                  <span class="sr-only">Zobacz profil</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-zinc-200 bg-white">
              <!-- <tr v-for="speaker in speakers" :key="speaker.name" class="group hover:bg-zinc-50"> -->
              <tr v-for="speaker in sortedSpeakers" :key="speaker.name" class="group hover:bg-zinc-50">
                <td class="justify-fit whitespace-nowrap py-2 pl-4 pr-3 text-sm font-medium text-zinc-900 sm:py-3 sm:pl-6">
                  <img v-if="!speaker.image.length" :src="speaker.avatar" class="h-8 w-8 rounded-full md:h-12 md:w-12">
                  <img v-else :src="speaker.image" class="h-8 w-8 rounded-full md:h-12 md:w-12">
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-left text-sm font-semibold text-zinc-500 transition duration-200 group-hover:scale-110 sm:text-base md:text-lg">
                  <router-link :to="{ name: 'people.details', params: { id: speaker.name } }" class="w-full focus:z-10 focus:font-bold ">
                    {{ speaker.name }}
                  </router-link>
                </td>
                <td class="hidden whitespace-nowrap px-3 py-4 text-sm text-zinc-500 md:table-cell">
                  <div class="mx-auto flex items-center space-x-2 md:space-x-5">
                    <linkedin-icon v-if="speaker.linkedin" :href="speaker.linkedin" class="h-8 w-8 pr-2 text-zinc-600"/>
                    <facebook-icon v-if="speaker.facebook" :href="speaker.facebook" class="h-8 w-8 pr-2 text-zinc-600"/>
                    <twitter-icon v-if="speaker.twitter" :href="speaker.twitter" class="h-8 w-8 pr-2 text-zinc-600"/>
                  </div>
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-zinc-500 transition duration-200 group-hover:font-bold">
                  <PresentationsCounter :meetups="meetups" :speaker="speaker" @counted="updatedSpeaker"/>
                </td>
                <td class="justify-end whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6">
                  <router-link :to="{ name: 'people.details', params: { id: speaker.name } }" class="w-full focus:z-10 focus:outline-none">
                    <chevron-right-icon class="flex h-5 w-5 justify-end transition duration-200 group-hover:translate-x-2"/>
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
