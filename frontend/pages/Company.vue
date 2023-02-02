<script setup>
import { useRoute } from 'vue-router'
import PageHeader from '@/components/ReusableComponents/PageHeader.vue'

let companies = ref({})
const route = useRoute()

onMounted (() => {
  fetch('api/companies.json').then((response) => response.json()).then((data) => {
  companies.value = data
  })
})

</script>

<template>
  <page-header :text1="company.name"/>
</template>
