<script setup>
import { PresentationChartLineIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline'
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'
import YouTubeIcon from '@/components/Icons/YouTubeIcon.vue'


defineProps({
  presentations: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="overflow-hidden bg-white">
    <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <h3 class="pl-4 text-xl font-medium leading-8 text-gray-900">
        Prezentacje
      </h3>
    </div>
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="(presentation, id) in presentations" :key="id">
        <div class="block hover:bg-gray-50">
          <div class="flex items-center p-4 sm:px-6">
            <div class="flex min-w-0 flex-1 items-center">
              <div class="w-[36em] pl-4">
                <div class="flex items-center text-lg font-medium">
                  <presentation-chart-line-icon class="mr-1.5 h-7 w-7 shrink-0 text-gray-400" aria-hidden="true"/>
                  {{ presentation.title }}
                </div>
                <div v-for="speaker in presentation.speakers" :key="speaker.id" class="text-md align-start mt-2 block gap-3">
                  <transition enter-active-class="transition ease-in-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <div>
                      <img v-if="speaker.image.length > 2" class="my-5 h-40 w-40 items-start rounded-full shadow-xl xl:h-56 xl:w-56" :src="speaker.image" alt="">
                      <img v-else class="mx-auto h-40 w-40 rounded-full shadow-xl xl:h-56 xl:w-56" src="/images/speakers/placeholder.webp" alt="">
                      <div class="text-laravel my-3 text-lg font-medium leading-6">
                        <router-link :to="{ name: 'people' }">
                          <h3>{{ speaker.name }}</h3>
                        </router-link>
                        <router-link :to="{ name: 'companies' }">
                          <p class="text-zinc-600">
                            {{ speaker.company }}
                          </p>
                        </router-link>
                      </div>
                      <ul role="list" class="my-4 flex space-x-3">
                        <li>
                          <linkedin-icon v-if="speaker.linkedin === !'#'" :href="speaker.linkedin"/>
                        </li>
                      </ul>
                      <div class="space-y-2">
                        <a href="https://www.youtube.com/watch?v=l3BQJ9vxh2o" target="_blank" class="flex w-fit space-x-2 font-semibold text-zinc-700 transition hover:scale-105 hover:text-red-500 hover:fill-red-500">
                          <div class="h-5 w-5 self-center">
                            <you-tube-icon aria-hidden="true" href=""/>
                          </div>
                          <p>
                            Zobacz w serwisie YouTube
                          </p>
                        </a>
                        <a href="https://www.slideshare.net/Laravel_Poznan_Meetup/xd-bug-jak-debugowa-phpowe-aplikacje-xdebug" target="_blank" class="flex w-fit space-x-2 font-semibold text-zinc-700 transition hover:scale-105 hover:text-red-500">
                          <arrow-down-tray-icon class="h-5 w-5 self-center"/>
                          <p>
                            Pobierz prezentację
                          </p>
                        </a> 
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-1 md:gap-4">
                <div class="relative hidden md:block">
                  <div role="status" class="absolute top-1/2 left-1/2 z-0 -translate-y-1/2 -translate-x-1/2">
                    <svg class="mr-2 inline h-8 w-8 animate-spin fill-gray-600 text-gray-200 dark:fill-gray-300 dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                  <iframe class="relative z-50" src="//www.slideshare.net/slideshow/embed_code/key/o9jxGUln7m5Vat" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen/> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
