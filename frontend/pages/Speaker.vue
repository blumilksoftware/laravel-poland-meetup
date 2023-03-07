<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import PageHeader from '@/components/ReusableComponents/PageHeader.vue'
import SpeakerTable from '@/components/Speaker/SpeakerTable.vue'
import PeopleSlider from '@/components/Speaker/PeopleSlider.vue'
import NoDataError from '@/components/EmptyStates/NoDataError.vue'
import LoadingSpinner from '@/components/Icons/LoadingSpinner.vue'
import router from '@/router'

const meetups = ref([])
const people = ref([])
const route = useRoute()
const slug = route.params.id
let loading = ref(true)
let error = ref(false)
const speaker = ref({})

function findSpeaker() {
  for(let person of people.value) { 
    if(person.slug === slug) {
      speaker.value = person
    }
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

  findSpeaker()
})

watch(people, () => {
  findSpeaker()
})

watch(route, () => {
  findSpeaker()
  console.log(route.params.id)
  router.push({ name: 'people.details', params: { id: 'error' } })
  console.log(route.params.id)
  router.push({ name: 'people.details', params: { id: speaker.value.slug } })
  console.log(route.params.id)
})

</script>
<template :is="Component" :key="route.path">
  <NoDataError :error="error" text="Brak prelegenta"/>
  <LoadingSpinner v-if="loading"/>
  <div v-if="!error && !loading">
    <PageHeader :word1="speaker.name"/>
    <SpeakerTable :loading="loading" :meetups="meetups" :speaker="speaker"/>
    <PeopleSlider :loading="loading" :meetups="meetups" :speakers="people"/>
  </div>
</template>
