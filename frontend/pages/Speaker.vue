<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import PageHeader from '@/components/ReusableComponents/PageHeader.vue'
import SpeakerTable from '@/components/Speaker/SpeakerTable.vue'
import PeopleSlider from '@/components/Speaker/PeopleSlider.vue'
import NoDataError from '@/components/EmptyStates/NoDataError.vue'
import LoadingSpinner from '@/components/Icons/LoadingSpinner.vue'

const meetups = ref([])
const people = ref([])
const route = useRoute()
let loading = ref(true)
let error = ref(false)
const speaker = ref({})

function findSpeaker() {
  for(let person of people.value) { 
    if(person.slug === route.params.id) {
      speaker.value = person
    }
  }
  loading.value = false
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

  findSpeaker()
})

watch(people, () => {
  findSpeaker()
})

watch(route, () => {
  findSpeaker()
  window.scrollTo(0,0)
})

</script>
<template>
  <LoadingSpinner v-if="loading"/>
  <NoDataError :error="error" text="Brak prelegenta"/>
  <div v-if="!error && !loading">
    <PageHeader :word1="speaker.name"/>
    <SpeakerTable :meetups="meetups" :speaker="speaker"/>
    <PeopleSlider :speaker="speaker" :meetups="meetups" :speakers="people"/>
  </div>
</template>
