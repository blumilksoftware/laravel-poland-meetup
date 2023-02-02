<script setup>
const props = defineProps({
  company: {
    type: Object,
    default: () => {},
  },
  name: {
    type: String,
    default: '',
  },
})

console.log('company', props.company)
</script>
<template>
  <div v-if="company" class="w-full">
    <div class="h-20 w-full">
      {{ company.name }}
      <img :src="company.logo" :alt="'logo'+ company.name"> 
    </div>
  </div>
</template>
