export function useSortedSpeakers (speakers, sortType) {  
  let sortedSpeakers = []

  function sortAlphabetic(a, b) {
    function getSurname(speaker) {
      speaker.name.split(' ')[1]
    }

    if (getSurname(a) < getSurname(b)) {
      return -1
    }
    if (getSurname(a) > getSurname(b)) {
      return 1
    }
    return 0
  }

  function compare(a, b) {
    if (a.presentations < b.presentations) {
      return -1
    }
    if (a.presentations > b.presentations) {
      return 1
    }
    return 0
  }  

  if(sortType === 'ascending') {
    speakers.sort(compare).sort(sortAlphabetic).reverse()
    
    for(const item of speakers) {
      sortedSpeakers.push(item)
    }
  } else if(sortType === 'descending') {
    speakers.sort(compare).sort(sortAlphabetic)

    for(const item of speakers) {
      sortedSpeakers.push(item)
    }
  }  

  return { sortedSpeakers }
}
