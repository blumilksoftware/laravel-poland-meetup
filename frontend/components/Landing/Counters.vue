<script setup>
import { PresentationChartBarIcon, UsersIcon, ChatBubbleLeftIcon } from '@heroicons/vue/24/solid'
import { onMounted, ref } from 'vue'

const data = ref({})


onMounted( () => {
  fetch('/api/counters.json').then((response) => response.json()).then((counters) => {
    data.value = counters
  })
})

</script>

<template>
  <div class="bg-laravel mt-20">
    <div class="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          My w liczbach
        </h2>
        <p class="mt-3 text-xl text-red-100 sm:mt-4">
          Przez ostatnie lata udało nam się zorganizować mnóstwo fajnych rzeczy, włączając w to:
        </p>
      </div>
      <dl v-if="data" class="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
        <router-link :to="{ name: 'meetups' }" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300">
          <div class="flex flex-col py-3 hover:scale-110">
            <dt class="order-2 mt-2 text-lg font-medium leading-6 text-red-100">
              meetupów
            </dt>
            <dd class="order-1 text-7xl font-bold tracking-tight text-white">
              {{ data.meetups }}
            </dd>
            <chat-bubble-left-icon class="mb-6 h-16 text-white" aria-hidden="true"/>
          </div>
        </router-link>
        <router-link :to="{ name: 'meetups' }" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300">
          <div class="mt-10 flex flex-col py-3 hover:scale-110 sm:mt-0">
            <dt class="order-2 mt-2 text-lg font-medium leading-6 text-red-100">
              prezentacji
            </dt>
            <dd class="order-1 text-7xl font-bold tracking-tight text-white">
              {{ data.presentations }}
            </dd>
            <presentation-chart-bar-icon class="mb-6 h-16 text-white" aria-hidden="true"/>
          </div>
        </router-link>
        <router-link :to="{ name: 'people' }" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300">
          <div class="mt-10 flex flex-col py-3 hover:scale-110 sm:mt-0">
            <dt class="order-2 mt-2 text-lg font-medium leading-6 text-red-100">
              prezenterów
            </dt>
            <dd class="order-1 text-7xl font-bold tracking-tight text-white">
              {{ data.people }}
            </dd>
            <users-icon class="mb-6 h-16 text-white" aria-hidden="true"/>
          </div>
        </router-link>
      </dl>
    </div>
  </div>
</template>
