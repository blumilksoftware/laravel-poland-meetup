<script setup>
import { onMounted, ref } from 'vue'
import PeopleTable from '@/components/People/PeopleTable.vue'

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
})

</script>

<template>
  <people-table class="mt-12" :speakers="people"/>
</template>
