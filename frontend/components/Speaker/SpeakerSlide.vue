<script setup>
import { ref, watch, onMounted } from 'vue'
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
  <div class="mx-auto flex h-full rounded-xl hover:bg-zinc-50">
    <div class="my-6 mx-auto block space-y-6 md:my-16">
      <img v-if="!speaker.image" :src="speaker.avatar" :alt="'avatar prelegenta' + speaker.name" class="mx-auto h-32 w-32 rounded-full shadow-lg md:h-40 md:w-40">
      <img v-else :src="speaker.image" :alt="'zdjęcie prelegenta' + speaker.name" class="mx-auto h-32 w-32 rounded-full shadow-lg md:h-40 md:w-40">
      <div class="block space-y-4">
        <div class="flex items-center">
          <user-icon class="mr-1 h-5 w-5 shrink-0 text-zinc-600 sm:h-7 sm:w-7 lg:mr-3" aria-hidden="true"/>
          <p class="text-laravel text-md font-semibold sm:text-lg">
            {{ speaker.name }}
          </p>
        </div>
        <div class="flex items-center">
          <presentation-chart-line-icon class="mr-1 h-4 w-4 shrink-0 text-zinc-600 sm:h-7 sm:w-7 lg:mr-3" aria-hidden="true"/>
          <p class="text-md sm:text-md sm:font-medium">
            Prezentacje: {{ presentationsCount }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
