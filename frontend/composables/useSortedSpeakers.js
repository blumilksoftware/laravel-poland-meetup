import { ref } from 'vue'

export function useSortedSpeakers (speakers, sortType, sortBy) {  
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

  if(sortBy === 'presentations'){

    if(sortType === 'ascending') {
      speakers.sort(sortAlphabetic).reverse().sort(compare).reverse()
      sortedSpeakers.value = speakers
    } 
    else if(sortType === 'descending') {
      speakers.sort(sortAlphabetic).sort(compare)
      sortedSpeakers.value = speakers
    }
  } 
  else if (sortBy ==='names') {

    if(sortType === 'ascending') {
      speakers.sort(sortAlphabetic).reverse()
      sortedSpeakers.value = speakers
    } 
    else if(sortType === 'descending') {
      speakers.sort(sortAlphabetic)
      sortedSpeakers.value = speakers
    }
  }

  return { sortedSpeakers }
}
