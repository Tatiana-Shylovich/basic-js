const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
// let numArr = n.toString().split('')
// let numArr1 = n.toString().split('')
// let newArr = []
// for (let i = 0; i < numArr.length; i++) {
//   numArr1.splice(numArr1[i], 1)
//   newArr.push(numArr1.join(''))
//   numArr1 = n.toString().split('')
// }
// // newArr.sort((a, b) => b - a)
// return newArr
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
