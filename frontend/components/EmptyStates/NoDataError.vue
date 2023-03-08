<script setup>
defineProps({
  error: {
    type: Boolean,
    default: true,
  },
  text: {
    type: String,
    default: 'Strona, której szukasz nie istnieje',
  },
})
</script>

<template>
  <div v-if="error" class="h-full w-full bg-white">
    <div class="mx-auto lg:w-2/3">
      <p class="my-8 pt-10 text-center text-2xl sm:my-12 sm:text-3xl">
        {{ text }}
      </p>
      <ul class="list-disc">
        <li class="text-md mx-8 my-5 text-left sm:my-6 sm:mx-20 sm:text-xl">
          Spróbuj odświeżyć stronę.
        </li>
        <li class="text-md mx-8 my-5 text-left sm:my-6 sm:mx-20 sm:text-xl">
          Jeśli po odświeżeniu nadal występuje ten komunikat, to wróć do nas ponownie później.
        </li>
      </ul>
    </div>
    <img src="/images/placeholders/error.webp" class="mx-auto lg:w-2/3">
  </div>
</template>
