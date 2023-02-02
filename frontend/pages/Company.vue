<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PageHeader from '@/components/ReusableComponents/PageHeader.vue'
import CompanyDetails from '@/components/Company/CompanyDetails.vue'


let companies = ref({})
const route = useRoute()

onMounted (() => {
  async function fetchCompanies () {
    const response = await fetch('/api/companies.json')
    companies.value = await response.json()
    return companies
  }
  fetchCompanies().then(companies => {
    companies
  })
})

</script>

<template>
  <page-header :word1="route.params.id" :companies="companies"/>
  <company-details :companies="companies"/>
</template>
