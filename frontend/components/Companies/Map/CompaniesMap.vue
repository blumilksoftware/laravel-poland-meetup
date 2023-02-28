<script setup>
import { onMounted, watch, ref, computed } from 'vue'
import mapboxgl from 'mapbox-gl'
import addNavigation from '@/components/Companies/Map/navigation.js'
import addMarkers from '@/components/Companies/Map/marker.js'
import useFlyTo from '@/composables/useFlyTo.js'

const props = defineProps({
  data: {
    type: [ Object, Array ],
    default: () => {},
  },
})

const center = ref({
  center: [18, 52], 
  zoom:5,
})

const newLocation = computed(() => {
  const { companyLocation } = useFlyTo()
  return companyLocation.value
})

function updateView(map) {
  watch(() => {
    map.flyTo({
      center: newLocation.value.center,
      zoom: newLocation.value.zoom,
      essential: true,
    })
  })
}

onMounted(() => {
  mapboxgl.accessToken = import.meta.env.VITE_VUE_APP_MAPBOX_TOKEN

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: center.value.center,
    zoom: center.value.zoom,
  })

  addNavigation(map, center)
  addMarkers(map, props.data)
  watch(() => props.data, () => {
    addMarkers(map, props.data)
  })

  updateView(map)
})

</script>
<template>
  <div id="map" class="relative inset-y-0 h-[400px] w-full shrink lg:max-h-[600px]"/>
</template>
