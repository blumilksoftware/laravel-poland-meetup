<script setup>
import { PresentationChartLineIcon } from '@heroicons/vue/24/outline'
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'
import YouTubeIcon from '@/components/Icons/YouTubeIcon.vue'
import SlideShareIcon from '@/components/Icons/SlideShareIcon.vue'

defineProps({
  presentations: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean, 
    default: true,
  },
})

</script>

<template>
  <div v-if="!loading" class="mt-12 bg-white text-zinc-700 shadow-lg">
    <div class="border-b border-zinc-200 bg-zinc-800 px-4 py-5 text-zinc-100 sm:px-6">
      <h2 class="pl-4 text-xl font-medium leading-8">
        Prezentacje
      </h2>
    </div>
    <ul role="list" class="divide-y divide-zinc-200">
      <li v-for="presentation in presentations" :key="presentation.id" class="hover:bg-zinc-50">
        <div class="block p-6" :class="[presentation.slideshareEmbed? '': 'md:flex']">
          <div class="w-full">
            <div class="text-md mb-4 flex font-bold sm:text-xl">
              <presentation-chart-line-icon class="mr-3 h-7 w-7 shrink text-zinc-400" aria-hidden="true"/>
              <h3>
                {{ presentation.title }}
              </h3>
            </div>
            <div v-if="presentation.tags.length" class="flex items-start">
              <p class="mr-3 text-zinc-500">
                Tagi:
              </p>
              <ul class="flex flex-wrap items-center pb-2 text-zinc-600">
                <li v-for="tag of presentation.tags" :key="tag" class="m-0.5 inline rounded-full bg-zinc-200 px-2 text-center hover:bg-zinc-300">
                  <router-link :to="{ name: 'searching.results', params: { id: tag }}" class="rounded-full">
                    <p class="flex w-fit flex-nowrap">
                      {{ tag }}
                    </p>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex w-full items-center justify-between lg:mt-0">
            <div class="block w-full" :class="[presentation.slideshareEmbed ? 'my-5 lg:w-1/3' : 'lg:w-full']">
              <div class="flex justify-center text-base sm:space-x-5">
                <a v-if="presentation.youtube" :href="presentation.youtube" target="_blank" class="group mx-10 flex w-fit items-center text-center font-semibold transition hover:scale-105 sm:mx-2 lg:space-x-1">
                  <you-tube-icon class="h-10 w-10 sm:h-6 sm:w-6 sm:shrink-0" aria-hidden="true" :href="presentation.youtube"/>
                  <p class="group-hover:text-laravel hidden sm:ml-2 sm:inline-block">
                    Zobacz na YouTube
                  </p>
                </a>
                <a v-if="presentation.slideshare" :href="presentation.slideshare" target="_blank" class="group mx-10 flex w-fit items-center text-center font-semibold transition hover:scale-105 sm:mx-2 lg:space-x-1">
                  <slide-share-icon aria-hidden="true" :href="presentation.slideshare" class="h-10 w-10 fill-zinc-600 sm:h-6 sm:w-6 sm:shrink-0"/>
                  <p class="group-hover:text-laravel hidden sm:ml-2 sm:inline-block">
                    Zobacz na SlideShare
                  </p>
                </a> 
              </div>
              <div v-for="speaker in presentation.speakers" :key="speaker.name" class="flex min-w-0 flex-1 sm:ml-9">
                <div class="text-md flex w-full" :class="[presentation.slideshareEmbed ? 'justify-center' : 'justify-center md:justify-start']">
                  <div class="block w-fit md:ml-0">
                    <router-link :to="{ name: 'people.details', params: { id: speaker.slug } }" class="my-8 flex justify-center">
                      <img v-if="speaker.image.length > 2" class="max-w-32 max-h-32 rounded-full shadow-xl sm:items-start" :src="speaker.image" alt="">
                      <img v-else class="mx-auto rounded-full shadow-xl sm:h-32 sm:w-32" src="/images/placeholders/person.webp" alt="">
                    </router-link>
                  </div>
                  <div class="my-auto ml-6 overflow-hidden text-ellipsis md:mx-6">
                    <p class="-mb-3 inline text-sm text-zinc-500">
                      Prelegent:
                    </p>
                    <div class="my-3 inline text-base font-medium leading-6 sm:text-lg">
                      <router-link :to="{ name: 'people.details', params: { id: speaker.slug } }">
                        <p class="text-laravel">
                          {{ speaker.name }}
                        </p>
                      </router-link>
                      <router-link v-if="speaker.company" :to="{ name: 'companies.details', params: { id: speaker.company.slug } }">
                        <p class="inline text-zinc-600">
                          {{ speaker.company.name }}
                        </p>
                      </router-link>
                    </div>
                    <div v-if="speaker.linkedin" class="my-2 h-6 w-6">
                      <linkedin-icon :href="speaker.linkedin" class="text-zinc-600"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="presentation.slideshareEmbed" class="mx-auto hidden min-w-0 flex-1 justify-center px-4 lg:flex lg:w-2/3">
              <div class="relative hidden lg:block">
                <iframe :src="presentation.slideshareEmbed" width="595" height="385" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:10px; max-width: 100%;"/> 
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
