<script setup>

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
  <div>
    Speaker list
  </div>
</template>
