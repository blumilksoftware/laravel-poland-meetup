<script setup>
import { PresentationChartLineIcon } from '@heroicons/vue/24/outline'
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'
import YouTubeIcon from '@/components/Icons/YouTubeIcon.vue'
import SlideShareIcon from '@/components/Icons/SlideShareIcon.vue'

const props = defineProps({
  presentations: {
    type: Array,
    default: () => [],
  },
})

</script>

<template>
  <div class="mt-12 overflow-hidden bg-white text-zinc-700">
    <div class="border-b border-zinc-200 px-4 py-5 sm:px-6">
      <h3 class="pl-4 text-xl font-medium leading-8">
        Prezentacje
      </h3>
    </div>
    <ul role="list" class="divide-y divide-zinc-200">
      <li v-for="presentation in props.presentations" :key="presentation.id" class="hover:bg-zinc-50">
        <div class="block p-6">
          <div class="mb-10 flex text-lg font-medium">
            <presentation-chart-line-icon class="mr-3 h-7 w-7 shrink-0 text-zinc-400" aria-hidden="true"/>
            {{ presentation.title }}
          </div>
          <div class="flex w-full justify-center">
            <div class="block self-center">
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
                  <a v-if="presentation.youtube" :href="presentation.youtube" target="_blank" class="fill-laravel flex w-fit space-x-2 font-semibold transition hover:scale-105 hover:fill-red-500 hover:text-red-500 md:space-x-3">
                    <div class="h-6 w-6 ">
                      <you-tube-icon aria-hidden="true" href=""/>
                    </div>
                    <p>
                      Zobacz na YouTube
                    </p>
                  </a>
                  <a v-if="presentation.slideshare" :href="presentation.slideshare" target="_blank" class="flex w-fit space-x-2 font-semibold transition hover:scale-105 hover:text-red-500 md:space-x-3">
                    <slide-share-icon aria-hidden="true" class="h-6 w-6 fill-zinc-600 hover:fill-red-500"/>
                    <p>
                      Zobacz na SlideShare
                    </p>
                  </a> 
                </div>
                <div v-for="speaker in presentation.speakers" :key="speaker.name" class="my-5 ml-9 flex min-w-0 flex-1">
                  <div class="text-md m-auto flex w-full justify-center">
                    <div class="block w-fit md:ml-0">
                      <router-link :to="{ name: 'people' }" class="my-8 flex h-32 w-32 justify-center">
                        <img v-if="speaker.image.length > 2" class="rounded-full shadow-xl sm:items-start" :src="speaker.image" alt="">
                        <img v-else class="mx-auto rounded-full shadow-xl" src="/images/speakers/placeholder.webp" alt="">
                      </router-link>
                    </div>
                    <div class="my-auto ml-6 md:mx-6">
                      <p class="-mb-3 text-sm text-zinc-500">
                        Prelegent:
                      </p>
                      <div class="text-laravel my-3 text-lg font-medium leading-6 sm:shrink-0">
                        <router-link :to="{ name: 'people' }">
                          <h3>{{ speaker.name }}</h3>
                        </router-link>
                        <router-link :to="{ name: 'companies' }">
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
            <div class="mx-auto hidden min-w-0 flex-1 justify-center px-4 lg:flex">
              <div class="relative hidden lg:block">
                <div role="status" class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  <svg class="mr-2 inline h-8 w-8 animate-spin fill-zinc-600 text-zinc-200 dark:fill-zinc-300 dark:text-zinc-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
                <iframe class="relative" src="//www.slideshare.net/slideshow/embed_code/key/o9jxGUln7m5Vat" width="595" height="385" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:10px; max-width: 100%;" allowfullscreen/> 
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
