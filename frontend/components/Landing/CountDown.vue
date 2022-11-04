<script setup>
const props = defineProps({
  date: Date,
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
  <h2 class="uppercase font-semibold text-3xl text-zinc-300" v-if="!finish">
    Następny meetup już
    <span class="text-laravel" v-if="isToday"> dziś!</span>
    <span class="text-laravel" v-else-if="isTomorrow"> jutro!</span>
    <span class="text-laravel" v-else > za {{days}} dni!</span>
  </h2>
  <h2 class="uppercase font-bold text-3xl text-zinc-300" v-if="finish"> Kolejne spotkanie już za nami!</h2>
</template>