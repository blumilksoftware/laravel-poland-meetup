<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <disclosure as="nav" class="bg-zinc-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex items-center px-2 lg:px-0">
          <div class="hidden lg:block">
            <div class="flex space-x-4">
              <router-link :to="{ name: 'landing' }" class="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white">Laravel <span class="text-laravel">Poland</span> Meetup</router-link>
              <router-link :to="{ name: 'meetups' }" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-700 hover:text-white">Meetupy</router-link>
              <router-link :to="{ name: 'companies' }" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-700 hover:text-white">Firmy</router-link>
              <router-link :to="{ name: 'people' }" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-700 hover:text-white">Prowadzący</router-link>
              <router-link :to="{ name: 'contact' }" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-zinc-700 hover:text-white">Kontakt</router-link>
            </div>
          </div>
        </div>
        <div class="flex lg:hidden">
          <disclouse-button class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <bars-3-icon v-if="!open" class="block h-6 w-6" aria-hidden="true"/>
            <x-mark-icon v-else class="block h-6 w-6" aria-hidden="true"/>
          </disclouse-button>
        </div>
      </div>
    </div>

    <disclosure-panel class="lg:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <disclosure-button as="a" href="#" class="block rounded-md bg-zinc-900 px-3 py-2 text-base font-medium text-white">Laravel <span class="text-red">Poland</span> Meetup</disclosure-button>
        <disclosure-button as="a" href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-zinc-700 hover:text-white">Meetupy</disclosure-button>
        <disclosure-button as="a" href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-zinc-700 hover:text-white">Firmy</disclosure-button>
        <disclosure-button as="a" href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-zinc-700 hover:text-white">Prowadzący</disclosure-button>
        <disclosure-button as="a" href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-zinc-700 hover:text-white">Kontakt</disclosure-button>
      </div>
    </disclosure-panel>
  </disclosure>
</template>
