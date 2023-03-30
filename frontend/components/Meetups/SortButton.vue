<script setup>
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/vue/24/outline'
import { ref, onMounted, watch } from 'vue'
import { useSortedMeetups } from '@/composables/useSortedMeetups.js'
import CheckedIcon from '@/components/Icons/CheckedIcon.vue'

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

watch(() => props.data, () => {
  const { sortedMeetups } = useSortedMeetups(props.data, sortBy.value.name)
  emit('updated', sortedMeetups)
})

watch(sortBy, () => {
  const { sortedMeetups } = useSortedMeetups(props.data, sortBy.value.name)
  emit('updated', sortedMeetups)
})

onMounted(() => { 
  const { sortedMeetups } = useSortedMeetups(props.data, sortBy.value.name)
  emit('updated', sortedMeetups)
})
</script>

<template>
  <div class="flex">
    <div class="min-w-56 mx-auto">
      <Listbox v-slot="{ open }" v-model="sortBy" as="div">
        <div class="relative flex items-center">
          <ListboxButton>
            <div class="flex w-full cursor-pointer">
              <div class="md:hidden">
                <bars-arrow-up-icon v-if="sortBy.name === 'oldestFirst'" class="h-9 w-9 text-zinc-100"/>
                <bars-arrow-down-icon v-else class="h-9 w-9 text-zinc-100"/>
              </div>
              <div class="hidden w-full space-x-3 border border-zinc-300 bg-white py-2 px-4 focus:border-zinc-300 focus:outline-none sm:text-sm md:flex">
                <span class="block truncate">
                  Sortuj
                </span>
                <bars-arrow-up-icon v-if="sortBy.name === 'oldestFirst'" class="h-6 w-6 text-zinc-700"/>
                <bars-arrow-down-icon v-else class="h-6 w-6 text-zinc-700"/>
              </div>
            </div>
          </ListboxButton>
          <div v-if="open" class="absolute right-1 z-50 mt-1 w-60 bg-white shadow-lg">
            <ListboxOptions static class="shadow-xs max-h-60 overflow-auto py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5">
              <ListboxOption v-for="option in sortOptions" :key="option.name" v-slot="{ selected, active }" :value="option">
                <div :class="`${ active ? 'bg-zinc-200' : 'text-zinc-700' } cursor-default select-none relative py-2 pl-8 pr-4`">
                  <span :class="`${ selected ? 'font-semibold' : 'font-normal' } block`">
                    {{ option.value }}
                  </span>
                  <span v-if="selected" :class="`${ active ? 'text-zinc-600' : 'text-zinc-600' } absolute inset-y-0 left-0 flex items-center pl-1.5`">
                    <CheckedIcon/>
                  </span>
                </div>
              </ListboxOption>
            </ListboxOptions>
          </div>
        </div>
      </Listbox>
    </div>
  </div>
</template>
