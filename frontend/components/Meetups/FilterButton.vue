<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const props = defineProps({
  data: {
    type: Object,
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
})

const emit = defineEmits(['updated'])

function onChange() {
  emit('updated', selectedFilters.value)
}

const selectedFilters = ref([])

console.log(props.data)

</script>

<template>
  <Disclosure v-slot="{ open }" as="div" class="relative px-4 py-6">
    <h3 class="-mx-2 -my-3 flow-root">
      <DisclosureButton class="text-md flex w-full items-center justify-between px-2 py-3 text-gray-400">
        <span class="text-gray-700">{{ name }}</span>
        <span class="ml-6 flex items-center">
          <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform']" aria-hidden="true"/>
        </span>
      </DisclosureButton>
    </h3>
    <DisclosurePanel class="absolute left-2 z-50 rounded-md bg-gray-100 py-3 pl-2 pr-4">
      <div class="space-y-6">
        <div v-for="elem in data" :key="elem.id" class="flex items-center">
          <input v-model="selectedFilters" @change="onChange" :id="elem.name" :value="elem.name" type="checkbox" :name="elem.name" class="h-4 w-4 rounded border-gray-300 text-zinc-600 focus:ring-zinc-500">
          <label :for="elem.name" class="ml-3 text-sm text-gray-500">{{ elem.name }} </label>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
