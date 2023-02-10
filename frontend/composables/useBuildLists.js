import { ref, computed } from 'vue'

export function useBuildLists(meetupsList, companyName) {
  const meetups = ref(new Set())
  const presentations = ref(new Set()) 
  const speakers = ref(new Set())
  
  
  const lists = computed (() => { 
    return {
      meetups: {
        id: 'meetups',
        name: 'Meetupy',
        data: meetups.value,
      },
      presentations: {
        id: 'presentations',
        name: 'Prezentacje',
        data: presentations.value,
      },
      speakers: {
        id: 'speakers',
        name: 'Prelegenci',
        data: speakers.value,
      },
    }
  })

  const buildLists = () => {
    return meetupsList.filter(function(meetup) {
      meetup.presentations.filter(function(presentation) {
        presentation.speakers.filter(function(speaker) {
          if(speaker.company == companyName) {
            meetups.value.add(meetup)
            presentations.value.add(presentation)
            speakers.value.add(speaker)
          }
        })
      })
    })
  }
  buildLists()

  return { lists } 
}
