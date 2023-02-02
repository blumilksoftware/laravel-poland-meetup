<script setup>
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
  <div class="w-full">
    <h2>{{ company }}</h2>
  </div>
</template>