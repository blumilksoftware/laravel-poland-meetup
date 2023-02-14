<script setup>
import CompaniesMap from '@/components/Companies/Map/CompaniesMap.vue'

defineProps({
  company: {
    type: Object,
    default: () => {},
  },
  name: {
    type: String,
    default: '',
  },
})

</script>
<template>
  <div class="my-10 bg-white tracking-tight text-zinc-700 shadow-lg">
    <div class="lg:py-18 mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
      <div class="my-5 w-full">
        <div v-if="company.coordinates" class="align-center w-full">
          <h2 class="first-letter:text-laravel lg:py-18 w-full justify-center border-b py-6 px-7 text-2xl font-bold sm:px-6 md:text-4xl lg:px-8">
            Lokalizacja
          </h2>
          <companies-map class="my-5" :data="company" :zoom="15" :center="[company.coordinates.lng, company.coordinates.lat]"/>
        </div>
      </div>
    </div>
  </div>
</template>
