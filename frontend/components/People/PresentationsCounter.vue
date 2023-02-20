<script setup>
import { ref, watch } from 'vue'

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

const countPresentations = ref(0)
console.log(props.meetups)
console.log(props.speaker)


function count () { 
  return props.meetups.filter(function(meetup) {
    meetup.presentations.filter(function(presentation) {
      presentation.speakers.filter(function(speaker) {
        if(speaker.name === props.speaker.name) {
          countPresentations.value++
        }
      })
    })
  })
}

watch(() => props.meetups, () => {
  count()
})

const emit = defineEmits(['counted'])

watch(countPresentations, () => {
  emit('counted', { 
    ...props.speaker,
    countedPresentations: countPresentations.value,
  })
})

</script>
<template>
  <div>{{ countPresentations }}</div>
</template>
