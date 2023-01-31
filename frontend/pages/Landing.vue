<script setup>
import PageHeader from '@/components/ReusableComponents/PageHeader.vue'
import MeetupIndicator from '@/components/Landing/MeetupIndicator.vue'
import MeetupSpeakers from '@/components/Landing/MeetupSpeakers.vue'
import AboutMeetup from '@/components/Landing/AboutMeetup.vue'
import JoinUs from '@/components/Landing/JoinUs.vue'
import Counters from '@/components/Landing/Counters.vue'
import { onMounted, ref, computed } from 'vue'
import { useFindNextMeetup } from '@/composables/useFindNextMeetup.js'

const meetups = ref([])
let nextMeetup = ref(null)

const findNextMeetup = computed(() => {
  if (meetups.value.length === 0) return {}
  const { nextMeetup } = useFindNextMeetup(meetups.value)
  return nextMeetup.value
})

nextMeetup.value = findNextMeetup

onMounted(async() => {
  await fetch('/api/meetups.json').then((response) => response.json()).then((data) => {
    meetups.value = data
  })
})

</script>

<template>
  <page-header word1="Laravel" word2="Poland" word3="Meetup" sentence="It is literally true that you can succeed best and quickest by helping others to succeed. - Napolean Hill"/>
  <meetup-indicator :next-meetup="nextMeetup"/>
  <meetup-speakers :next-meetup="nextMeetup"/>
  <about-meetup/>
  <join-us/>
  <counters/>
</template>
