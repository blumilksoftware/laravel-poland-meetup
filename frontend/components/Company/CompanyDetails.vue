<script setup>
import CompaniesMap from '@/components/Companies/Map/CompaniesMap.vue'

const props = defineProps({
  company: {
    type: Object,
    default: () => {},
  },
  name: {
    type: String,
    default: "",
  },
})

// let company = ref({})

// console.log('companies.value', companies.value)

// function findCompany () {
//   for(let elem in props.companies.value) {
//     if(elem.name === props.name) {
//       console.log('company', company)
//       return elem
//     }
//   }
// }

// const company1 = computed(() => {
//   company.value = findCompany
// })

</script>
<template>
  <div class="my-12 bg-white text-center text-3xl font-bold tracking-tight text-zinc-700 shadow-lg sm:text-xl">
    <div class="mx-auto block w-full max-w-7xl bg-white py-12 px-4 sm:flex sm:px-6 lg:px-8 lg:py-24">
      <div class="my-5 block w-1/2 bg-green-200">
        <div class="my-10 w-full">
          <img class="mx-auto h-20" :src="company.logo">
        </div>
        <div class="m-3 font-normal italic text-zinc-600">
          {{ company.bio }}
        </div>
      </div>
      <div class="my-5 w-1/2 bg-red-200">
        <div class="align-center h-full w-full">
          <companies-map :companies="company"/>
        </div>
      </div>
    </div>
    <div class="mx-auto block w-full max-w-7xl py-12 px-4 sm:flex sm:px-6 lg:px-8 lg:py-24">
      <div class="w-full bg-yellow-200">
        lista prezentacji/tab1
      </div>
      <div class="w-full bg-yellow-200">
        lista prelegentów/tab2
      </div>
      <div class="w-full bg-yellow-200">
        lista meetupów/tab3
      </div>
    </div>
    klikając na każdą zakłądkę wyświetla się tylko jej treść, reszta znika
  </div>
</template>
