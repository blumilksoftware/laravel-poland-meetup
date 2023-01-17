<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import MeetupHeader from '@/components/Meetup/MeetupHeader.vue'
import PresentationsList from '@/components/Meetup/PresentationsList.vue'
import Gallery from '@/components/Meetup/Gallery.vue'

let meetup = ref([])
const route = useRoute()

onMounted(() => {
  async function fetchMeetup () {
    const response = await fetch('/api/meetups/' + route.params.id + '.json')
    meetup.value = await response.json()
    return meetup
  }
  fetchMeetup().then(meetup => {
    meetup
  })
})

</script>

<template>
  <meetup-header :meetup="meetup"/>
  <presentations-list class="mt-12" :presentations="meetup.presentations"/>
  <Gallery v-if="meetup.images" :meetup="meetup"/>
</template>
