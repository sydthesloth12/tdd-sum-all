const describe = require('mocha').describe

const it = require('mocha').it

const expect = require('chai').expect

const strictEqual = require('../calculation')

describe('calculation.js test suite', () => {
  describe('strictEqual tests', () => {
    it('string and number, returns false', () => {
      const expectedResult = false
      const actualResult = strictEqual(5, '5')

      expect(actualResult).to.be.equal(expectedResult)
    })

    it('number and number, returns true', () => {
      const expectedResult = true
      const actualResult = strictEqual(5, 5)

      expect(actualResult).to.be.equal(expectedResult)
    })

    it('string and string, returns true', () => {
      const expectedResult = true
      const actualResult = strictEqual('six', 'six')

      expect(actualResult).to.be.equal(expectedResult)
    })

    it('string and string, returns false', () => {
      const expectedResult = false

      const actualResult = strictEqual('8', '9')

      expect(actualResult).to.be.equal(expectedResult)
    })

    it('number and string, returns false', () => {
      const expectedResult = false

      const actualResult = strictEqual(8, 'Hello')

      expect(actualResult).to.be.equal(expectedResult)
    })
  })
})
