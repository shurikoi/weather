import { GeneralData } from "./GeneralData"
import { setBodyColor } from "../setBodyColor"
import { UserLocation } from "./UserLocation"
import { useLocation } from "../hooks/useLocation"
import { useWeatherData } from "../hooks/useWeatherData"

export function MainPage() {
  const [ latitude, longitude ] = useLocation()
  const weatherData = useWeatherData(latitude, longitude)
  
  setBodyColor({ color: "#4C4C4C" })

  return (
    <div className="text-white justify-center flex pt-10">
      <div className="flex flex-col w-2/3 gap-6">
        <UserLocation userCity={weatherData?.location?.name} />
        <GeneralData currentTemp={weatherData?.current?.temp_c}/>
      </div>
    </div>
  )
}
