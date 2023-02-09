<script setup>
import { computed } from 'vue'
import { useBuildLists } from '@/composables/useBuildLists.js'


const props = defineProps({
  meetups: {
    type: Array,
    default: () => [],
  },
  company: {
    type: String,
    default: () => '',
  },
})

const buildLists = computed(() => {
  if (props.meetups.length === 0) return {}
  const { lists } = useBuildLists(props.meetups, props.company)
  console.log('lists.value', lists.value)
  return lists.value
})


</script>
<template>

  <div class="my-5 grid grid-cols-3">
    <router-link v-if="buildLists.meetups"
      :to="{ name: 'companies.details.list', params: { id: company, tab: 'meetups' } }">
      <!-- <div v-if="buildLists.meetups"> -->
      <p class="text-laravel border-laravel text-3xl hover:scale-110">
        {{ buildLists.meetups.data.size }}
      </p>
      <p class="ml-2 self-center">
        meetupy
      </p>
    </router-link>
    <router-link v-if="buildLists.presentations"
      :to="{ name: 'companies.details.list', params: { id: company, tab: 'presentations' } }">
      <!-- <div v-if="buildLists.presentations"> -->
      <p class="text-laravel border-laravel text-3xl hover:scale-110">
        {{ buildLists.presentations.data.size }}
      </p>
      <p class="ml-2 self-center">
        prezentacje
      </p>
      <!-- </div> -->
    </router-link>
    <router-link v-if="buildLists.speakers"
      :to="{ name: 'companies.details.list', params: { id: company, tab: 'speakers' } }">
      <!-- <div v-if="buildLists.speakers"> -->
      <p class="text-laravel border-laravel text-3xl hover:scale-110">
        {{ buildLists.speakers.data.size }}
      </p>
      <p class="ml-2 self-center">
        prelegenci
      </p>
      <!-- </div> -->
    </router-link>
  </div>
</template>
