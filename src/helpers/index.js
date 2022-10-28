




export const getDate = () => {
  const date = new Date()
  const dd = date.getDate()
  const mm = date.getMonth()+1
  const yyyy = date.getFullYear()
  const fullDate = `${dd}/${mm}/${yyyy}`
  return fullDate
}





