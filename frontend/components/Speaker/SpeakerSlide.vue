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

onMounted(() =>{
  count()
})

watch(props, () => {
  count()
})

</script>
<template>
  <div class="mx-auto h-full">
    <div class="my-16 flex items-center justify-center space-x-10">
      <img v-if="!speaker.image" :src="speaker.avatar" :alt="'avatar prelegenta' + speaker.name" class="20 h-20 rounded-full shadow-lg md:h-40 md:w-40">
      <img v-else :src="speaker.image" :alt="'zdjęcie prelegenta' + speaker.name" class="h-20 w-20 rounded-full shadow-lg md:h-40 md:w-40">
      <div class="space-y-4">
        <div class="flex transition duration-200 hover:translate-x-1">
          <user-icon class="mr-3 h-6 w-6 shrink-0 text-zinc-600 sm:h-7 sm:w-7" aria-hidden="true"/>
          <p class="text-laravel text-md font-semibold sm:text-lg">
            {{ speaker.name }}
          </p>
        </div>
        <div class="flex transition duration-200 hover:translate-x-1">
          <presentation-chart-line-icon class="mr-3 h-6 w-6 shrink-0 text-zinc-600 sm:h-7 sm:w-7" aria-hidden="true"/>
          <p class="text-md sm:text-md sm:font-medium">
            Prezentacje: {{ presentationsCount }}
          </p>
        </div>
        <div class="mx-auto mt-9 flex items-center space-x-5 pt-4 md:space-x-5">
          <linkedin-icon v-if="speaker.linkedin" :href="speaker.linkedin" class="h-9 w-9 pr-2 text-zinc-600 sm:h-10 sm:w-10"/>
          <facebook-icon v-if="speaker.facebook" :href="speaker.facebook" class="h-9 w-9 pr-2 text-zinc-600 sm:h-10 sm:w-10"/>
          <twitter-icon v-if="speaker.twitter" :href="speaker.twitter" class="h-9 w-9 pr-2 text-zinc-600 sm:h-10 sm:w-10"/>
        </div>
      </div>
    </div>
  </div>
</template>
