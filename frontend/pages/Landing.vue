<script setup lang="ts">
import HeroSection from '@/frontend/components/Landing/HeroSection.vue'
import MeetupIndicator from '@/frontend/components/Landing/MeetupIndicator.vue'
import MeetupSpeakers from '@/frontend/components/Landing/MeetupSpeakers.vue'
import AboutMeetup from '@/frontend/components/Landing/AboutMeetup.vue'
import JoinUs from '@/frontend/components/Landing/JoinUs.vue'
import Counters from '@/frontend/components/Landing/Counters.vue'
</script>

<template>
  <hero-section></hero-section>
  <meetup-indicator></meetup-indicator>
  <meetup-speakers></meetup-speakers>
  <about-meetup></about-meetup>
  <join-us></join-us>
  <counters></counters>
</template>
