export function useSortedMeetups (selectedMeetups, sortType) {
  const oldMeetups = []
  const futureMeetups = []
  const today = new Date()
  let sortedMeetups = []

  for(const meetup of selectedMeetups) {
    if(new Date(meetup.date) >= today) {
    futureMeetups.push(meetup)
    }
    else {
      oldMeetups.push(meetup)
    }
  }

  function compare(a, b) {
    if (a.date < b.date) {
      return -1
    }
    if (a.date > b.date) {
      return 1
    }
    return 0
  }
  
  futureMeetups.sort(compare)
  oldMeetups.sort(compare).reverse()

  if(sortType === 'default') {
    for(const item of futureMeetups) {
      sortedMeetups.push(item)
    }
    for(const item of oldMeetups) {
      sortedMeetups.push(item)
    }
  } else if(sortType === 'newestFirst') {
    selectedMeetups.sort(compare).reverse()

    for(const item of selectedMeetups) {
      sortedMeetups.push(item)
    }
  } else if(sortType === 'oldestFirst') {
    selectedMeetups.sort(compare)

    for(const item of selectedMeetups) {
      sortedMeetups.push(item)
    }
  }  

  return { sortedMeetups }
}
