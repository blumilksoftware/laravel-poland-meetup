<script setup>
</script>

<template>
  <div class="relative bg-zinc-700">
    <div class="h-56 bg-zinc-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=crop&w=1920&q=60&blend=F05340&sat=-100&blend-mode=multiply" alt="" />
    </div>
    <div class="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <h2 class="uppercase font-semibold text-zinc-300">
          Następny meetup
          <span class="text-laravel">&</span>
          za miesiąc
        </h2>
        <div class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Laravel Poland Meetup #22
        </div>
        <p class="mt-3 text-lg text-zinc-300">
          Spotykamy się już 22 listopada lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis delectus dolorem eius placeat quaerat quia quisquam. Ab ad assumenda blanditiis et eveniet ex iure, laboriosam nostrum porro quam! Error, id.
        </p>
        <div class="mt-8">
          <div class="inline-flex gap-4 rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-zinc-900 hover:bg-zinc-200">
              Zobacz agendę i szczegóły
            </a>
            <a href="#" class="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-500 px-5 py-3 text-base font-medium text-zinc-900 hover:bg-zinc-600">
              Zobacz poprzednie meetupy
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
