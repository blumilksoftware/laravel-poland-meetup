<script setup>
import LoadingSpinner from '@/components/Icons/LoadingSpinner.vue'
import SpeakerList from '@/components/Speaker/SpeakerList.vue'

const props = defineProps({
  meetups: {
    type: Array,
    default: () => [],
  },
  speaker: {
    type: Array,
    default: () => [],
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
        <div v-else class="mt-8 overflow-hidden rounded-lg shadow md:mx-0">
          <SpeakerList :meetups="meetups" :speaker="speaker"/>
        </div>
      </div>
    </div>
  </div>
</template>
