<script setup>
import { onMounted, ref, watch } from 'vue'

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
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <h2 class="text-3xl font-bold tracking-tight text-center sm:text-4xl">
          Organizatorzy
        </h2>
        <ul role="list" class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0 divide-y divide-zinc-200">
          <li v-for="(company, id) in organizers" :key="id">
            <div class="space-y-4 sm:grid sm:grid-rows-2 sm:gap-6 sm:space-y-0 lg:gap-8 divide-y-1 bg-green-100">
              <router-link :to="{ name: 'companies.details', params: { id: company.name } }" class="relative block hover:bg-zinc-50">
                <div class="aspect-w-3 aspect-h-1 sm:aspect-w-3 sm:aspect-h-2 mx-auto h-0 bg-red-100">
                  <img class="object-contain" :src="company.logo" :alt="company.name">
                </div>
              </router-link>
              <div class="lg:col-span-2 bg-blue-200">
                <div class="space-y-4">
                  <div class="space-y-1 text-lg font-medium leading-6">
                    <h3>{{ company.name }}</h3>
                    <p class="text-indigo-600">
                      {{ company.location }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
