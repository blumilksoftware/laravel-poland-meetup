<script setup>
import { onMounted, watch } from 'vue'
import mapboxgl from 'mapbox-gl'
import addNavigation from '@/components/Companies/Map/navigation.js'
import addMarkers from '@/components/Companies/Map/marker.js'

const props = defineProps({
  companies: {
    type: Array,
    default: () => [],
  },
})

const zoom = 5
const center = {
  center: [18, 52],
  zoom,
}

onMounted(() => {
  mapboxgl.accessToken = import.meta.env.VITE_VUE_APP_MAPBOX_TOKEN

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    ...center,
  })

  addNavigation(map, center)
  addMarkers(map, props.companies)
  watch(() => props.companies, () => {
    addMarkers(map, props.companies)
  })
})

</script>

<template>
  <div id="map" class="relative inset-y-0 h-[600px] w-full shrink"/>
</template>
