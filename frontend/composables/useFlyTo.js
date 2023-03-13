import { ref } from 'vue'

const companyLocation = ref({
  center: [18, 52],
  zoom: 5,
})

export default function useFlyTo() {
  function setLocation(center, zoom){
    companyLocation.value.center = center
    companyLocation.value.zoom = zoom
  }
  return { companyLocation, setLocation }
} 
