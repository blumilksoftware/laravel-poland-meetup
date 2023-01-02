
<script setup>
import { computed, ref, watch } from 'vue'
import { CheckIcon } from '@heroicons/vue/24/outline'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/vue'


const props = defineProps({
  data: {
    type: Array,
    default: null,
  },
  name: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  selectedBefore: {
    type: Array,
    default: () => [],
  },
})

const query = ref('')
const selectedElements = ref(props.selectedBefore)
const filteredElements = computed(() =>
  query.value === ''
    ? props.data
    : props.data.filter((item) => {
        return item.name.toLowerCase().includes(query.value.toLowerCase())
      }),
)

const emit = defineEmits(['updated'])

watch(selectedElements, () => {
  emit('updated', selectedElements)
})

</script>
<template>
  <Combobox v-model="selectedElements" multiple as="div" class="w-full">
    <ComboboxInput placeholder="Szukaj..." class="my-1 w-4/5 rounded-md border border-zinc-300 bg-white py-2 pl-3 shadow-sm focus:border-zinc-300 focus:outline-none focus:ring-1 focus:ring-zinc-500 sm:text-sm" :display-value="(item) => item?.name" @change="query = $event.target.value"/>
    <transition enter-active-class="transition ease-in-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <ComboboxOptions static class="my-3 block w-full divide-y divide-zinc-100 overflow-auto rounded-md">
        <ComboboxOption v-for="item in filteredElements" v-slot="{ active, selected }" :key="item.name" :value="item.name" as="div">
          <li :class="['relative cursor-default select-none', active ? 'bg-zinc-100 text-zinc-700' : 'text-zinc-700', selected ? 'bg-zinc-200' : '']">
            <div class="mx-3 flex items-center py-3">
              <img v-if="item.image === '#'" src="/images/speakers/placeholder.webp" alt="" class="h-6 w-6 shrink-0 rounded-full">
              <img v-else-if="item.image" :src="item.image" alt="" class="h-6 w-6 shrink-0 rounded-full">
              <span :class="['ml-3 truncate text-base text-zinc-500', selected && 'font-semibold']">
                {{ item.name }}
              </span>
            </div>
            <span v-if="selected" :class="['absolute inset-y-0 right-0 flex items-center pr-4 hover:text-red-200 mr-6', active ? 'text-zinc-700' : 'text-zinc-500']">
              <check-icon class="h-5 w-5" aria-hidden="true"/>
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </transition>
  </Combobox>
</template>
