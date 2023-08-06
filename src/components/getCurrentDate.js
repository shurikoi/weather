export function getCurrentDate() {
  const date = new Date()
  const currentDate = date.toUTCString().slice(5, 16)
  const currentDay = date.toLocaleString("en-IN", { weekday: "long" })
  
  return { currentDate, currentDay }
}
