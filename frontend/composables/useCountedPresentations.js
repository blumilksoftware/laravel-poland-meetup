export function useCountedPresentations(meetups, speakers) {
  const newArrayOfSpeakers = speakers.map(item => ({ ...item, presentations: 0 }))

  function count() {
    for (let newSpeaker of newArrayOfSpeakers) {
      meetups.filter(function (meetup) {
        meetup.presentations.filter(function (presentation) {
          presentation.speakers.filter(function (speaker) {
            if (speaker.name === newSpeaker.name)
              newSpeaker.presentations++
          })
        })
      })
    }
  }
  count()
  console.log('newArrayOfSpeakers', newArrayOfSpeakers)
  return { newArrayOfSpeakers }
}
