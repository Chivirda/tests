const app = document.getElementById('app')
const year = 89

app.innerHTML = century(year)


function century(year) {
  if (year % 100 !== 0)
    return Math.floor(year / 100 + 1) 

  return year / 100
}