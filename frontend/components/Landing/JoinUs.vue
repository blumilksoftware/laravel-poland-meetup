<template>
  <div class="w-100% relative bg-zinc-800 my-20 ">
    <div class="absolute inset-0">
      <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="" />
      <div class="absolute inset-0 bg-zinc-800 mix-blend-multiply" aria-hidden="true" />
    </div>
    <div class="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl py-8 px-4 text-center sm:px-6 lg:py-10 lg:px-8">
        <h2 class="text-3xl tracking-tight text-white">
          <span class="block mb-7">Zostań prezenterem!</span>
          <span class="block">Przedstaw nam swój pomysł i dołącz do grona prezenterów</span>
        </h2>
      </div>
      <div class="mt-8 flex justify-center">
        <div class="inline-flex rounded-md shadow">
          <a href="/contact" class="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-xl font-medium text-white hover:bg-red-800 hover:scale-105 duration-300">Zgłoś prezentację</a>
        </div>
        <div class="ml-5 inline-flex">
          <a href="/meetups" class="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-100 px-5 py-3 text-lg font-medium text-zinc-700 hover:bg-zinc-200 hover:scale-105 duration-300">Zobacz poprzednie prezentacje</a>
        </div>
      </div>
    </div>
  </div>
</template>