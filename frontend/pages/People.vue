<script setup>
import { onMounted, ref } from 'vue'
import PeopleTable from '@/components/People/PeopleTable.vue'
import PageHeader from '@/components/ReusableComponents/PageHeader.vue'
import NoDataError from '@/components/EmptyStates/NoDataError.vue'
import LoadingSpinner from '@/components/Icons/LoadingSpinner.vue'

const people = ref([])
const meetups = ref([])
let error = ref(false)
let loading = ref(true)

onMounted(() => {
  async function fetchPeople () {
    const response = await fetch('/api/people.json')
    people.value = await response.json()
    return people
  }
  fetchPeople().then(people => {
    people
  })
  .catch(() => {
    error.value = true
  })
  async function fetchMeetups () {
    const response = await fetch('/api/meetups.json')
    meetups.value = await response.json()
    return meetups
  }
  fetchMeetups().then(meetups => {
    meetups
  })
  .catch(() => {
    error.value = true
  })

  loading.value = false
})

</script>

<template>
  <NoDataError :error="error" text="Brak prelegentów"/>
  <LoadingSpinner v-if="loading"/>
  <div v-if="!error && !loading">
    <page-header word1="Prelegenci"/>
    <people-table class="mt-12" :meetups="meetups" :speakers="people"/>
  </div>
</template>
