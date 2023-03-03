<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import CompanyDetails from '@/components/Company/CompanyDetails.vue'
import CompanyHeader from '@/components/Company/CompanyHeader.vue'
import ListTabs from '@/components/Company/ListTabs.vue'
import CompanyMap from '@/components/Company/CompanyMap.vue'
import NoDataError from '@/components/EmptyStates/NoDataError.vue'
import LoadingSpinner from '@/components/Icons/LoadingSpinner.vue'

const route = useRoute()
let meetups = ref([])
let companies = ref([])
let company = ref({})
let loading = ref(true)
let error = ref(false)

const findCompany = computed(() => {
  if (companies.value.length === 0) return {}

  for(let elem of companies.value) {
    if(elem.slug === route.params.id) {
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
  .catch(() => {
    error.value = true
  })
  async function fetchMeetups () {
    const response = await fetch('/api/meetups.json')
    meetups.value = await response.json()
    return meetups
  }
  fetchMeetups().then(meetups => {
    meetups
  })
  .catch(() => {
    error.value = true
  })

  loading.value = false
})

</script>

<template>
  <NoDataError :error="error" text="Nie ma takiej firmy"/>
  <LoadingSpinner v-if="loading"/>
  <div v-if="!error && !loading">
    <company-header :name="route.params.id" :company="company.value"/>
    <company-details :name="route.params.id" :company="company.value" :meetups="meetups"/>
    <list-tabs :name="route.params.id" :meetups="meetups"/>
    <company-map :name="route.params.id" :company="company.value"/>
  </div>
</template>
