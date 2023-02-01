<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  meetups: {
    type: Array,
    default: () => [],
  },
  company: {
    type: String,
    default: () => '',
  },
})

let meetups = ref(new Set())
let presentations = ref(new Set()) 
let speakers = ref(new Set())

const filterPresentations = () => {
  return props.meetups.filter(function(meetup) {
    meetup.presentations.filter(function(presentationProps) {
      presentationProps.speakers.forEach(speaker => {
        if (speaker.company === props.company) {
          presentations.value.add(presentationProps.title)
          + speakers.value.add(speaker.name)
          + meetups.value.add(meetup.id)
        }
      })
    })
  })
}


watch(() => props.meetups, () => {
  filterPresentations()
})

</script>
<template>
  <div class="my-5 grid grid-cols-3">
    <div v-if="meetups.size > 0">
      <p class="text-laravel border-laravel text-3xl hover:scale-110">
        {{ meetups.size }}
      </p>
      <p class="ml-2 self-center">
        meetupy
      </p>
    </div>
    <div v-if="presentations.size > 0">
      <p class="text-laravel border-laravel text-3xl hover:scale-110">
        {{ presentations.size }}
      </p>
      <p class="ml-2 self-center">
        prezentacje
      </p>
    </div>
    <div v-if="speakers.size > 0">
      <p class="text-laravel border-laravel text-3xl hover:scale-110">
        {{ speakers.size }}
      </p>
      <p class="ml-2 self-center">
        prelegenci
      </p>
    </div>
  </div>
</template>
