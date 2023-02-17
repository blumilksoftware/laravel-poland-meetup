export function useSortedSpeakers (speakers, sortType) {
  console.log('speakers, sortType', speakers, sortType)
  
  let sortedSpeakers = []

  function compare(a, b) {
    if (a.presentations < b.presentations) {
      console.log('a.presentations', a.presentations)
      return -1
    }
    if (a.presentations > b.presentations) {
      console.log('a.presentations', a.presentations)
      return 1
    }
    return 0
  }
  
  const ascendingPresentations = speakers.sort(compare)
  const descendingPresentations = speakers.sort(compare).reverse()

  if(sortType === 'default') {
    for(const item of ascendingPresentations) {
      sortedSpeakers.push(item)
      console.log('działa dla domyślnego')
    }
    for(const item of descendingPresentations) {
      sortedSpeakers.push(item)
    }
  } else if(sortType === 'ascending') {
    speakers.sort(compare).reverse()
    console.log('działa dla rosnącego')
    
    for(const item of speakers) {
      sortedSpeakers.push(item)
    }
  } else if(sortType === 'descending') {
    speakers.sort(compare)
    console.log('działa dla malejącego')

    for(const item of speakers) {
      sortedSpeakers.push(item)
    }
  }  

  console.log('ascendingPresentations', ascendingPresentations)
  console.log('descendingPresentations', descendingPresentations)
  console.log('sortedSpeakers', sortedSpeakers)
  return { sortedSpeakers }
}
