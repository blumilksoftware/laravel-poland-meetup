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
          },
          details: presentation,
        })
        }
      })
    })
  })
}

onMounted(() => {
  filterPresentations()
})

watch(() => props.speaker, () => {
  filterPresentations()
})

watch(() => props.meetups, () => {
  filterPresentations()
})

</script>
<template>
  <div class="mx-auto">
    <div class="justify-center">
      <h2 class="first-letter:text-laravel lg:py-18 w-full border-b py-10 px-7 text-2xl font-bold sm:px-6 md:text-4xl lg:px-8">
        Meetupowy wkład
      </h2>
      <div class="m-10 block justify-center md:flex md:space-x-24">
        <ul class="block w-full divide-y divide-zinc-200">
          <li v-for="presentation of speakerPresentationsArray" :key="presentation.details.title" class="flex justify-between py-5">
            <div class="block">
              <div class="flex">
                <presentation-chart-line-icon class="mr-3 h-7 w-7 shrink-0 text-zinc-600" aria-hidden="true"/>
                <router-link :to="{ name: 'meetups.details', params: { id: presentation.meetup.id } }" class="flex justify-center text-lg font-medium transition duration-200 hover:translate-x-1">
                  {{ presentation.details.title }}
                </router-link>
              </div>
              <div class="my-1 flex w-fit rounded-full bg-zinc-100 px-3">
                {{ presentation.meetup.name }}
              </div>
              <div v-if="presentation.details.tags.length" class="flex px-3 text-zinc-500">
                <p>Tagi:</p>
                <ul class="flex">
                  <li v-for="tag of presentation.tags" :key="tag" class="mx-1 underline">
                    <router-link :to="{ name: 'searching.results', params: { id: tag }}">
                      {{ tag }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mx-5 flex items-center sm:space-x-5">
              <div class="group flex w-fit space-x-2 font-semibold transition hover:scale-105 md:space-x-3">
                <you-tube-icon class="h-7 w-7" :href="presentation.details.youtube"/>
              </div>
              <div class="group flex w-fit space-x-2 font-semibold transition hover:scale-105 md:space-x-3">
                <slide-share-icon :href="presentation.details.slideshare" class="h-7 w-7 fill-zinc-600"/>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
