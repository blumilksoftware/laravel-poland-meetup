<script setup>
import { onMounted, ref } from 'vue'
import CompaniesTable from '@/components/Companies/CompaniesTable.vue'
import InvitationToJoin from '@/components/Companies/InvitationToJoin.vue'
import CompaniesMap from '@/components/Companies/Map/CompaniesMap.vue'
import PageHeader from '@/components/ReusableComponents/PageHeader.vue'

const companies = ref([])
const meetups = ref([])

onMounted(async () => {
  await fetch('/api/companies.json').then((response) => response.json()).then((data) => {
    companies.value = data
  })
  await fetch('/api/meetups.json').then((response) => response.json()).then((data) => {
    meetups.value = data
  })
})

</script>

<template>
  <page-header word1="Organizatorzy" word2="i" word3="partnerzy" sentence="Dołącz do nas i promój swoją firmę!"/>
  <invitation-to-join/>
  <companies-table class="mt-12" :companies="companies" :meetups="meetups"/>
  <companies-map :data="companies"/>
</template>
