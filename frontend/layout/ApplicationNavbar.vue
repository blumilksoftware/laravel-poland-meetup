<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { Bars3Icon } from '@heroicons/vue/24/solid'
</script>

<template>
  <disclosure as="nav" class="bg-zinc-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex items-center px-2 lg:px-0">
          <div class="hidden lg:block">
            <div class="flex space-x-4">
              <router-link :to="{ name: 'landing' }" class="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium hover:bg-zinc-700 text-white">Laravel <span class="text-laravel">Poland</span> MeetUp</router-link>
              <router-link :to="{ name: 'meetups' }" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-700 hover:text-white">Meetupy</router-link>
              <router-link :to="{ name: 'companies' }" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-700 hover:text-white">Firmy</router-link>
              <router-link :to="{ name: 'people' }" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-700 hover:text-white">Prowadzący</router-link>
              <router-link :to="{ name: 'contact' }" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-700 hover:text-white">Kontakt</router-link>
            </div>
          </div>
        </div>
        <div class="flex lg:hidden">
          <disclosure-button class="inline-flex items-center justify-center rounded-md text-white hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-inset">
            <span class="sr-only">Open main menu</span>
            <bars3-icon v-if="!open" class="block h-14 w-10" aria-hidden="true"/>
            <x-mark-icon v-else class="block h-8 w-8 text-white" aria-hidden="true"/>
          </disclosure-button>
        </div>
      </div>
    </div>

    <disclosure-panel class="lg:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <router-link :to="{ name: 'landing' }"><disclosure-button as="a" href="#" class="block rounded-md bg-zinc-900 px-3 py-2 text-2xl font-thin tracking-wide hover:bg-zinc-700 text-white">Laravel <span class="text-laravel">Poland</span> MeetUp</disclosure-button></router-link>
        <router-link :to="{ name: 'meetups' }"><disclosure-button as="a" href="#" class="block rounded-md px-3 py-2 text-2xl font-thin tracking-wide text-gray-300 hover:bg-zinc-700 hover:text-white">Meetupy</disclosure-button></router-link>  
        <router-link :to="{ name: 'companies' }"><disclosure-button as="a" href="#" class="block rounded-md px-3 py-2 text-2xl font-thin tracking-wide text-gray-300 hover:bg-zinc-700 hover:text-white">Firmy</disclosure-button></router-link>
        <router-link :to="{ name: 'people' }"><disclosure-button as="a" href="#" class="block rounded-md px-3 py-2 text-2xl font-thin tracking-wide text-gray-300 hover:bg-zinc-700 hover:text-white">Prowadzący</disclosure-button></router-link>
        <router-link :to="{ name: 'contact' }"><disclosure-button as="a" href="#" class="block rounded-md px-3 py-2 text-2xl font-thin tracking-wide text-gray-300 hover:bg-zinc-700 hover:text-white">Kontakt</disclosure-button></router-link>
      </div>
    </disclosure-panel>
  </disclosure>
</template>
