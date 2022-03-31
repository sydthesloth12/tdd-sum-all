const strictEqual = (array) => {
  let valueOne = [0]
  let valueTwo = [1]

  if (valueOne == valueTwo) {
    return true
  } else if (valueOne !== valueTwo) {
    return false
  }
}

module.exports = strictEqual
