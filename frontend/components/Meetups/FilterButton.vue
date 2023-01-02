<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import FilterCategoryButton from '@/components/Meetups/FilterCategoryButton.vue'
import { XMarkIcon, TrashIcon } from '@heroicons/vue/24/outline'
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
  <div>
    <Disclosure as="div" class="relative block">
      <DisclosureButton class="text-md w-fit cursor-default bg-white px-8 py-2 text-center font-semibold sm:shadow">
        <span>
          Filtry
        </span>
        <span v-if="selectedSpeakers.length + selectedCompanies.length > 0" class="inline justify-center text-sm tracking-wider">({{ selectedSpeakers.length + selectedCompanies.length }})</span>
      </DisclosureButton>
      <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform -translate-x-72 opacity-0" enter-to-class="transform translate-x-0 opacity-100" leave-active-class="transition duration-100 ease-out" leave-from-class="transform translate-x-0 opacity-100" leave-to-class="transform -translate-x-72 opacity-0">
        <DisclosurePanel v-slot="{ close }" class="fixed top-0 left-0 z-50 block h-screen w-screen overflow-auto bg-white sm:w-1/2 sm:shadow-xl md:w-1/3 ">
          <div class="mx-5">
            <div class="flex justify-end">
              <DisclosureButton class="active:scale-120 my-2 flex justify-end">
                <x-mark-icon class="m-3 h-8 w-8"/>
              </DisclosureButton>
            </div>
            <div class="m-4 flex justify-center">
              <button class="text-center transition hover:scale-105" @click="clean">
                <div class="my-3 flex space-x-1">
                  <span class="mx-2 text-center font-bold">
                    Wyczyść filtry
                  </span>
                  <trash-icon class="h-5 w-5"/> 
                </div>
              </button>
            </div>  
            <div class="block divide-y divide-zinc-100">
              <FilterCategoryButton id="companies" name="Firmy" :data="props.companies" :selected-before="selectedCompanies" @updated="updateSelectedCompanies"/>
              <FilterCategoryButton id="speakers" name="Prelegenci" :data="props.speakers" :selected-before="selectedSpeakers" @updated="updateSelectedSpeakers"/>
            </div>
            <div class="flex justify-center">
              <DisclosureButton class="my-12 mx-7 flex w-full justify-center rounded-sm bg-zinc-300 text-center shadow-lg focus:bg-zinc-300 active:bg-zinc-300" @click="close">
                <div class="my-3 flex justify-center">
                  <span class="mx-2 text-center font-bold">
                    Pokaż meetupy 
                  </span>
                  <span v-if="sortedMeetups" class="m2-8 text-center tracking-wider">({{ sortedMeetups.length }})</span>
                </div>
              </DisclosureButton>
            </div>
          </div>
        </DisclosurePanel>
      </transition>
    </Disclosure>
  </div>
</template>
