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
})

function buildSlug(name) {
  return name.toLowerCase().replaceAll(' ', '-')
}

</script>

<template>
  <div class="mt-12 overflow-hidden bg-white text-zinc-700">
    <div class="border-b border-zinc-200 px-4 py-5 sm:px-6">
      <h3 class="pl-4 text-xl font-medium leading-8">
        Prezentacje
      </h3>
    </div>
    <ul role="list" class="divide-y divide-zinc-200">
      <li v-for="presentation in presentations" :key="presentation.id" class="hover:bg-zinc-50">
        <div class="block p-6">
          <div class="mb-10 flex text-lg font-medium">
            <presentation-chart-line-icon class="mr-3 h-7 w-7 shrink-0 text-zinc-400" aria-hidden="true"/>
            {{ presentation.title }}
          </div>
          <div class="flex w-full justify-center">
            <div class="block self-center lg:w-1/3">
              <div v-if="presentation.tags.length" class="mx-9 -mt-5 mb-5 flex">
                <p class="mr-3 text-zinc-500 ">
                  Tagi:
                </p>
                <ul class="flex w-full space-x-2 text-zinc-400">
                  <li v-for="tag of presentation.tags" :key="tag">
                    <a href="#" class="underline">
                      {{ tag }}{{ ',' }}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-full flex-col">
                <div class="mx-9 block items-center space-y-4 text-base sm:flex sm:space-y-0 sm:space-x-16">
                  <a v-if="presentation.youtube" :href="presentation.youtube" target="_blank" class="group flex w-fit space-x-2 font-semibold transition hover:scale-105 md:space-x-3">
                    <div class="h-6 w-6 ">
                      <you-tube-icon aria-hidden="true" :href="presentation.youtube"/>
                    </div>
                    <p class="group-hover:text-laravel">
                      Zobacz na YouTube
                    </p>
                  </a>
                  <a v-if="presentation.slideshare" :href="presentation.slideshare" target="_blank" class="group flex w-fit space-x-2 font-semibold transition hover:scale-105 md:space-x-3">
                    <slide-share-icon aria-hidden="true" :href="presentation.slideshare" class="h-6 w-6 fill-zinc-600"/>
                    <p class="group-hover:text-laravel">
                      Zobacz na SlideShare
                    </p>
                  </a> 
                </div>
                <div v-for="speaker in presentation.speakers" :key="speaker.name" class="my-5 ml-9 flex min-w-0 flex-1">
                  <div class="text-md m-auto flex w-full justify-center">
                    <div class="block w-fit md:ml-0">
                      <router-link :to="{ name: 'people.details', params: { id: buildSlug(speaker.name) } }" class="my-8 flex h-32 w-32 justify-center">
                        <img v-if="speaker.image.length > 2" class="rounded-full shadow-xl sm:items-start" :src="speaker.image" alt="">
                        <img v-else class="mx-auto rounded-full shadow-xl" src="/images/placeholders/person.webp" alt="">
                      </router-link>
                    </div>
                    <div class="my-auto ml-6 md:mx-6">
                      <p class="-mb-3 text-sm text-zinc-500">
                        Prelegent:
                      </p>
                      <div class="text-laravel my-3 text-lg font-medium leading-6 sm:shrink-0">
                        <router-link :to="{ name: 'people.details', params: { id: buildSlug(speaker.name) } }">
                          <h3>{{ speaker.name }}</h3>
                        </router-link>
                        <router-link :to="{ name: 'companies.details', params: { id: buildSlug(speaker.company) } }">
                          <p class="text-zinc-600">
                            {{ speaker.company }}
                          </p>
                        </router-link>
                      </div>
                      <div v-if="speaker.linkedin" class="my-4 flex space-x-3">
                        <linkedin-icon :href="speaker.linkedin"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mx-auto hidden min-w-0 flex-1 justify-center px-4 lg:flex lg:w-2/3">
              <div class="relative hidden lg:block">
                <iframe class="relative" src="//www.slideshare.net/slideshow/embed_code/key/o9jxGUln7m5Vat" width="595" height="385" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:10px; max-width: 100%;" allowfullscreen/> 
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
