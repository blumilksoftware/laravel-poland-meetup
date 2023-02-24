<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import PageHeader from '@/components/ReusableComponents/PageHeader.vue'
import SpeakerTable from '@/components/Speaker/SpeakerTable.vue'
import NoDataError from '@/components/EmptyStates/NoDataError.vue'
import LoadingSpinner from '@/components/Icons/LoadingSpinner.vue'

let meetups = ref([])
let people = ref([])
const route = useRoute()
let loading = ref(true)
let error = ref(false)

const getSpeaker = route.params.id.replace('-', ' ').toUpperCase()
console.log(getSpeaker)

onMounted(() => {
  async function fetchMeetups () {
    const response = await fetch('/api/meetups.json')
    meetups.value = await response.json()
    return meetups.value
  }
  fetchMeetups().then(meetups => {
    meetups
  })
  .catch((e) => {
    error.value = true
    console.log(e)
  })
  async function fetchPeople () {
    const response = await fetch('/api/people.json')
    people.value = await response.json()
    return people.value
  }
  fetchPeople().then(people => {
    people
  })
  .catch((e) => {
    error.value = true
    console.log(e)
  })

  loading.value = false
})

</script>



<template>
  <NoDataError :error="error" text="Brak prelegenta"/>
  <LoadingSpinner v-if="loading"/>
  <div v-if="!error && !loading">
    <PageHeader word="Imię"/>
    <SpeakerTable :error="error" :loading="loading" :meetups="meetups" :speakers="people"/>
  </div>
</template>
