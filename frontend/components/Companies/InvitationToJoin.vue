<template>
  <div class="w-100% relative my-20 bg-zinc-800 ">
    <div class="absolute inset-0">
      <img class="h-full w-full object-cover" src="/images/lpm_22/lpm22-img1.webp" alt="">
      <div class="absolute inset-0 bg-zinc-800 mix-blend-multiply" aria-hidden="true"/>
    </div>
    <div class="relative mx-auto max-w-7xl py-10 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl py-8 px-4 text-center sm:px-6 lg:py-10 lg:px-8">
        <h2 class="tracking-tight text-white">
          <p class="mb-7 block text-3xl">
            Wypromuj swoją firmę!
          </p>
          <div class="block text-2xl">
            <p>
              Chcesz, aby Twoja firma brała udział w brandowych spotkaniach? 
            </p>
            <p>
              A może masz chęć na stałe dołączyć do zespołu
              <span class="font-bold tracking-tight">Laravel <span class="text-laravel">Poland</span> Meetup</span> 
              jako współorganizator? 
            </p> 
            <p>
              Daj nam znać!
            </p>
          </div>
        </h2>
      </div>
      <div class="mt-8 justify-center md:flex ">
        <router-link :to="{ name: 'contact' }" class="mb-4 flex items-center justify-center rounded-md border border-transparent bg-red-600 px-16 py-3 text-xl font-medium text-white shadow duration-300 hover:scale-105 hover:bg-red-800 md:mb-0 md:mr-6">
          Biorę udział!
        </router-link>
      </div>
    </div>
  </div>
</template>
