const assert = require('assert')

const chooseBestSum = require('./src')
const twoSum = require('./src/twoSum')

// describe("chooseBestSum", function () {
//   it("163", function () {
//     var ts = [50, 55, 56, 57, 58]
//     assert.equal(chooseBestSum(163, 3, ts), 163)
//   })
//   it("Null", function () {
//     let ts = [50]
//     assert.equal(chooseBestSum(163, 3, ts), null)
//   })
//   it("228", function () {
//     let ts = [91, 74, 73, 85, 73, 81, 87]
//     assert.equal(chooseBestSum(230, 3, ts), 228)
//   })
// })

describe('twoSum', () => {
  const testCases = [
    [[1, 2, 3], 4, [0, 2]],
    [[1234, 5678, 9012], 14690, [1, 2]],
    [[2, 2, 3], 4, [0, 1]],
    [[2, 3, 1], 4, [1, 2]]
  ];
  for (const [numbers, target, expected] of testCases)
    it(`Testing for numbers = [${numbers.join(", ")}], target = ${target}`, () => check(numbers, target, expected));

  const numericalCompare = (a, b) => a - b;
  function check(arr, target, expected) {
    actual = twoSum(arr.slice(), target);
    assert(Array.isArray(actual));
    assert.deepEqual(actual.sort(numericalCompare), expected);
  }
})