import { getCurrentDate } from "../getCurrentDate"

export function Info({ currentTemp }) {
  const { currentDate, currentDay } = getCurrentDate()
  return (
      <div className="w-auto">
        <div className="text-4xl font-inter font-medium">Rain</div>
        <div className="mt-28">
          <div className="text-5xl font-inter font-medium">{currentTemp}°C</div>
          <div className="pt-1 text-md font-inter font-regular">
            {currentDay} | {currentDate}
          </div>
        </div>
      </div>
  )
}