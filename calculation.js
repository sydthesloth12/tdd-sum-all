const strictEqual = (inputOne, inputTwo) => {
  return types(inputOne, inputTwo) && values(inputOne, inputTwo)
}

const types = (inputOne, inputTwo) => {
  return typeof inputOne === typeof inputTwo
}

const values = (inputOne, inputTwo) => {
  // eslint-disable-next-line eqeqeq
  return inputOne == inputTwo
}

module.exports = strictEqual
