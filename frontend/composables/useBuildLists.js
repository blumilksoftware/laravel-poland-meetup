import { ref, computed } from 'vue'

export function useBuildLists(meetupsList, company) {
  const meetups = ref(new Map())
  const presentations = ref(new Map()) 
  const speakers = ref(new Map())
  const companyName = company.toLowerCase().replaceAll(' ', '-')

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
          let speakerCompany = ''
          
          if (speaker.company) {
            speakerCompany = speaker.company.name.toLowerCase().replaceAll(' ', '-')
          }
          if(speakerCompany === companyName) {
            meetups.value.set(meetup.name, meetup)
            presentations.value.set(presentation.title, presentation)
            speakers.value.set(speaker.name, speaker)
          }
        })
      })
    })
  }
  buildLists()

  return { lists } 
}
