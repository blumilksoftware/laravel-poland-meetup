<script setup>
import ListTabs from '@/components/Company/ListTabs.vue'

const props = defineProps({
  company: {
    type: Object,
    default: () => {},
  },
  meetups: {
    type: Array,
    default: () => [],
  },
  name: {
    type: String,
    default: '',
  },
})

</script>
<template>
  <div class="my-12 bg-white text-center text-3xl font-bold tracking-tight text-zinc-700 shadow-lg sm:text-xl">
    <div class="mx-auto block w-full max-w-7xl py-12 px-4 sm:flex sm:px-6 lg:px-8 lg:py-24">
      <list-tabs :name="name" :meetups="meetups"/>
    </div>
  </div>
</template>
