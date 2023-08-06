/* 
  'useWeatherData' hook returns the weather data for a given latitude and longitude.
  It use 'getWeatherData' to make API request with given location.
*/

import { useState, useEffect } from "react"
import { getWeatherData } from "../getWeatherData"

export function useWeatherData(latitude, longitude) {
  const [weatherData, setWeatherData] = useState()

  useEffect(() => {
    async function fetchData() {
      try {
        if (latitude !== undefined && longitude !== undefined) {
          const data = await getWeatherData(latitude, longitude)
          setWeatherData(data)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [latitude, longitude])

  return weatherData
}
