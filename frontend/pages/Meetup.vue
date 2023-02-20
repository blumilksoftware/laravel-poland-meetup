<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import MeetupHeader from '@/components/Meetup/MeetupHeader.vue'
import PresentationsList from '@/components/Meetup/PresentationsList.vue'
import ServerError from '@/components/EmptyStates/ServerError.vue'
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
  .catch((e) => {
    error.value = true
    console.log(e)
  })

  loading.value = false
})

</script>

<template>
  <ServerError :error="error"/>
  <LoadingSpinner v-if="loading"/>
  <div v-if="!error && !loading">
    <meetup-header :meetup="meetup"/>
    <presentations-list class="mt-12" :presentations="meetup.presentations"/>
  </div>
</template>
