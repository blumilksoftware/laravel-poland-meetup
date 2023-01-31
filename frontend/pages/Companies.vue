<script setup>
import { onMounted, ref } from 'vue'
import CompaniesTable from '@/components/Companies/CompaniesTable.vue'
import CompaniesHeader from '@/components/Companies/CompaniesHeader.vue'
import InvitationToJoin from '@/components/Companies/InvitationToJoin.vue'
import CompaniesMap from '@/components/Companies/Map/CompaniesMap.vue'
// import PageHeader from '@/components/ReusableComponents/PageHeader.vue'

const companies = ref([])

onMounted(async () => {
  await fetch('/api/companies.json').then((response) => response.json()).then((data) => {
    companies.value = data
  })
})

</script>

<template>
  <companies-header/>
  <companies-map :companies="companies"/>
  <!-- <page-header word1="organizatorzy" word2="i" word3="partnerzy" sentence="Dołącz do nas i promoj swoją firmę!"/> -->
  <companies-table class="mt-12" :companies="companies"/>
  <invitation-to-join/>
</template>
