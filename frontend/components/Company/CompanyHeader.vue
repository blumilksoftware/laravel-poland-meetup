<script setup>
import PulseBackgroundAnimation from '@/components/ReusableComponents/PulseBackgroundAnimation.vue'
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'
import FacebookIcon from '@/components/Icons/FacebookIcon.vue'
import TwitterIcon from '@/components/Icons/TwitterIcon.vue'

defineProps({
  company: {
    type: Object,
    default: () => { },
  },
  name: {
    type: String,
    default: '',
  },
})

</script>
<template>
  <div class="relative overflow-hidden bg-white shadow-lg">
    <PulseBackgroundAnimation/>
    <div class="relative py-10 sm:pb-14">
      <main class="mx-auto max-w-7xl px-4 sm:mt-20">
        <div class="block text-center">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl hover:text-laravel hover:scale-110 transition duration-200 md:text-6xl">
            {{ company.name }}
          </h1>
          <div class="my-3 mx-auto flex justify-center space-x-5 sm:my-10">
            <linkedin-icon v-if="company.linkedin" :href="company.linkedin" class="pr-2 text-zinc-600"/>
            <facebook-icon v-if="company.facebook" :href="company.facebook" class="pr-2 text-zinc-600"/>
            <twitter-icon v-if="company.twitter" :href="company.twitter" class="pr-2 text-zinc-600"/>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
