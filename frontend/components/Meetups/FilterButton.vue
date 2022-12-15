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

</script>

<template>
  <Disclosure v-slot="{ open }" as="div" class="relative pr-8">
    <h3 class="inline-block w-full">
      <DisclosureButton class="focus:shadow-outline-zinc mx-2 flex w-full shrink-0 cursor-default items-center justify-between truncate rounded-md border border-zinc-300 bg-white py-1 px-4 text-left shadow-sm transition duration-150 ease-in-out focus:border-zinc-300 focus:outline-none sm:text-sm sm:leading-5">
        <span class="truncate text-base text-zinc-700">{{ name }}</span>
        <transition enter-active-class="transition ease-in-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in-out duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <span v-if="selectedFilters.length" class="duration:100 font-bold text-zinc-600 transition">({{ selectedFilters.length }})</span>
        </transition>
        <span class="ml-1 flex w-4 items-center">
          <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform']" aria-hidden="true"/>
        </span>
      </DisclosureButton>
    </h3>
    <transition enter-active-class="transition ease-in-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <DisclosurePanel class="absolute left-1 top-9 z-40 w-fit overflow-auto rounded-md bg-white py-3 pl-2 pr-4 shadow-lg">
        <div class="space-y-6">
          <div v-for="elem in props.data" :key="elem.id" class="flex items-center">
            <input :id="elem.name" v-model="selectedFilters" :value="elem.name" type="checkbox" :name="elem.name" class="h-4 w-4 rounded border-zinc-300 text-zinc-600 focus:ring-zinc-500" @change="onChange">
            <label :for="elem.name" class="ml-3 text-sm text-zinc-500">{{ elem.name }} </label>
          </div>
        </div>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>
