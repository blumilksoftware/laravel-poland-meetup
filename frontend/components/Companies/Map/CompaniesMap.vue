<script setup>
import { onMounted, watch, watchEffect, ref, computed } from 'vue'
import mapboxgl from 'mapbox-gl'
import addNavigation from '@/components/Companies/Map/navigation.js'
import addMarkers from '@/components/Companies/Map/marker.js'
import useFlyTo from '@/composables/useFlyTo.js'

const props = defineProps({
  data: {
    type: [ Object, Array ],
    default: () => {},
  },
  zoom: {
    type: Number,
    default: 5,
  },
  center: {
    type: Array,
    default: () => [18, 52],
  },
})

const center = ref({
  center: props.center, 
  zoom: props.zoom,
})

const newLocation = computed(() => {
  const { companyLocation } = useFlyTo()
  return companyLocation.value
})

onMounted(() => {
  mapboxgl.accessToken = import.meta.env.VITE_VUE_APP_MAPBOX_TOKEN

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: center.value.center,
    zoom: center.value.zoom,
  })
  console.log('center', center.value.center)
  console.log('zoom', center.value.zoom)

  addNavigation(map, center)
  addMarkers(map, props.data)
  watch(() => props.data, () => {
    addMarkers(map, props.data)
  })

  watchEffect(() => {
    map.flyTo({
      center: newLocation.value.center,
      zoom: newLocation.value.zoom,
      essential: true,
    })
  })
})

</script>
<template>
  <div id="map" class="relative inset-y-0 h-[400px] w-full shrink lg:max-h-[600px]"/>
</template>
