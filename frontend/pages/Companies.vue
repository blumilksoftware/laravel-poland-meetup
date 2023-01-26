<script setup>
import { onMounted, ref } from 'vue'
import CompaniesTable from '@/components/Companies/CompaniesTable.vue'
import CompaniesHeader from '@/components/Companies/CompaniesHeader.vue'
import InvitationToJoin from '@/components/Companies/InvitationToJoin.vue'
// import CompaniesMap from '@/components/Companies/CompaniesMap.vue'
// import PageHeader from '@/components/ReusableComponents/PageHeader.vue'

const companies = ref([])

onMounted(() => {
  fetch('/api/companies.json').then((response) => response.json()).then((data) => {
    companies.value = data
  })
})
</script>

<template>
  <companies-header/>
  <invitation-to-join/>
  <!-- <page-header text1="organizatorzy" text2="i" text3="partnerzy" sentence="Dołącz do nas i promoj swoją firmę!"/> -->
  <companies-table class="mt-12" :companies="companies"/>
  <!-- <companies-map/> -->
</template>
