// eslint-disable-next-line no-unused-vars
const strictEqual = (array) => {
  let valueOne = [0]
  let valueTwo = [1]

  // eslint-disable-next-line eqeqeq
  if (valueOne == valueTwo) {
    return true
  } else if (valueOne !== valueTwo) {
    return false
  }
}

module.exports = strictEqual
