const assert = require('assert')

const chooseBestSum = require('./src')

describe("chooseBestSum", function () {
  it("163", function () {
    var ts = [50, 55, 56, 57, 58]
    assert.equal(chooseBestSum(163, 3, ts), 163)
  })
  it("Null", function () {
    let ts = [50]
    assert.equal(chooseBestSum(163, 3, ts), null)
  })
  it("228", function () {
    let ts = [91, 74, 73, 85, 73, 81, 87]
    assert.equal(chooseBestSum(230, 3, ts), 228)
  })
})