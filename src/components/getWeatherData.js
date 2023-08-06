import axios from "axios"
import { weatherApiKey } from "../storage"

export async function getWeatherData(latitude, longitude) {
  try {
    const weatherApiRequest = {
      url: "https://api.weatherapi.com/v1/current.json",
      params: {
        // key is still visible in url request
        key: weatherApiKey,
        q: `${latitude},${longitude}`,
      },
    }

    const response = await axios(weatherApiRequest)

    return response.data
  } catch (error) {
    console.error(error)
  }
}
