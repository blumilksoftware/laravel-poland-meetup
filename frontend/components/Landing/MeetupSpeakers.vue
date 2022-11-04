<script setup>
import Meetup from '@/resources/meetups/2022-11-10-laravel-poland-meetup-23.json';
import People from '@/resources/people.json';
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'
import TwitterIcon from '@/components/Icons/TwitterIcon.vue'

const people = [
  {
    name: 'Marcin Tracz',
    company: 'Blumilk',
    image: '/images/speakers/marcintracz.webp',
    bio: 'xD bug - jak debugować PHP-owe aplikacje',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Mateusz Garbarczyk',
    company: 'HIGHSolutions',
    image: '/images/speakers/mateuszgarbarczyk.webp',
    bio: 'WebRTC + Websockety - Jak stworzyłem aplikację do kamerek internetowych w Laravelu',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
]
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 lg:py-12">
      <div class="block m-8">

        <div class="text-center mb-14">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Prezentacje na najbliższym spotkaniu <br>
            <span class="text-laravel">10 listopada 2022r.</span>
            <p v-if="!Meetup.presentations.length">pojawią się tutaj już niedługo!</p>
          </h2>
        </div>
        <div class="">
          <ul role="list" class="flex flex-wrap font-bold justify-center">
            <li class="w-full md:w-1/3 xl:w-1/4 m-6" v-if="!Meetup.presentations.length">
              <img class="mx-auto h-40 w-40 rounded-full brightness- animate-pulse shadow-xl xl:h-40 xl:w-40" src="/images/speakers/placeholder.webp" alt=""/>
              <div class="my-3 rounded-xl animate-pulse bg-red-200 w-1/3 h-4"></div>
              <div class="my-3 rounded-xl animate-pulse bg-zinc-300 w-1/2 h-4"></div>
              <div class="my-3 rounded-xl animate-pulse bg-zinc-300 w-3/5 h-4"></div>
            </li>
            <li class="w-full md:w-1/3 xl:w-1/4 m-6" v-else v-for="presentation in Meetup.presentations">
              <div v-for="speaker in presentation.speakers" :key="speaker.person">
                <img class="mx-auto h-40 w-40 rounded-full shadow-xl xl:h-56 xl:w-56" v-if="People[speaker.person].image.length > 2" :src="People[speaker.person].image" alt="" />
                <img class="mx-auto h-40 w-40 rounded-full shadow-xl xl:h-56 xl:w-56"  v-else src="/images/speakers/placeholder.webp" alt="" />
                <div class="my-3 text-lg text-laravel font-bold font-medium leading-6">
                  <router-link :to="{ name: 'people' }"><h3 >{{People[speaker.person].name}}</h3></router-link>
                  <router-link :to="{ name: 'companies' }"><p class="text-zinc-600">{{ People[speaker.person].company }}</p></router-link>
                </div>
                <ul role="list" class="flex my-4 space-x-3">
                  <li>
                    <linkedin-icon :href="People[speaker.person].linkedin"></linkedin-icon>
                  </li>
                </ul>
                <div class="text-lg">
                  <div class="my-3 rounded-xl animate-pulse bg-zinc-300 w-4/5 h-4" v-if="presentation.title.length < 2"></div>
                  <router-link :to="{ name: 'meetups' }" v-if="presentation.title.length > 2"><p class="text-2xl bold leading-none">{{ presentation.title }}</p></router-link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
