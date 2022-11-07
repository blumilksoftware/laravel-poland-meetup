<script setup>

const props = defineProps({
  date: Date,
})

let date = props.date;

console.log('date:', date)
const options1 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let meetupDate = new Date(date);
console.log('date:', date)
let formatter1 = new Intl.DateTimeFormat( 'pl', options1 ).format(meetupDate);
console.log('date:', date)

const options2 = { hour12: false, hour: 'numeric', minute: 'numeric' };
let meetupHour = new Date(date);
let formatter2 = new Intl.DateTimeFormat( 'pl', options2 ).format(meetupHour);
</script>

<template>
  <span>{{formatter1}}<br>godzina {{formatter2}}</span>
</template>
