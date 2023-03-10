<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import MeetupHeader from '@/components/Meetup/MeetupHeader.vue'
import PresentationsList from '@/components/Meetup/PresentationsList.vue'
import LoadingSpinner from '@/components/Icons/LoadingSpinner.vue'
import router from '@/router'

const meetup = ref({})
const route = useRoute()
let loading = ref(true)
let notFound = ref(false)

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
    notFound.value = true
    router.push({ path: '/404' })
  })

  if(notFound.value) {
    loading.value = false
  }
})

</script>
<template>
  <LoadingSpinner v-if="loading"/>
  <div v-if="!loading">
    <meetup-header :meetup="meetup"/>
    <presentations-list :presentations="meetup.presentations"/>
  </div>
</template>
