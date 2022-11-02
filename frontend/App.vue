<script setup>
import ApplicationNavbar from '@/frontend/layout/ApplicationNavbar.vue'
import ApplicationFooter from '@/frontend/layout/ApplicationFooter.vue'
</script>

<template>
  <div class="flex flex-col">
    <application-navbar></application-navbar>
    <div class="container mx-auto">
      <router-view></router-view>
    </div>
    <application-footer></application-footer>
  </div>
</template>
