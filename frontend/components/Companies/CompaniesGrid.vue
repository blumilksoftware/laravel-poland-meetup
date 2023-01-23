<script setup>
import { onMounted, ref, watch } from 'vue'
import { MapPinIcon, LightBulbIcon, HashtagIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  companies: {
    type: Array,
    default: () => [],
  },
})

const organizers = ref([])
const others = ref([])

function buildCompanies () {
  organizers.value = props.companies.filter(company => company.organizer)
  others.value = props.companies.filter(company => !company.organizer)
}

onMounted(() => {
  buildCompanies()
})

watch(() => props.companies, () => {
  buildCompanies()
})
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl bg-white py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <!-- <h2 class="text-center text-3xl font-bold tracking-tight text-zinc-700 sm:text-4xl">
          Organizatorzy
        </h2> -->
        <ul role="list" class="block space-y-12 divide-y divide-zinc-200 md:flex md:space-x-12 lg:space-y-0 lg:divide-y-0">
          <li v-for="(company, id) in organizers" :key="id">
            <div class="grid grid-cols-2 sm:gap-6 sm:space-y-0 md:space-x-4 lg:gap-8">
              <router-link :to="{ name: 'companies.details', params: { id: company.name } }" class="relative">
                <div class="aspect-w-2 aspect-h-1 sm:aspect-w-5 sm:aspect-h-2 mx-auto h-0">
                  <img class="object-contain" :src="company.logo" :alt="company.name">
                </div>
              </router-link>
              <div class="self-center">
                <div class="space-y-4 text-lg font-medium leading-6">
                  <div class="text-laravel flex items-center text-xl">
                    <hashtag-icon class="h-6 w-6"/>
                    <span>organizator</span>
                  </div>
                  <router-link :to="{ name: 'companies.details', params: { id: company.name } }" class="flex transition duration-200 hover:translate-x-1">
                    <light-bulb-icon class="h-6 w-6"/>
                    <span>
                      {{ company.name }}
                    </span>
                  </router-link>
                  <router-link :to="{ name: 'companies.details', params: { id: company.name } }" class="flex text-indigo-600 transition duration-200 hover:translate-x-1">
                    <map-pin-icon class="h-6 w-6"/>
                    <span>
                      {{ company.location }}
                    </span>
                  </router-link>
                </div>
              </div>
              <p class="col-span-2 leading-6 text-zinc-700">
                {{ company.bio }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bg-white text-center text-3xl font-bold tracking-tight text-zinc-700 sm:text-4xl">
      <div class="mx-auto max-w-7xl bg-white py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12">
          <h2>Partnerzy</h2>
          <ul role="list" class="space-y-12 divide-y divide-zinc-200 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0 lg:divide-y-0">
            <li v-for="(company, id) in others" :key="id">
              {{ id }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
