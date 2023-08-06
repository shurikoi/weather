/* 
  'useLocation' hook gets user's location and returns its latitude and longitude.
  If failed to get user's geolocation it sets geolocation of Paris as defauls.
*/

import { useEffect, useState } from "react"

export function useLocation() {
  // states for recording final result
  const [processedLatitude, setProcessedLatitude] = useState()
  const [processedLongitude, setProcessedLongitude] = useState()

  // function to get user's location 
  function requestLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        // if successful it resolve promise with user's coordinates 
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        },
        (error) => reject(error)
      )
    })
  }

  useEffect(() => {
    requestLocation()
      .then(({ latitude, longitude }) => {
        // if request is successful it sets its latitude and longitude
        setProcessedLatitude(latitude)
        setProcessedLongitude(longitude)
      })
      .catch((error) => {
        // if error it sets geolocation of Paris and log the error
        setProcessedLatitude(48.856614)
        setProcessedLongitude(2.3522219)
        console.error("FAILED TO GET GEOLOCATION:", error)
      })
  }, [])

  return [processedLatitude, processedLongitude]
}
