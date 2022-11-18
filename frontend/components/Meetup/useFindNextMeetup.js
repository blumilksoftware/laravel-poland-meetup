import MeetupsList from '/public/api/meetups.json'
import { ref, onMounted } from 'vue'
const meetupsList = ref([])

onMounted(() => {
  fetch('/api/meetups.json').then((response) => response.json()).then((meetups) => {
      meetupsList.value = meetups
    })
  })

  export function useFindNextMeetup() {
    const nextMeetup = ref(null)
    const today = new Date()
    const futureMeetups = []

    function findMeetup() {

      for(let meetup of MeetupsList) {

        if(new Date( meetup.date ) > today) {
          
          futureMeetups.push( meetup )
        }
      }
      
      futureMeetups.sort(( a, b ) => {
        return new Date(a.date).getTime()  -  new Date(b.date).getTime()
      })

      nextMeetup.value = futureMeetups[0]
    }
    
    findMeetup()

  return { nextMeetup }
}
