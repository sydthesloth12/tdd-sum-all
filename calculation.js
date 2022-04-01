const strictEqual = (inputOne, inputTwo) => {
  return types(inputOne, inputTwo) && values(inputOne, inputTwo)
}

const types = (inputOne, inputTwo) => {
  return typeof inputOne == typeof inputTwo
}

const values = (inputOne, inputTwo) => {
  return inputOne == inputTwo
}

module.exports = strictEqual
