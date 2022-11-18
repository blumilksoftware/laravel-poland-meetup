<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import MeetupHeader from '@/components/Meetup/MeetupHeader.vue'
import PresentationsList from '@/components/Meetup/PresentationsList.vue'

const meetup = ref([])
const route = useRoute()

onMounted(() => {
  fetch('/api/meetups/' + route.params.id + '.json').then((response) => response.json()).then((data) => {
    meetup.value = data
  })
})
</script>

<template>
  <meetup-header :meetup="meetup"/>
  <presentations-list class="mt-12" :presentations="meetup.presentations"/>
</template>
