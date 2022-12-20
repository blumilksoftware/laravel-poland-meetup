<script setup>
  // import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { Disclosure, DisclosurePanel, DisclosureButton } from '@headlessui/vue'
  import { ChevronDownIcon } from '@heroicons/vue/24/outline'
  import { ref } from 'vue'


  const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  id: {
    type: String, 
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
})

const selectedFilters = ref([])
const emit = defineEmits(['updated'])

function onChange() {
  emit('updated', selectedFilters.value)
}

</script>
<template>
  <Disclosure v-slot="{ open }" as="div" class="group relative w-full min-w-0 flex-1 overflow-hidden bg-white p-4 text-center text-sm font-medium text-zinc-900 md:relative md:pr-8">
    <h3 class="inline-block w-full">
      <DisclosureButton class="focus:shadow-outline-zinc m-2 flex w-full shrink-0 cursor-default items-center justify-between truncate py-1 px-4 text-left transition duration-150 ease-in-out sm:text-sm sm:leading-5 md:rounded-md md:border-zinc-300 md:shadow-sm">
        <div class="flex text-zinc-700">
          <span class="truncate text-base uppercase">{{ name }}</span>
          <transition enter-active-class="transition ease-in-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in-out duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <span v-if="selectedFilters.length" class="mx-3 self-center font-bold">( {{ selectedFilters.length }} )</span>
          </transition>
        </div>
        <span class="mx-3 w-4 items-center md:flex">
          <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform']" aria-hidden="true"/>
        </span>
      </DisclosureButton>
    </h3>
    <transition enter-active-class="transition ease-in-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <DisclosurePanel selected :class="`${ open ? 'bg-white' : 'text-zinc-700' } flex w-full rounded-md py-3 pl-2 pr-4 md:absolute md:left-1 md:top-9 md:z-40 md:w-fit md:overflow-auto md:shadow-lg`">
        <div class="space-y-6">
          <div v-for="elem in props.data" :key="elem.id" class="flex items-center">
            <input :id="elem.name" v-model="selectedFilters" :value="elem.name" type="checkbox" :name="elem.name" class="h-5 w-5 rounded border-zinc-300 text-zinc-600 focus:ring-zinc-500" @change="onChange">
            <label :for="elem.name" class="ml-3 text-base text-zinc-500">{{ elem.name }} </label>
          </div>
        </div>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>
