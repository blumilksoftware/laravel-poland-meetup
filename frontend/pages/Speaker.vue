<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import PageHeader from '@/components/ReusableComponents/PageHeader.vue'
import SpeakerTable from '@/components/Speaker/SpeakerTable.vue'
import PeopleSlider from '@/components/Speaker/PeopleSlider.vue'
import LoadingSpinner from '@/components/Icons/LoadingSpinner.vue'
import router from '@/router'

const meetups = ref([])
const people = ref([])
const speaker = ref({})
const route = useRoute()
const loading = ref(true)

function findSpeaker() {
  for(let person of people.value) { 
    if(person.slug === route.params.id) {
      speaker.value = person
      loading.value = false
      break
    }
  }

  if (!Object.keys(speaker.value).length) {
    router.push({
      name: 'not.found',
      params: { pathMatch: route.path.substring(1).split('/') },
    })
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
    router.push({
      name: 'not.found',
      params: { pathMatch: route.path.substring(1).split('/') },
    })
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
    router.push({
      name: 'not.found',
      params: { pathMatch: route.path.substring(1).split('/') },
    })
  })
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
  <div v-if="!loading">
    <PageHeader :word1="speaker.name"/>
    <SpeakerTable :meetups="meetups" :speaker="speaker"/>
    <PeopleSlider :speaker="speaker" :meetups="meetups" :speakers="people"/>
  </div>
</template>
