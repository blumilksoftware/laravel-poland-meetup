<script setup>
import { onMounted, watch } from 'vue'
import mapboxgl from 'mapbox-gl'
import addNavigation from '@/components/Companies/Map/navigation.js'
import addMarkersandPopups from '@/components/Companies/Map/markerAndPopup.js'

const props = defineProps({
  companies: {
    type: Array,
    default: () => [],
  },
})

const zoom = 7
const center = {
  center: [19, 52],
  zoom,
}

onMounted(() => {
  mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    ...center,
  })

  addNavigation(map, center)
  addMarkersandPopups(map, props.companies)
  watch(() => props.companies, () => {
    addMarkersandPopups(map, props.companies)
  })
})

</script>

<template>
  <div id="map" class="relative inset-y-0 h-[600px] w-full shrink"/>
</template>
