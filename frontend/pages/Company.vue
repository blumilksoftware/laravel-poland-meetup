<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import CompanyDetails from '@/components/Company/CompanyDetails.vue'
import CompanyHeader from '@/components/Company/CompanyHeader.vue'
import ListTabs from '@/components/Company/ListTabs.vue'
import CompanyMap from '@/components/Company/CompanyMap.vue'
import LoadingSpinner from '@/components/Icons/LoadingSpinner.vue'
import router from '@/router'

const meetups = ref([])
const companies = ref([])
const company = ref({})
const route = useRoute()
const loading = ref(true)

function findCompany () {
  company.value = {}
  let path = '' 

  for(let elem of companies.value) {
    if(elem.slug === route.params.id) {
      company.value = elem
      path = company.value.slug
      loading.value = false
      break
    } else  {
      path ='/page-not-found'
    }
  }

  router.push({ path: path })
}

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
    router.push({ path: '/404' })
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
    router.push({ path: '/404' })
  })

  findCompany()
})

watch(companies, ()=> {
  findCompany()
})

watch(route, () => {
  findCompany()
  window.scrollTo(0,0)
})

</script>

<template>
  <LoadingSpinner v-if="loading"/>
  <div v-if="!loading">
    <company-header :company="company"/>
    <company-details :company="company" :meetups="meetups"/>
    <list-tabs :name="company.name" :meetups="meetups"/>
    <company-map :company="company"/>
  </div>
</template>
