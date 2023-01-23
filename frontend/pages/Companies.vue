<script setup>
import { onMounted, ref } from 'vue'
import CompaniesGrid from '@/components/Companies/CompaniesGrid.vue'
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
  <companies-grid class="mt-12" :companies="companies"/>
</template>
