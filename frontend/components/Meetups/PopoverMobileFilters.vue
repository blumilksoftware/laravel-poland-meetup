<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import MobileFilters from '@/components/Meetups/MobileFilters.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const props = defineProps({
  companies: {
    type: Array,
    default: () => [],
  },
  speakers: {
    type: Array,
    default: () => [],
  },
})

const selectedCompanies = ref([])
const selectedSpeakers = ref([])

const emit = defineEmits(['updatedCompanies', 'updatedSpeakers'])

const updateSelectedCompanies = function(selectedFilters) {
  selectedCompanies.value = selectedFilters
  emit('updatedCompanies', selectedCompanies.value)
}

const updateSelectedSpeakers = function(selectedFilters) {
  selectedSpeakers.value = selectedFilters
  emit('updatedSpeakers', selectedSpeakers.value)
}

</script>

<template>
  <Popover class="relative block">
    <PopoverButton class="text-md w-fit bg-white px-8 py-2 text-center font-semibold shadow">
      Filtry
    </PopoverButton>
    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-out" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
      <PopoverPanel v-slot="{ close }" class="absolute z-10 block h-fit w-screen divide-y divide-zinc-100 bg-white shadow-xl">
        <div class="flex justify-end">
          <PopoverButton class="active:scale-120 mx-7 my-2 flex justify-end" @click="close">
            <x-mark-icon class="m-3 h-7 w-7"/>
          </PopoverButton>
        </div>
        <div class="block divide-y divide-zinc-100">
          <MobileFilters id="companies" name="Firmy" :data="props.companies" @updated="updateSelectedCompanies"/>
          <MobileFilters id="speakers" name="Prelegenci" :data="props.speakers" @updated="updateSelectedSpeakers"/>
        </div>
        <div class="flex justify-center ">
          <transition enter-active-class="transition duration-200 ease-out" enter-from-class="transform scale-50 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-200 ease-out" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-50 opacity-0">
            <PopoverButton class="my-12 mx-7 flex w-full justify-center rounded-sm bg-zinc-300 text-center shadow-lg focus:bg-zinc-300 active:bg-zinc-300" @click="close">
              <span class="mx-8 my-2 text-center font-bold">
                Zamknij
              </span>
            </PopoverButton>
          </transition>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
