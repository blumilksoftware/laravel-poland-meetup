<script setup>
import { onMounted, ref } from 'vue'
import CompaniesTable from '@/components/Companies/CompaniesTable.vue'
import CompaniesHeader from '@/components/Companies/CompaniesHeader.vue'

const companies = ref([])

onMounted(() => {
  fetch('/api/companies.json').then((response) => response.json()).then((data) => {
    companies.value = data
  })
})
</script>

<template>
  <companies-header/>
  <companies-table class="mt-12" :companies="companies"/>
</template>
