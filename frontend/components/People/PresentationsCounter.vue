<script setup>
import { ref } from 'vue'

const props = defineProps({
  meetups: {
    type: Array, 
    default: () => [],
  },
  speakerName: {
    type: String,
    default: '',
  },
})

const countPresentations = ref(0)
props.meetups.filter(function(meetup) {
  meetup.presentations.filter(function(presentation) {
    presentation.speakers.filter(function(speaker) {
      if(speaker.name === props.speakerName) {
        countPresentations.value++}
    })
  })
})
</script>
<template>
  <div>{{ countPresentations }}</div>
</template>
