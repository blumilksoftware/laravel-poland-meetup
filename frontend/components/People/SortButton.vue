<script setup>
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { ChevronDownIcon, PresentationChartBarIcon } from '@heroicons/vue/24/outline'
import { watch, ref, onMounted  } from 'vue'
import { useSortedSpeakers } from '@/composables/useSortedSpeakers.js'

const props = defineProps({
  speakers: {
    type: Array,
    default: () => [],
  },
})
const sortOptions = [
  { 
    name: 'ascending', 
    value: 'rosnąco',
  },
  { 
    name: 'descending', 
    value: 'malejąco',
  },
]

const sortBy = ref(sortOptions[0])
const emit = defineEmits(['sorted-speakers'])

watch(() => props.speakers, () => {
  const { sortedSpeakers } = useSortedSpeakers(props.speakers, sortBy.value.name)
  emit('sorted-speakers', sortedSpeakers.value)
})

watch(sortBy, () => {
  const { sortedSpeakers } = useSortedSpeakers(props.speakers, sortBy.value.name)
  emit('sorted-speakers', sortedSpeakers.value)
})

onMounted(() => { 
  const { sortedSpeakers } = useSortedSpeakers(props.speakers, sortBy.value.name)
  emit('sorted-speakers', sortedSpeakers.value)
})

</script>
<template>
  <div class="flex items-center justify-center">
    <div class="min-w-56 mx-auto">
      <Listbox v-slot="{ open }" v-model="sortBy" as="div">
        <div class="relative">
          <span class="inline-block w-full ">
            <ListboxButton>
              <div class="flex py-2.5 text-left text-base font-medium leading-5 text-white ring-zinc-700/60 ring-offset-2 ring-offset-zinc-800 focus:outline-none focus:ring-2">
                <span class="hidden truncate md:block">
                  Prezentacje
                </span>
                <presentation-chart-bar-icon class="h-7 w-7 md:hidden"/>
                <chevron-down-icon :class="[open ? '-rotate-180' : 'rotate-0', 'h-5 w-5  self-center transform ml-3']" aria-hidden="true"/>
              </div>
            </ListboxButton>
          </span>
          <transition leave-active-class="transition ease-in-out duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="open" class="absolute right-1 z-50 mt-1 w-40 rounded-md bg-white shadow-lg">
              <ListboxOptions static class="shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5">
                <ListboxOption v-for="option in sortOptions" :key="option.name" v-slot="{ selected, active }" :value="option">
                  <div :class="`${ active ? 'bg-zinc-800' : 'text-zinc-700' } cursor-default select-none relative py-2 pl-8 pr-4`">
                    <span :class="`${ selected ? 'font-semibold' : 'font-normal' } block`">
                      {{ option.value }}
                    </span>
                    <span v-if="selected" :class="`${ active ? 'text-zinc-600' : 'text-zinc-600' } absolute inset-y-0 left-0 flex items-center pl-1.5`">
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </span>
                  </div>
                </ListboxOption>
              </ListboxOptions>
            </div>
          </transition>
        </div>
      </Listbox>
    </div>
  </div>
</template>
