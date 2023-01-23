import { ref } from 'vue'

export function useFindNextMeetup(meetups) {
  let nextMeetup = ref()
  const today = new Date()
  const futureMeetups = []

  for(let meetup of meetups) {
    if(new Date(meetup.date) > today) {
      futureMeetups.push(meetup)
    }
  }

  if(futureMeetups.length > 0) {
    futureMeetups.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
  }
  else if(futureMeetups.length === 0) {
    return {}
  }

  nextMeetup.value = futureMeetups[0]

  return { nextMeetup }
}