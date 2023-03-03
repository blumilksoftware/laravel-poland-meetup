<script setup>
import LoadingSpinner from '@/components/Icons/LoadingSpinner.vue'
import SpeakerCard from '@/components/Speaker/SpeakerCard.vue'
import PresentationsList from '@/components/Speaker/PresentationsList.vue'

defineProps({
  meetups: {
    type: Array,
    default: () => [],
  },
  speaker: {
    type: Object,
    default: () => {},
  },
  loading: {
    type: Boolean,
    default: true,
  },
})

</script>
<template>
  <div class="my-10 bg-white tracking-tight text-zinc-700 shadow-lg">
    <div class="mx-auto max-w-7xl p-4 sm:px-6 lg:py-24 lg:px-8">
      <div class="space-y-12">
        <LoadingSpinner v-if="!meetups.length"/>
        <div v-else class="mt-8 overflow-hidden md:mx-0">
          <SpeakerCard :meetups="meetups" :speaker="speaker"/>
          <PresentationsList :meetups="meetups" :speaker="speaker"/>
        </div>
      </div>
    </div>
  </div>
</template>
