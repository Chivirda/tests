module.exports = (numbers, target) => {
  for (let first = 0; first < numbers.length; first++) {
    for (let second = 1; second < numbers.length; second++) {
      if (target === numbers.at(first) + numbers.at(second)) {
        return [first, second]
      }
    }
  }
}
