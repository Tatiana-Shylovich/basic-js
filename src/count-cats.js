const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let arr = []
  arr = matrix.map(item => item.filter(e => e === '^^'))
  arr = arr.map(item => item.length).reduce((sum, curr) => sum + curr, 0)
  return arr
  
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
}

module.exports = {
  countCats
};
