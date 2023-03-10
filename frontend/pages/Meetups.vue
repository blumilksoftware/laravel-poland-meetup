<script setup>
import { onMounted, ref } from 'vue'
import MeetupsTable from '@/components/Meetups/MeetupsTable.vue'

const meetups = ref([])
const companies = ref([])
const people = ref([])
const loading = ref(true)
let error = ref(false)

onMounted(async () => {
  await fetch('/api/meetups.json').then((response) => response.json()).then((data) => {
    meetups.value = data
  })
  .catch(() => {
    error.value = true
  })
  await fetch('/api/companies.json').then((response) => response.json()).then((data) => {
    companies.value = data
  })
  .catch(() => {
    error.value = true
  })
  await fetch('/api/people.json').then((response) => response.json()).then((data) => {
    people.value = data
  })
  .catch(() => {
    error.value = true
  })

  loading.value = false
})

</script>
<template>
  <meetups-table :error="error" :loading="loading" :meetups="meetups" :companies="companies" :speakers="people"/>
</template>
