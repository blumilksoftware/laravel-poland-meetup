<script setup>
import { ref, watch, onMounted } from 'vue'
import FacebookIcon from '@/components/Icons/FacebookIcon.vue'
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'
import TwitterIcon from '@/components/Icons/TwitterIcon.vue'
import { PresentationChartLineIcon, UserIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  meetups: {
    type: Array,
    default: () => [],
  },
  speaker: {
    type: Object,
    default: () => {},
  },
})

const presentationsCount = ref(0)

function count() {
  props.meetups.filter(function (meetup) {
    meetup.presentations.filter(function (presentation) {
      presentation.speakers.filter(function (speaker) {
        if (speaker.name === props.speaker.name)
        presentationsCount.value++
      })
    })
  })
}

function clean() {
  presentationsCount.value = 0
}

onMounted(() =>{
  count()
})

watch(props, () => {
  clean()
  count()
})

</script>
<template>
  <div class="mx-auto">
    <div class="my-12 block items-center justify-center space-y-10 lg:flex lg:space-y-0 lg:space-x-5">
      <div class="flex items-center justify-center space-x-10 lg:space-x-10">
        <img v-if="!speaker.image" src="/images/placeholders/person.webp" :alt="'avatar prelegenta' + speaker.name" class="h-24 w-24 rounded-full shadow-lg md:h-56 md:w-56">
        <img v-else :src="speaker.image" :alt="'zdjęcie prelegenta' + speaker.name" class="h-32 w-32 rounded-full shadow-lg lg:h-56 lg:w-56">
        <div class="space-y-2  lg:space-y-4 ">
          <div class="flex pt-5 transition duration-200 hover:translate-x-1">
            <user-icon class="mr-3 h-6 w-6 shrink-0 text-zinc-600 sm:h-7 sm:w-7" aria-hidden="true"/>
            <p class="text-laravel text-lg font-semibold sm:text-xl">
              {{ speaker.name }}
            </p>
          </div>
          <div class="flex transition duration-200 hover:translate-x-1">
            <presentation-chart-line-icon class="mr-3 h-6 w-6 shrink-0 text-zinc-600 sm:h-7 sm:w-7" aria-hidden="true"/>
            <p class="text-md sm:text-lg sm:font-medium">
              Prezentacje: {{ presentationsCount }}
            </p>
          </div>
          <div class="mx-auto mt-8 flex items-center space-x-5 pt-4 md:space-x-5">
            <linkedin-icon v-if="speaker.linkedin" :href="speaker.linkedin" class="h-9 w-9 pr-2 text-zinc-600 sm:h-10 sm:w-10"/>
            <facebook-icon v-if="speaker.facebook" :href="speaker.facebook" class="h-9 w-9 pr-2 text-zinc-600 sm:h-10 sm:w-10"/>
            <twitter-icon v-if="speaker.twitter" :href="speaker.twitter" class="h-9 w-9 pr-2 text-zinc-600 sm:h-10 sm:w-10"/>
          </div>
        </div>
      </div>
      <div v-if="speaker.bio" class="w-full lg:w-1/2">
        <div class="">
          <p class="mx-2 text-justify indent-10 text-base font-semibold leading-7 text-zinc-800 sm:tracking-wide">
            {{ speaker.bio }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
