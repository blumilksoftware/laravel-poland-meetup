
export function useSortMeetups (selectedMeetups, sortType) {
  const oldMeetups = []
  const futureMeetups = []
  const today = new Date()
  let sortedMeetups = []


  function sort() {
    for(const meetup of selectedMeetups) {
      if(new Date(meetup.date) >= today ) {
      futureMeetups.push(meetup)
    }
    else 
      oldMeetups.push(meetup)
    }
  
    function compare( a, b ) {
      if ( a.date < b.date ) {
        return -1
      }
      if ( a.date > b.date ) {
        return 1
      }
      return 0
    }
    
    futureMeetups.sort(compare)
    oldMeetups.sort(compare).reverse()


    if(sortType === 'Sortuj domyślnie') {
      for(const item of futureMeetups) {
        sortedMeetups.push(item)
      }
      for(const item of oldMeetups) {
        sortedMeetups.push(item)
      }
    }

    else if(sortType === 'Sortuj według daty malejąco') {
      sortedMeetups = selectedMeetups.sort(compare).reverse()
    }
    
    else if(sortType === 'Sortuj według daty rosnąco') {
      sortedMeetups = selectedMeetups.sort(compare)
    }  
  }
  sort()

  return { sortedMeetups }
}
