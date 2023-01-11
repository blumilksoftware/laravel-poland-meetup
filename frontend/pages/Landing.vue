<script setup>
import HeroSection from '@/components/Landing/HeroSection.vue'
import MeetupIndicator from '@/components/Landing/MeetupIndicator.vue'
import MeetupSpeakers from '@/components/Landing/MeetupSpeakers.vue'
import AboutMeetup from '@/components/Landing/AboutMeetup.vue'
import JoinUs from '@/components/Landing/JoinUs.vue'
import Counters from '@/components/Landing/Counters.vue'
import { onMounted, ref, computed } from 'vue'
import { useFindNextMeetup } from '@/composables/useFindNextMeetup.js'

const meetups = ref([])

const findNextMeetup = computed(() => {
  if (meetups.value.length == 0) return {}
  const { nextMeetup } = useFindNextMeetup(meetups.value) 
  return nextMeetup.value
})

onMounted(async() => {
    await fetch('/api/meetups.json').then((response) => response.json()).then((data) => {
    meetups.value = data
  })
})

</script>

<template>
  <hero-section/>
  <meetup-indicator :next-meetup="findNextMeetup"/>
  <meetup-speakers :next-meetup="findNextMeetup"/>
  <about-meetup/>
  <join-us/>
  <counters/>
</template>
