<script setup>
import { ref, watch, onMounted } from 'vue'
import { register } from 'swiper/element/bundle'
import SpeakerSlide from '@/components/Speaker/SpeakerSlide.vue'

const props = defineProps({
  speaker: {
    type: Object,
    default: () => {},
  },
  speakers: {
    type: Array,
    default: () => [],
  },
  meetups: {
    type: Array,
    default: () => [],
  },
})

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

const randomizeElements = (speakers, count) => {
  const result = []
  const chceck = new Set()

  while (result.length < count) {
    const index = randomizeIndex(count)

    if (chceck.has(index)) {
      continue
    }
    
    const element = speakers[index]
    chceck.add(index)
    result.push(element) 
  }
  const slideSpeakers = []

  for(let item of result) {
    if (item.id != props.speaker.id) {
      slideSpeakers.push(item)
    }
  }

  return slideSpeakers
}

watch(props, ()=> {
  register()
  randomSpeakers.value = randomizeElements(props.speakers, props.speakers.length)
})

onMounted(() => {
  register()
  const swiperEl = document.querySelector('swiper-container')
  Object.assign(swiperEl, swiperParams)
  randomSpeakers.value = randomizeElements(props.speakers, props.speakers.length)
})

</script>
<template>
  <div class="lg:pb-18 my-12 bg-white pb-10 tracking-tight text-zinc-700 shadow-lg">
    <div class="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
      <div class="space-y-12">
        <h2 class="first-letter:text-laravel lg:py-18 w-full border-b py-10 px-7 text-2xl font-bold sm:px-6 md:text-4xl lg:px-8">
          Poznaj wszystkich naszych prelegentów
        </h2>
        <swiper-container>
          <swiper-slide v-for="randomSpeaker in randomSpeakers" :key="randomSpeaker.slug">
            <router-link :to="{ name: 'people.details', params: { id: randomSpeaker.slug } }" class="mx-auto h-full">
              <SpeakerSlide :meetups="meetups" :speaker="randomSpeaker"/>
            </router-link>
          </swiper-slide>
          <swiper-button-prev/>
          <swiper-button-next/>
        </swiper-container>
      </div>
    </div>
  </div>
</template>
