<script setup>
import { onMounted, ref } from 'vue'
import MeetupsTable from '@/components/Meetups/MeetupsTable.vue'

const meetups = ref([])

onMounted(() => {
  fetch('/api/meetups.json').then((response) => response.json()).then((data) => {
    meetups.value = data
  })
})
</script>

<template>
  <meetups-table class="mt-12" :meetups="meetups"></meetups-table>
</template>
