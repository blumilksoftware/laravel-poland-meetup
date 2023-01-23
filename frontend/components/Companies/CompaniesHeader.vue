<script setup>
defineProps({
  meetup: {
    type: Object,
    default: () => {},
  },
})
</script>

<template>
  <div class="relative overflow-hidden bg-white">
    <div class="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full" aria-hidden="true">
      <div class="relative mx-auto h-full max-w-7xl">
        <svg class="absolute right-full translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"/>
        </svg>
        <svg class="absolute left-full -translate-y-3/4 -translate-x-1/4 animate-pulse md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="3" height="3" class="text-gray-200" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"/>
        </svg>
      </div>
    </div>
    <div class="relative z-10 mx-auto max-w-7xl space-y-5 py-16 px-4 text-center sm:py-24 sm:px-6 lg:block lg:justify-center lg:px-8">
      <h1 class="text-laravel text-4xl font-bold uppercase tracking-tight sm:text-5xl">
        Firmy
      </h1>
      <p class="text-laravel text-xl font-bold italic tracking-tight sm:text-xl">
        Dołącz do nas i promuj swoją firmę!
      </p>
    </div>
  </div>
</template>
