export default function count(array){
  let uniqueElements = new Set(array)
  let countOfUniquElements = {}

  for(let val of uniqueElements) {
    countOfUniquElements[val] = 0
  }

  for(let key in countOfUniquElements) {
    for(let elem of array) {
      if(key === String(elem)) {
        countOfUniquElements[key] += 1
      }
    }
  }

  return countOfUniquElements
}