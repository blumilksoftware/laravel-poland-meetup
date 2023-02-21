import { ref } from 'vue'

export function useSortedSpeakers (speakers, sortType) {  
  let sortedSpeakers = ref([])

  function sortAlphabetic(a, b) {
    function getSurname(speaker) {
      return speaker.name.split(' ')[1]
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
    speakers.sort(sortAlphabetic).reverse().sort(compare).reverse()
    
    for(const item of speakers) {
      sortedSpeakers.value.push(item)
    }
  } else if(sortType === 'descending') {
    speakers.sort(sortAlphabetic).sort(compare)

    for(const item of speakers) {
      sortedSpeakers.value.push(item)
    }
  }

  return { sortedSpeakers }
}
