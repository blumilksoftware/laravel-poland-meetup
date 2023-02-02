<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import PageHeader from '@/components/ReusableComponents/PageHeader.vue'
import CompanyDetails from '@/components/Company/CompanyDetails.vue'
import CompanyHeader from '@/components/Company/CompanyHeader.vue'

const route = useRoute()
let companies = ref([])
let company = ref({})

const findCompany = computed(() => {
  if (companies.value.length === 0) return {}

  for(let elem of companies.value) {
    if(elem.name === route.params.id) {
      return elem
    }
  }
  return company.value
})

company.value = findCompany

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
  <page-header :word1="route.params.id" :company="company"/>
  <company-header :name="route.params.id" :company="company"/>
  <company-details :name="route.params.id" :company="company"/>
</template>
