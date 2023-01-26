<script setup>
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = '<your access token here>'
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-74.5, 40],
  zoom: 9,
})

</script>
<template>
  <div id="map" class="absolute inset-y-0 w-full"/>
</template>
