import { useLocation } from "../hooks/useLocation"

export function UserLocation() {
  let { latitude, longitude } = useLocation()

  return (
    <>
      <div className="font-inter font-medium text-sm">
        {latitude}, {longitude}
      </div>
    </>
  )
}
