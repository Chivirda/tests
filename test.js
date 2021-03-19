const assert = require('assert')

const count = require('index')

describe('Counting Array Elements', () => {
  it("Should return { 'a': 2, 'b': 3 }", () => {
    assert.equal(count(['a', 'a', 'b', 'b', 'b']), { 'a': 2, 'b': 3 })
  })
})
