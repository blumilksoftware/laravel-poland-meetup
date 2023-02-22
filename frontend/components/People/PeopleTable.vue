<script setup>
import { ref, watch, onMounted } from 'vue'
import { useCountedPresentations } from '@/composables/useCountedPresentations.js'
import PeopleList from '@/components/People/PeopleList.vue'
import LoadingSpinner from '@/components/Icons/LoadingSpinner.vue'

const props = defineProps({
  speakers: {
    type: Array,
    default: () => [],
  },
  meetups: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: true,
  },
})

let updatedSpeakers = ref([])

watch(() => props.meetups, () => {
  const { newArrayOfSpeakers } = useCountedPresentations(props.meetups, props.speakers)
  updatedSpeakers.value = newArrayOfSpeakers
})

onMounted(() => {
  const { newArrayOfSpeakers } = useCountedPresentations(props.meetups, props.speakers)
  updatedSpeakers.value = newArrayOfSpeakers
})

</script>
<template>
  <div :loading="!loading" class="my-10 bg-white tracking-tight text-zinc-700 shadow-lg">
    <div class="mx-auto max-w-7xl p-4 sm:px-6 lg:py-24 lg:px-8">
      <div class="space-y-12">
        <h2 class="first-letter:text-laravel lg:py-18 w-full justify-center border-b py-10 px-7 text-2xl font-bold sm:px-6 md:text-4xl lg:px-8">
          Nasi prelegenci
        </h2>
        <LoadingSpinner v-if="!updatedSpeakers.length"/>
        <div v-else class="mt-8 overflow-hidden rounded-lg shadow md:mx-0">
          <PeopleList :speakers="updatedSpeakers"/>
        </div>
      </div>
    </div>
  </div>
</template>
