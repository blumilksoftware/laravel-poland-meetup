<script setup>
import ApplicationNavbar from '@/layout/ApplicationNavbar.vue'
import ApplicationFooter from '@/layout/ApplicationFooter.vue'
</script>

<template>
  <div class="flex flex-col">
    <application-navbar/>
    <div class="container mx-auto">
      <router-view :key="$route.fullPath"/>
    </div>
    <application-footer/>
  </div>
</template>
