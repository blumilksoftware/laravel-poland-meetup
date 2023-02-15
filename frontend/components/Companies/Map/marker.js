import mapboxgl from 'mapbox-gl'

export default function (map, data) {
  const popupOptions = {
    closeButton: false,
    closeOnClick: true,
  }

  if(data.length > 1) {
    for (let company of data) {
      buildMarker(company)
    }
  }
  else { 
    buildMarker(data)
  }

  function buildMarker (company) {
    if(company.coordinates) {
    const lat = company.coordinates.lat
    const lng = company.coordinates.lng
    const el = document.createElement('img')

    const width = '50'
    const height = '50'
    el.className = 'h-6 w-6'
    el.src = '/images/marker.png'
    el.style.width = `${width}px`
    el.style.height = `${height}px`
    el.style.backgroundSize = '100%'

    const popupHTML = '<div class="px-4 -m-1"><a class="text-lg font-semibold flex">' + company.name + '</a><p>' + company.location + '</p></div>'

    new mapboxgl.Marker(el)
      .setLngLat([lng, lat])
      .setPopup(new mapboxgl.Popup(popupOptions).setHTML(popupHTML))
      .togglePopup()
      .addTo(map)
    }
  }
}
