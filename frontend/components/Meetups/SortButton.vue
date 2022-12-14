<script setup>
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { BarsArrowDownIcon } from '@heroicons/vue/24/outline'
import { ref, onMounted, watch } from 'vue'
import { useSortMeetups } from '@/components/Meetups/useSortMeetups.js'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const sortOptions = [
  { 
    name: 'default', 
    value: 'Sortuj domyślnie',
  },
  { 
    name: 'newestFirst', 
    value: 'Sortuj od najnowszych',
  },
  { 
    name: 'oldestFirst', 
    value: 'Sortuj od najstarszych',
  },
]

const sortBy = ref(sortOptions[0])

const emit = defineEmits(['updated'])

// const onChange = computed (() => {
//   const { sortMeetups } = useSortMeetups(props.data, sortBy)
//   emit('updated', sortMeetups)
//   return sortMeetups
// })


watch(() => props.data, () => {
  const { sortMeetups } = useSortMeetups(props.data, sortBy.value.name)
  emit('updated', sortMeetups)
})

watch(sortBy, () => {
  const { sortMeetups } = useSortMeetups(props.data, sortBy.value.name)
  emit('updated', sortMeetups)
})

onMounted(() => { 
  const { sortMeetups } = useSortMeetups(props.data, sortBy.value.name)
  emit('updated', sortMeetups)
})
</script>

<template>
  <div class="flex items-center justify-center ">
    <div class="min-w-56 mx-auto">
      <Listbox v-slot="{ open }" v-model="sortBy" as="div">
        <div class="relative">
          <span class="inline-block w-full ">
            <ListboxButton>
              <div class="flex md:hidden">
                <bars-arrow-down-icon class="h-9 w-9"/>
              </div>
              <div class="focus:shadow-outline-zinc relative hidden w-full cursor-default rounded-md border border-zinc-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm transition duration-150 ease-in-out focus:border-zinc-300 focus:outline-none sm:text-sm sm:leading-5 md:flex">
                <span class="block truncate">
                  {{ sortBy.value }}
                </span>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg class="h-5 w-5 text-zinc-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
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

