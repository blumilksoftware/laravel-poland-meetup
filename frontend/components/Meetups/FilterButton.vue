<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import FilterCategoryButton from '@/components/Meetups/FilterCategoryButton.vue'
import { XMarkIcon, TrashIcon, AdjustmentsHorizontalIcon } from '@heroicons/vue/24/outline'
import { ref, watch } from 'vue'

const props = defineProps({
  companies: {
    type: Array,
    default: () => [],
  },
  speakers: {
    type: Array,
    default: () => [],
  },
  sortedMeetups: {
    type: Array,
    default: () => [],
  },
})

const selectedCompanies = ref([])
const selectedSpeakers = ref([])

const emit = defineEmits(['updated-companies', 'updated-speakers'])

const updateSelectedCompanies = function(selectedFilters) {
  selectedCompanies.value = selectedFilters.value
}

const updateSelectedSpeakers = function(selectedFilters) {
  selectedSpeakers.value = selectedFilters.value
}

function clean () {
  selectedCompanies.value = []
  selectedSpeakers.value = []
}

watch(selectedCompanies, () => {
  emit('updated-companies', selectedCompanies.value)
})

watch(selectedSpeakers, () => {
  emit('updated-speakers', selectedSpeakers.value)
})

</script>

<template>
  <div class="flex items-end justify-center">
    <Disclosure as="div" class="relative block">
      <DisclosureButton>
        <div class="hidden w-full cursor-default space-x-3 border border-zinc-300 bg-white py-2 px-4 text-center shadow-sm focus:border-zinc-300 focus:outline-none sm:text-base sm:leading-5 md:flex">
          <div class="flex space-x-1">
            <p>Filtry</p>
            <span v-if="selectedSpeakers.length + selectedCompanies.length > 0" class="inline self-center text-sm font-semibold tracking-wider">({{ selectedSpeakers.length + selectedCompanies.length }})</span>
          </div>
          <adjustments-horizontal-icon class="h-5 w-5 self-center text-zinc-600"/>
        </div>
        <adjustments-horizontal-icon class="flex h-10 w-10 self-center text-zinc-100 md:hidden"/>
      </DisclosureButton>
      <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform -translate-x-72 opacity-0" enter-to-class="transform translate-x-0 opacity-100" leave-active-class="transition duration-100 ease-out" leave-from-class="transform translate-x-0 opacity-100" leave-to-class="transform -translate-x-72 opacity-0">
        <DisclosurePanel v-slot="{ close }" class="fixed top-0 left-0 z-50 block h-screen w-screen overflow-auto bg-white sm:w-1/2 sm:shadow-xl md:max-w-[400px]">
          <div class="mx-5">
            <div class="flex justify-end">
              <DisclosureButton class="active:scale-120 my-2 flex justify-end">
                <x-mark-icon class="my-3 h-8 w-8"/>
              </DisclosureButton>
            </div>
            <div class="block divide-y divide-zinc-100">
              <FilterCategoryButton id="companies" name="Firmy" :data="props.companies" :selected-before="selectedCompanies" @updated="updateSelectedCompanies"/>
              <FilterCategoryButton id="speakers" name="Prelegenci" :data="props.speakers" :selected-before="selectedSpeakers" @updated="updateSelectedSpeakers"/>
            </div>
            <div class="flex justify-center">
              <DisclosureButton class="mx-7 mt-12 flex w-full justify-center rounded-sm bg-zinc-300 text-center shadow-lg focus:bg-zinc-300 active:bg-zinc-300" @click="close">
                <div class="my-3 flex justify-center">
                  <span class="mx-2 text-center font-bold">
                    Pokaż meetupy 
                  </span>
                  <span v-if="selectedSpeakers.length || selectedCompanies.length" class="m2-8 text-center tracking-wider">({{ sortedMeetups.length }})</span>
                </div>
              </DisclosureButton>
            </div>
            <div class="m-4 flex justify-center">
              <button class="my-4 text-center transition hover:scale-105" @click="clean">
                <div class="flex space-x-2">
                  <trash-icon class="h-5 w-5 self-center"/> 
                  <span class="text-center text-sm font-semibold">
                    Wyczyść filtry
                  </span>
                </div>
              </button>
            </div>  
          </div>
        </DisclosurePanel>
      </transition>
    </Disclosure>
  </div>
</template>
