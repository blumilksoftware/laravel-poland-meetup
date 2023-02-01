<script setup>
import { onMounted, ref, watch } from 'vue'
import CompaniesList from '@/components/Companies/CompaniesList.vue'

const props = defineProps({
  companies: {
    type: Array,
    default: () => [],
  },
  meetups: {
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
    <companies-list :meetups="meetups" :companies="organizers" name="Organizatorzy"/>
    <companies-list :meetups="meetups" :companies="others" name="Partnerzy"/>
  </div>
</template>
