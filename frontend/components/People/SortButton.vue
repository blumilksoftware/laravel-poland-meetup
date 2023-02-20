<script setup>
import { Disclosure, DisclosureButton, Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { PresentationChartBarIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
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
    name: 'default', 
    value: 'domyślnie',
  },
  { 
    name: 'ascending', 
    value: 'rosnąco',
  },
  { 
    name: 'descdending', 
    value: 'malejąco',
  },
]

const sorted = ref(sortOptions[0].name)

const emit = defineEmits(['sorted-speakers'])

watch(() => props.speakers, () => {
  const { sortedSpeakers } = useSortedSpeakers(props.speakers, sorted.value.name)
  emit('sorted-speakers', sortedSpeakers)
})

watch(sorted, () => {
  const { sortedSpeakers } = useSortedSpeakers(props.speakers, sorted.value.name)
  emit('sorted-speakers', sortedSpeakers)
})

onMounted(() => { 
  const { sortedSpeakers } = useSortedSpeakers(props.speakers, sorted.value.name)
  emit('sorted-speakers', sortedSpeakers)
})

</script>
<template>
  <!-- <Disclosure v-slot="{ open }" v-model="sorted" as="div" class="">
    <DisclosureButton>
      <div class="flex">
        <span class="hidden sm:table-cell">
          Prezentacje
        </span>
        <presentation-chart-bar-icon class="h-6 w-6 sm:hidden"/>
        <chevron-down-icon :class="[open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform ml-3']" aria-hidden="true"/>
      </div>
    </DisclosureButton>
  <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform -translate-x-72 opacity-0" enter-to-class="transform translate-x-0 opacity-100" leave-active-class="transition duration-100 ease-out" leave-from-class="transform translate-x-0 opacity-100" leave-to-class="transform -translate-x-72 opacity-0">
  </transition>
  </Disclosure> -->


  <div class="flex items-center justify-center ">
    <div class="min-w-56 mx-auto">
      <Listbox v-slot="{ open }" v-model="sorted" as="div">
        <div class="relative">
          <span class="inline-block w-full ">
            <ListboxButton>
              <!-- <div class="mr-3 flex md:hidden">
                <bars-arrow-down-icon class="h-9 w-9"/>
              </div> -->
              <div class="focus:shadow-outline-zinc relative hidden w-full cursor-default rounded-md border border-zinc-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm transition duration-150 ease-in-out focus:border-zinc-300 focus:outline-none sm:text-sm sm:leading-5 md:flex">
                <span class="block truncate">
                  {{ sorted }}
                </span>
                <chevron-down-icon :class="[open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform ml-3']" aria-hidden="true"/>
              </div>
            </ListboxButton>
          </span>
          <transition leave-active-class="transition ease-in-out duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="open" class="absolute right-1 z-50 mt-1 w-60 rounded-md bg-white shadow-lg">
              <ListboxOptions static class="shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5">
                <ListboxOption v-for="option in sortOptions" :key="option.name" v-slot="{ selected, active }" :value="option">
                  <div :class="`${ active ? 'bg-zinc-200' : 'text-zinc-700' } cursor-default select-none relative py-2 pl-8 pr-4`">
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
