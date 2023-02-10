
<script setup>
import { computed } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { useBuildLists } from '@/composables/useBuildLists.js'
import FacebookIcon from '@/components/Icons/FacebookIcon.vue'
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'
import TwitterIcon from '@/components/Icons/TwitterIcon.vue'
import YouTubeIcon from '@/components/Icons/YouTubeIcon.vue'
import SlideShareIcon from '@/components/Icons/SlideShareIcon.vue'


const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  meetups: {
    type: Array,
    default: () => [],
  },
})

const buildLists = computed(() => {
  if (props.meetups.length === 0) return {}
  const { lists } = useBuildLists(props.meetups, props.name)
  return lists.value
})

</script>

<template>
  <div class="my-10 bg-white text-center text-lg font-bold tracking-tight text-zinc-700 shadow-lg md:text-2xl">
    <div id="tabs" class="lg:py-18 mx-auto block w-full max-w-7xl p-4 sm:px-6 lg:px-8">
      <h2 class="first-letter:text-laravel lg:py-18 w-full justify-center border-b py-6 px-7 text-left text-2xl font-bold sm:px-6 md:text-4xl lg:px-8"> 
        Meetup'owe statystyki
      </h2>
      <div class="w-full px-2 py-16 sm:px-0">
        <TabGroup>
          <TabList class="flex space-x-1 rounded-xl bg-zinc-800 p-1">
            <Tab v-for="category in buildLists" :key="category" v-slot="{ selected }" as="template">
              <button :class="[
                'w-full rounded-lg py-2.5 text-base font-medium leading-5 text-zinc-700',
                'ring-zinc-780 ring-opacity-60 ring-offset-2 ring-offset-zinc-800 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-zinc-100 hover:bg-white/[0.12] hover:text-white',
              ]">
                {{ category.name }}
              </button>
            </Tab>
          </TabList>

          <TabPanels class="mt-2">
            <TabPanel v-for="(list, id) in Object.values(buildLists)" :key="id" class="max-h-96 overflow-auto rounded-xl bg-white p-3 ring-zinc-800 ring-opacity-60 ring-offset-2 ring-offset-zinc-800 focus:outline-none focus:ring-2 lg:max-h-[600px]">
              <ul v-auto-animate role="list" class="divide-y divide-zinc-200">
                <li v-for="(elem, idx) in list.data" :key="idx" class="flex justify-between rounded-md p-3 hover:bg-gray-100">
                  <div class="relative items-center">
                    <h3 v-if="elem.title" class="text-left font-medium leading-5">
                      {{ elem.title }}
                    </h3>
                    <div v-else class="flex items-center space-x-5">
                      <img v-if="elem.image" :src="elem.image" class="h-10 w-10 rounded-full hover:scale-110">
                      <h3 class="text-left font-medium leading-5">
                        {{ elem.name }}
                      </h3>
                    </div>

                    <ul class="mt-1 flex space-x-3 text-sm font-normal leading-5 text-gray-500">
                      <li v-if="elem.location">{{ elem.location }}</li>
                      <li v-if="elem.location && elem.dateFull">&middot;</li>
                      <li v-if="elem.dateFull">{{ elem.dateFull }}</li>
                      <li v-if="elem.dateFull && elem.linkedin">&middot;</li>
                      <li v-if="elem.speakers">
                        <ul v-for="speaker in elem.speakers" :key="speaker.name">
                          <li>
                            {{ speaker.name }}
                          </li>
                        </ul>
                      </li>
                    </ul>

                    <router-link v-if="list.id === 'meetups'" :to="{ name: 'meetups.details', params: { id: elem.id } }" :class="['absolute inset-0 rounded-md w-full', 'ring-zinc-400 focus:z-10 focus:outline-none focus:ring-2']"/>
                    <router-link v-if="list.id === 'speakers'" :to="{ name: 'people.details', params: { id: elem.name } }" :class="['absolute inset-0 rounded-md w-full', 'ring-zinc-400 focus:z-10 focus:outline-none focus:ring-2']"/>
                  </div>
                  <div class="flex space-x-6">
                    <you-tube-icon v-if="elem.youtube" :href="elem.youtube" class="h-7 w-7 self-center"/>
                    <slide-share-icon v-if="elem.slideshare" :href="elem.slideshare" class="h-7 w-7 self-center"/>
                    <linkedin-icon v-if="elem.linkedin" :href="elem.linkedin" class="h-7 w-7 self-center"/>
                    <twitter-icon v-if="elem.twitter" :href="elem.twitter" class="h-7 w-7 self-center"/>
                    <facebook-icon v-if="elem.facebook" :href="elem.facebook" class="text-red h-7 w-7 self-center"/>
                  </div>
                </li>
              </ul>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  </div>
</template>
