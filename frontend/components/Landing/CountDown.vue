<script setup>
const props = defineProps({
  date: String,
})

let finish = false;
let isToday = false;
let isTomorrow = false;

let now = new Date();
let endDate = new Date(props.date);

if (endDate.getDate()  == now.getDate()  && 
    endDate.getMonth() == now.getMonth() &&
    endDate.getYear()  == now.getYear()) {
    isToday = true;
} else if (
    endDate.getDate()  == now.getDate() +1 && 
    endDate.getMonth() == now.getMonth()   &&
    endDate.getYear()  == now.getYear()) {
    isTomorrow = true;
} else {
    isToday = false;
    isTomorrow = false;
}

let days = Number;

function countDown () {
  let endTime = new Date(props.date);
      endTime.setHours(23,59,59)			
      endTime = (Date.parse(endTime) / 1000);

  let now = new Date();
      now = (Date.parse(now) / 1000);

  const timeLeft = endTime - now;

  if( timeLeft <= 0) {
    finish = true;
  }
  days = Math.floor(timeLeft / 86400); 
}
countDown();
</script>

<template>
  <h2 class="uppercase font-semibold text-3xl text-zinc-300" v-if="finish == false">
    Następny meetup już
    <span class="text-laravel" v-if="isToday"> dziś!</span>
    <span class="text-laravel" v-else-if="isTomorrow"> jutro!</span>
    <span class="text-laravel" v-else > za {{days}} dni!</span>
  </h2>
  <div class="mt-3 space-y-3 sm:tracking-wider text-white" v-else>
    <h1 class="text-3xl font-bold sm:text-4xl">Już niedługo ogłosimy datę kolejnego <span class="text-laravel">meetupu!</span></h1>
    <p class="text-3xl">Obserwuj nasz profil na <a href="https://www.facebook.com/laravelpolandmeetup/" class="text-cyan-600 tracking-normal font-bold">facebooku</a>, aby być na bieżąco!</p>
    <p class="text-2xl font-semibold">
      Sprawdź też, czy nie ominęło cię coś interesującego w
      <router-link :to="{ name: 'meetups' }" class="text-laravel font-bold"> poprzednich meetupach.</router-link>
    </p>
  </div>
</template>
