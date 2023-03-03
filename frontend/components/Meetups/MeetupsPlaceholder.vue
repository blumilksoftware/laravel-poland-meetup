<template>
  <ul class="relative block animate-pulse divide-y divide-zinc-200 bg-white transition duration-300 hover:bg-zinc-50">
    <li v-for="(i, id) of 5" :key="id" class="flex items-center">
      <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
        <div class="w-full space-y-2 p-4 sm:px-6">
          <div class="flex space-x-4">
            <p class="h-7 w-64 bg-zinc-200"/>
          </div>
          <div class="my-3 flex items-center gap-4 ">
            <p class="h-4 w-56 bg-zinc-50"/>
          </div>
          <div>
            <ul class="my-4 list-inside">
              <li class="my-3 h-5 w-72 bg-zinc-100 py-1"/>
              <li class="my-3 h-5 w-80 bg-zinc-100 py-1"/>
            </ul>
          </div>
        </div>
      </div>
      <div class="hidden md:flex">
        <ul class="mr-10 flex -space-x-2 overflow-hidden">
          <li class="my-2 inline-block h-12 w-12 rounded-full bg-zinc-100 shadow-md"/>
          <li class="my-2 inline-block h-12 w-12 rounded-full bg-zinc-100 shadow-md"/>
        </ul>
      </div>
    </li>
  </ul>
</template>
