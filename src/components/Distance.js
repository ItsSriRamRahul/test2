import { useState, useEffect } from 'react'

export default function Distance(lon1, lat1) {
  /* navigator.geolocation.getCurrentPosition((position) => {
    newMylong(position.coords.longitude)
    newMylat(position.coords.latitude)
  })*/
  const R = 6371 // metres
  //const [lat2, newMylat] = useState()
  // const [lon2, newMylong] = useState()
  const lat2 = 17.4447
  const lon2 = 78.4664
  const φ1 = (lat1 * Math.PI) / 180 // φ, λ in radians
  const φ2 = (lat2 * Math.PI) / 180
  const Δφ = ((lat2 - lat1) * Math.PI) / 180
  const Δλ = ((lon2 - lon1) * Math.PI) / 180

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  const d = R * c // in metres

  return d
}
