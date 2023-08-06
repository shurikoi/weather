import { IconStatus } from "./IconStatus"
import { Info } from "./Info"

export function GeneralData({ currentTemp }) {
  return (
    <div className="items-center flex justify-between">
      <Info currentTemp={currentTemp} />
      <IconStatus />
    </div>
  )
}
