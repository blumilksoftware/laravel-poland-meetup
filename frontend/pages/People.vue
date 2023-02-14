<script setup>
import { onMounted, ref } from 'vue'
import PeopleTable from '@/components/People/PeopleTable.vue'
import PageHeader from '@/components/ReusableComponents/PageHeader.vue'

const people = ref([])

onMounted(() => {
  async function fetchPeople () {
    const response = await fetch('/api/people.json')
    people.value = await response.json()
    return people
  }
  fetchPeople().then(people => {
    people
  })
  async function fetchMeetups () {
    const response = await fetch('/api/meetups.json')
    meetups.value = await response.json()
    return meetups
  }
  fetchMeetups().then(meetups => {
    meetups
  })
})

</script>

<template>
  <page-header word1="Prelegenci"/>
  <people-table class="mt-12" :meetups="meetups" :speakers="people"/>
</template>
