<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import MeetupHeader from '@/components/Meetup/MeetupHeader.vue'
import PresentationsList from '@/components/Meetup/PresentationsList.vue'
import NoDataError from '@/components/EmptyStates/NoDataError.vue'
import LoadingSpinner from '@/components/Icons/LoadingSpinner.vue'

let meetup = ref([])
const route = useRoute()
let loading = ref(true)
let error = ref(false)

onMounted(() => {
  async function fetchMeetup () {
    const response = await fetch('/api/meetups/' + route.params.id + '.json')
    meetup.value = await response.json()
    return meetup
  }
  fetchMeetup().then(meetup => {
    meetup
  })
  .catch(() => {
    error.value = true
  })

  loading.value = false
})

</script>

<template>
  <NoDataError :error="error" text="Brak meetupów"/>
  <LoadingSpinner v-if="loading"/>
  <div v-if="!error && !loading">
    <meetup-header :meetup="meetup"/>
    <presentations-list :presentations="meetup.presentations"/>
  </div>
</template>
