<script setup>
import { onMounted, ref, watch } from 'vue'
import CompaniesList from '@/components/Companies/CompaniesList.vue'

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
  <div class="bg-white py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
    <companies-list :companies="organizers" name="Organizatorzy"/>
    <companies-list :companies="others" name="Partnerzy"/>
  </div>
</template>
