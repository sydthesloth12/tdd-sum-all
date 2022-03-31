const describe = require('mocha').describe

const it = require('mocha').it

const expect = require('chai').expect

const strictEqual = require('../calculation')

describe('calculation.js test suite', () => {
  describe('strictEqual tests', () => {
    it('returns the value of a false array', () => {
      const mockData = ['5', 5]
      const expectedResult = false

      const actualResult = strictEqual(mockData)

      expect(actualResult).to.be.equal(expectedResult)
    })

    it('returns value of true array number', () => {
      const mockData = [5, 5]
      const expectedResult = true

      const actualResult = strictEqual(mockData)

      expect(actualResult).to.be.equal(expectedResult)
    })

    it('returns the value of a 2nd false array', () => {
      const mockData = [5, '5']
      const expectedResult = false

      const actualResult = strictEqual(mockData)

      expect(actualResult).to.be.equal(expectedResult)
    })

    it('returns value of true array string', () => {
      const mockData = ['5', '5']
      const expectedResult = true

      const actualResult = strictEqual(mockData)

      expect(actualResult).to.be.equal(expectedResult)
    })
  })
})
