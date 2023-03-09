<script setup>
import { ref, onMounted, watch } from 'vue'
import { PresentationChartLineIcon } from '@heroicons/vue/24/outline'
import YouTubeIcon from '@/components/Icons/YouTubeIcon.vue'
import SlideShareIcon from '@/components/Icons/SlideShareIcon.vue'

const props = defineProps({
  meetups: {
    type: Array,
    default: () => [],
  },
  speaker: {
    type: Object,
    default: () => {},
  },
  loading: {
    type: Boolean,
    default: true,
  },
})

const speakerPresentationsArray = ref([])

function filterPresentations() {
  props.meetups.filter(meetup => {
    meetup.presentations.filter(presentation => {
      presentation.speakers.filter(person => {
        if(person.id === props.speaker.id){
          speakerPresentationsArray.value.push({
            meetup: {
              name: meetup.name,
              id: meetup.id,
              date: meetup.date,
              dateFull: meetup.dateFull,
            },
            details: presentation,
          })
        }
      })
    })
  })
}

function clean() {
  speakerPresentationsArray.value = []
}

const getDate = (date) => {
  return date.split(',')[0]
}

onMounted(() => {
  filterPresentations()
})

watch(props, () => {
  clean() 
  filterPresentations()
})

</script>
<template>
  <div class="mx-auto">
    <div class="justify-center">
      <div class="m-2 block justify-center sm:m-10 md:flex md:space-x-24">
        <ul class="block w-full divide-y divide-zinc-200">
          <li v-for="presentation of speakerPresentationsArray" :key="presentation.details.title" class="block justify-between py-5 sm:flex">
            <div class="block">
              <div class="flex">
                <presentation-chart-line-icon class="mr-3 h-6 w-6 shrink-0 text-zinc-600 sm:h-7 sm:w-7" aria-hidden="true"/>
                <div class="flex justify-center text-lg font-medium sm:text-xl">
                  {{ presentation.details.title }}
                </div>
              </div>
              <time class="my-1 ml-8 flex w-fit px-1" :datetime="presentation.meetup.date"> {{ getDate(presentation.meetup.dateFull) }}</time>
              <router-link :to="{ name: 'meetups.details', params: { id: presentation.meetup.id } }" class="my-2 ml-7 flex w-fit rounded-full bg-zinc-100 transition duration-200 hover:translate-x-1">
                <p class="px-2 py-1 text-center">
                  {{ presentation.meetup.name }}
                </p>
              </router-link>
              <div v-if="presentation.details.tags.length" class="flex px-3 text-zinc-500">
                <p>Tagi:</p>
                <ul class="flex">
                  <li v-for="tag of presentation.details.tags" :key="tag" class="mx-1 underline">
                    <router-link :to="{ name: 'searching.results', params: { id: tag }}">
                      {{ tag }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="my-5 mx-9 flex items-center justify-center space-x-9 sm:justify-end sm:space-x-5">
              <div v-if="presentation.details.youtube" class="group flex w-fit space-x-2 font-semibold md:space-x-3">
                <you-tube-icon class="h-8 w-8 sm:h-7 sm:w-7" :href="presentation.details.youtube"/>
              </div>
              <div v-if="presentation.details.slideshare" class="group flex w-fit space-x-2 font-semibold md:space-x-3">
                <slide-share-icon :href="presentation.details.slideshare" class="h-8 w-8 fill-zinc-600 sm:h-7 sm:w-7"/>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
