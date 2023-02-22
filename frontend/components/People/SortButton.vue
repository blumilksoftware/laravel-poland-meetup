<script setup>
import { ChevronDownIcon, PresentationChartBarIcon } from '@heroicons/vue/24/outline'
import { watch, ref, onMounted  } from 'vue'
import { useSortedSpeakers } from '@/composables/useSortedSpeakers.js'

const props = defineProps({
  speakers: {
    type: Array,
    default: () => [],
  },
})

const sortOptions = ['ascending', 'descending']
const sortBy = ref(sortOptions[0])
const emit = defineEmits(['sorted-speakers'])

function changeSort() {
  
  if (sortBy.value === sortOptions[0]) {
    sortBy.value = sortOptions[1]
    console.log('if sortBy.value', sortBy.value)
  }
  else {
    sortBy.value = sortOptions[0]
    console.log('else sortBy.value', sortBy.value)
  }
}

watch(() => props.speakers, () => {
  const { sortedSpeakers } = useSortedSpeakers(props.speakers, sortBy.value)
  emit('sorted-speakers', sortedSpeakers.value)
})

watch(sortBy, () => {
  const { sortedSpeakers } = useSortedSpeakers(props.speakers, sortBy.value)
  emit('sorted-speakers', sortedSpeakers.value)
  console.log('watch')
})

onMounted(() => { 
  const { sortedSpeakers } = useSortedSpeakers(props.speakers, sortBy.value)
  emit('sorted-speakers', sortedSpeakers.value)
})

</script>
<template>
  <div class="flex items-center justify-center" @click="changeSort">
    <div class="min-w-56 mx-auto">
      <div class="relative">
        <span class="inline-block w-full ">
          <div class="flex py-2.5 text-left text-base font-medium leading-5 text-white ring-zinc-700/60 ring-offset-2 ring-offset-zinc-800 focus:outline-none focus:ring-2">
            <span class="hidden truncate md:block">
              Prezentacje
            </span>
            <presentation-chart-bar-icon class="h-7 w-7 md:hidden"/>
            <chevron-down-icon :class="[sortBy === 'ascending' ? '-rotate-180' : 'rotate-0', 'h-5 w-5  self-center transform ml-1 md:ml-3']" aria-hidden="true"/>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>
