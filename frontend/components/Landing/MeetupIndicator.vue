<template>
  <div class="relative bg-zinc-700">
    <div class="h-72 bg-zinc-600 sm:h-64 md:absolute md:left-0 md:h-full md:w-1/2">
      <img class="h-full w-full object-cover" src="@/public/images/lpm_22/lpm22-img2.webp" alt="" />
    </div>
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10" v-if="MeetupDate.date === invalid" >
        <div class="mt-3 space-y-3 sm:tracking-wider text-white" >
          <h1 class="text-3xl font-bold sm:text-4xl">Już niedługo ogłosimy datę kolejnego <span class="text-laravel">meetupu!</span></h1>
          <p class="text-3xl">Obserwuj nasz profil na <a href="https://www.facebook.com/laravelpolandmeetup/" class="text-cyan-600 font-bold">facebooku</a>, aby być na bieżąco!</p>
          <p class="text-2xl font-semibold">Sprawdź też, czy nie ominęło cię coś interesującego w<span class="text-laravel font-bold"> poprzednich meetupach. </span></p>
        </div>
      </div>
      <div class="md:ml-auto md:w-1/2 md:pl-10" v-else>
        <count-down :date="DataMeetup.date"></count-down> 
        <div class="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"  v-if="DataMeetup.name" >
          {{DataMeetup.name}}
        </div>
        <p class="mt-3 text-2xl text-zinc-300 leading-8">
          <h2>
            <meetup-date :date="DataMeetup.date" class="text-laravel tracking-tighter text-3xl sm:text-3xl sm:tracking-tight font-bold"></meetup-date>
          </h2>
          Zapraszamy fascynatów Laravela i nie tylko!<br>
          Wstęp free.<br>
          <span v-if="DataMeetup.location === 'online'">Tym razem widzimy się online!</span>
          <span v-else>Miejsce spotkania: {{DataMeetup.location}}</span>
        </p>
        <div class="mt-8">
          <div class="block gap-4 tracking-wide rounded-md shadow sm:block md:block lg:w-3/5">
            <a href="https://www.subscribepage.com/lpm23?fbclid=IwAR2mdIHtj7U2kCAlRMzpzbenpyKdO6HkdMsXTeFjzBm1lypc5oOwmsIfSzI" class="flex items-center justify-center rounded-md border border-transparent bg-laravel px-8 py-3 my-3 text-xl font-bold text-white hover:bg-red-800 hover:scale-105 duration-300" target="_blank">Zapisz się!</a>
            <router-link :to="{ name: 'meetups' }" class="flex items-center justify-center rounded-md border border-transparent bg-zinc-100 px-5 py-3 text-base font-medium text-zinc-900 hover:bg-zinc-300 hover:scale-105 duration-300">Poprzednie meetupy</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MeetupDate from '@/frontend/components/Meetup/MeetupDate.vue';
import DataMeetup from '@/resources/meetups/2022-11-10-laravel-poland-meetup-23.json';
import CountDown from './CountDown.vue';
</script>
