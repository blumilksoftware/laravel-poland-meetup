<script setup>
defineProps({
  error: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div v-if="error" class="h-full w-full">
    <div class="mx-auto lg:w-2/3">
      <p class="my-8 text-center text-2xl sm:my-12 sm:text-3xl">
        Błąd serwera!
      </p>
      <p class="text-md mx-8 my-5 text-left sm:my-6 sm:mx-20 sm:text-xl">
        Spróbuj odświeżyć stronę.
      </p>
      <p class="text-md mx-8 my-5 text-left sm:my-6 sm:mx-20 sm:text-xl">
        Jeśli po odświeżeniu nadal występuje ten komunikat to wróć do nas ponownie później.
      </p>
    </div>
    <img src="/images/placeholders/error.webp" class="mx-auto lg:w-2/3">
  </div>
</template>
