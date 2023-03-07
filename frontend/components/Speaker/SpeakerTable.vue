<script setup>
import SpeakerCard from '@/components/Speaker/SpeakerCard.vue'
import PresentationsList from '@/components/Speaker/PresentationsList.vue'
import LoadingSpinner from '@/components/Icons/LoadingSpinner.vue'

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
  <div class="my-10  bg-white tracking-tight text-zinc-700 shadow-lg">
    <div class="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
      <div class="space-y-12">
        <LoadingSpinner v-if="!meetups.length"/>
        <div v-else class="mt-8 overflow-hidden md:mx-0">
          <div>
            <h2 class="first-letter:text-laravel lg:py-18 w-full border-b py-10 px-7 text-2xl font-bold sm:px-6 md:text-4xl lg:px-8">
              Wizytówka
            </h2>
            <SpeakerCard :meetups="meetups" :speaker="speaker"/>
          </div>
          <div>
            <h2 class="first-letter:text-laravel lg:py-18 w-full border-b py-10 px-7 text-2xl font-bold sm:px-6 md:text-4xl lg:px-8">
              Meetupowy wkład
            </h2>
            <PresentationsList :meetups="meetups" :speaker="speaker"/>
          </div>      
        </div>
      </div>
    </div>
  </div>
</template>
