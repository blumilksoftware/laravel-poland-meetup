<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import PageHeader from '@/components/ReusableComponents/PageHeader.vue'
import SpeakerTable from '@/components/Speaker/SpeakerTable.vue'
import NoDataError from '@/components/EmptyStates/NoDataError.vue'
import LoadingSpinner from '@/components/Icons/LoadingSpinner.vue'

const meetups = ref([])
const people = ref([])
const route = useRoute()
let loading = ref(true)
let error = ref(false)
const speaker = ref({})
const slug = route.params.id

    for(let item of people.value) {
      if(item.slug === slug) {
        speaker.value = item
      }
    }


onMounted(() => {
  async function fetchMeetups () {
    const response = await fetch('/api/meetups.json')
    meetups.value = await response.json()
    return meetups.value
  }
  fetchMeetups().then(meetups => {
    meetups
  })
  .catch(() => {
    error.value = true
  })
  async function fetchPeople () {
    const response = await fetch('/api/people.json')
    people.value = await response.json()
    return people.value
  }
  fetchPeople().then(people => {
    people
  })
  .catch(() => {
    error.value = true
  })

  loading.value = false
})

</script>
<template>
  <NoDataError :error="error" text="Brak prelegenta"/>
  <LoadingSpinner v-if="loading"/>
  <div v-if="!error && !loading">
    <PageHeader word1="Marek Tenus"/>
    <SpeakerTable :loading="loading" :meetups="meetups" :speaker="speaker"/>
  </div>
</template>
