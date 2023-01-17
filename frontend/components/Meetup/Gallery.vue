<script setup>
import { ref } from 'vue'

const props = defineProps({
  meetup: {
    type: Object,
    default: () => {},
  },
})

const fullWidthImageIndex = ref(null)
const getImageClass = (i) => {
  return {
    'fullWidthImage': fullWidthImageIndex.value === i,
  }
}

const resizeImage = (i) => {
  if (fullWidthImageIndex.value === i) {
    fullWidthImageIndex.value = null
  } else {
    fullWidthImageIndex.value = i
  }
}


</script>
<template>
  <div class="mt-12 block bg-white px-4 py-5">
    <h2 class="text-laravel my-7 block w-full text-center text-3xl font-semibold">
      {{ meetup.name }}
    </h2>
    <div class="relative">
      <ul role="list" class="grid grid-col gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        <li v-for="(image, i) of props.meetup.images" :key="image" class="cursor-zoom-in" :class="getImageClass(i)" @click="resizeImage(i)">
          <div class="expanded-image-background"/>
          <div class="aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img :src="image" alt="zdjęcie ze spotkania" class="pointer-events-none hover:rounded-full">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.fullWidthImage .expanded-image-background {
  background-color: rgba(0,0,0, .7);
  height: 100vh;
  width: 100%;
  position: fixed; 
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.fullWidthImage {
  width: 100%;
  height: fit-content;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  margin: auto;    
  cursor: zoom-out;
}


.fullWidthImage div {
  margin:auto;
  height:50%;
  background-color: transparent;
  }
  
  .fullWidthImage img {
    width: 100vh;
    background-color: transparent;
    object-fit: contain;
    margin: auto;
}

</style>
