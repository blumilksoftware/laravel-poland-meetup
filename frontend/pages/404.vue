<script setup>
import { ArrowUturnLeftIcon, ExclamationCircleIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="mx-auto h-full w-full max-w-7xl bg-white">
    <div class="mx-auto max-w-4xl">
      <p class="my-8 pt-10 text-center text-lg sm:my-12 sm:text-2xl">
        Strona, której szukasz nie istnieje.
      </p>
      <div class="mx-5 space-y-3">
        <div class="flex items-center space-x-3">
          <exclamation-circle-icon class="h-6 w-6"/>
          <p class="text-md mx-8 text-left sm:my-3 sm:mx-20 sm:text-xl">
            Wprowadź inny adres url lub...
          </p>
        </div>
        <router-link :to="{ name: 'landing' }" class="flex items-center space-x-3">
          <arrow-uturn-left-icon class="h-5 w-5"/>
          <p class="text-md mx-8 text-left underline sm:my-3 sm:mx-20 sm:text-xl">
            Wróć na stronę główną
          </p>
        </router-link>
      </div>
    </div>
    <img src="/images/placeholders/error.webp" class="mx-auto lg:w-2/3">
  </div>
</template>
