import { GeneralData } from "./GeneralData"
import { setBodyColor } from "../setBodyColor"
import { UserLocation } from "./UserLocation";

export function MainPage() {
  setBodyColor({color: '#4C4C4C'});
  return (
    <div className="text-white justify-center flex pt-10">
      <div className="w-2/3">
        <UserLocation />
        <GeneralData />
      </div>
    </div>
  )
}
