<script setup>
import PageHeader from '@/components/ReusableComponents/PageHeader.vue'

let companies = ref({})

onMounted (() => {
  fetch('api/companies.json').then((response) => response.json()).then((data) => {
  companies.value = data
  })
})

</script>

<template>
  <page-header :text1="company.name"/>
</template>
