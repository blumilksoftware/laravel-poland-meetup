<script setup>
import { ChevronDownIcon, PresentationChartBarIcon, UserGroupIcon } from '@heroicons/vue/24/outline'
import { watch, ref, onMounted, computed } from 'vue'
import { useSortedSpeakers } from '@/composables/useSortedSpeakers.js'

const props = defineProps({
  speakers: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: '',
  },
  sortBy: {
    type: String, 
    default: 'presentations',
  },
})

const ascending = ref(true)
const sortOptions = { 
    ascending: 'ascending', 
    descending: 'descending',
  }

const emit = defineEmits(['sorted-speakers'])

function changeSort() {
  ascending.value = !ascending.value
}

const setSortOption = computed(() => {
  if (ascending.value) {
    return sortOptions.ascending
  }
  else {
    return sortOptions.descending
  }
})

watch(() => props.speakers, () => {
  const { sortedSpeakers } = useSortedSpeakers(props.speakers, setSortOption.value, props.sortBy)
  emit('sorted-speakers', sortedSpeakers.value)
})

watch(ascending, () => {
  const { sortedSpeakers } = useSortedSpeakers(props.speakers, setSortOption.value, props.sortBy)
  emit('sorted-speakers', sortedSpeakers.value)
})

onMounted(() => {
  const { sortedSpeakers } = useSortedSpeakers(props.speakers, setSortOption.value, props.sortBy)
  emit('sorted-speakers', sortedSpeakers.value)
})

</script>
<template>
  <div class="flex" @click="changeSort()">
    <div class="min-w-56">
      <div class="relative">
        <span class="inline-block w-full ">
          <div class="flex cursor-pointer py-2.5 text-left text-base font-medium leading-5 text-white ring-zinc-700/60 ring-offset-2 ring-offset-zinc-800 focus:outline-none focus:ring-2">
            <span class="hidden truncate md:block">
              {{ label }}
            </span>
            <presentation-chart-bar-icon v-if="label === 'Prezentacje'" class="h-7 w-7 md:hidden"/>
            <user-group-icon v-if="label === 'Imię i nazwisko'" class="ml-2 h-7 w-7 md:hidden"/>
            <chevron-down-icon :class="[ascending ? '-rotate-180' : 'rotate-0', 'h-4 w-4 md:h-5 md:w-5  self-center transform md:ml-3']" aria-hidden="true"/>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>
