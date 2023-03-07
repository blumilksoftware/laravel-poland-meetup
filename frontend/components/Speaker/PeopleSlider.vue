<script setup>
import { ref, watch, onMounted } from 'vue'
import { register } from 'swiper/element/bundle'
import SpeakerSlide from '@/components/Speaker/SpeakerSlide.vue'
import { useRoute } from 'vue-router'
import router from '@/router'

const props = defineProps({
  speakers: {
    type: Array,
    default: () => [],
  },
  meetups: {
    type: Array,
    default: () => [],
  },
})

register()
const spaceBetween = 5

const swiperParams = {
  loop: true,
  slidesPerView: 1, 
  spaceBetween: spaceBetween, 
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: { 
    768: { 
      slidesPerView: 2,
    },
  },
}

const randomSpeakers = ref([])

const randomizeIndex = (count) => {
    return Math.floor(count * Math.random())
}

const randomizeElemnts = (array, count) => {
  if (count > array.length) {
      throw new Error('Array size cannot be smaller than expected random numbers count.')
  }
  const result = []
  const guardian = new Set()
  while (result.length < count) {
      const index = randomizeIndex(count)
      if (guardian.has(index)) {
          continue
      }
      const element = array[index]
      guardian.add(index)
      result.push(element)
  }
  return result
}

onMounted(() =>{
  const swiperEl = document.querySelector('swiper-container')
  Object.assign(swiperEl, swiperParams)
})

watch(props, ()=>{
  randomSpeakers.value = randomizeElemnts(props.speakers, props.speakers.length )
  register()
})

</script>
<template>
  <div class="lg:pb-18 my-12 bg-white pb-10 tracking-tight text-zinc-700 shadow-lg">
    <div class="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
      <div class="space-y-12">
        <h2 class="first-letter:text-laravel lg:py-18 w-full border-b py-10 px-7 text-2xl font-bold sm:px-6 md:text-4xl lg:px-8">
          Poznaj naszych prelegentów
        </h2>
        <swiper-container>
          <swiper-slide v-for="speaker in randomSpeakers" :key="speaker.slug">
            <router-link :to="{ name: 'people.details', params: { id: speaker.slug } }" class="mx-auto h-full">
              <SpeakerSlide :meetups="meetups" :speaker="speaker"/>
            </router-link>
          </swiper-slide>
          <swiper-button-prev/>
          <swiper-button-next/>
        </swiper-container>
      </div>
    </div>
  </div>
</template>
