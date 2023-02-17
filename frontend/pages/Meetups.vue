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
  .catch((e) => {
    error.value = true
    console.log(e)
  })
  await fetch('/api/companies.json').then((response) => response.json()).then((data) => {
    companies.value = data
  })
  .catch((e) => {
    error.value = true
    console.log(e)
  })
  await fetch('/api/people.json').then((response) => response.json()).then((data) => {
    people.value = data
  })
  .catch((e) => {
    error.value = true
    console.log(e)
  })

  loading.value = false
})

</script>
<template>
  <meetups-table class="mt-12" :error="error" :loading="loading" :meetups="meetups" :companies="companies" :speakers="people"/>
</template>
