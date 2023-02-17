<script setup>
import { onMounted, ref } from 'vue'
import CompaniesTable from '@/components/Companies/CompaniesTable.vue'
import InvitationToJoin from '@/components/Companies/InvitationToJoin.vue'
import CompaniesMap from '@/components/Companies/Map/CompaniesMap.vue'
import PageHeader from '@/components/ReusableComponents/PageHeader.vue'
import ServerError from '@/components/Errors/ServerError.vue'
import LoadingSpinner from '@/components/Icons/LoadingSpinner.vue'

const companies = ref([])
const meetups = ref([])
let error = ref(false)
let loading = ref(true)

onMounted(async () => {
  await fetch('/api/companies.json').then((response) => response.json()).then((data) => {
    companies.value = data
  })
  .catch((e) => {
    error.value = true
    console.log(e)
  })
  await fetch('/api/meetups.json').then((response) => response.json()).then((data) => {
    meetups.value = data
  })
  .catch((e) => {
    error.value = true
    console.log(e)
  })

  loading.value = false
})

</script>
<template>
  <ServerError :error="error"/>
  <LoadingSpinner v-if="loading"/>
  <div v-if="!error && !loading">
    <page-header word1="Organizatorzy" word2="i" word3="partnerzy" sentence="Dołącz do nas i promuj swoją firmę!"/>
    <invitation-to-join/>
    <companies-table class="mt-12" :loading="loading" :companies="companies" :meetups="meetups"/>
    <companies-map :data="companies"/>
  </div>
</template>
