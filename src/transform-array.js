const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let newArr = [];
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--double-next') {
        arr[i + 1] ? newArr.push(arr[i + 1]) : newArr;
      } else if (arr[i] === '--double-prev') {
        arr[i - 1] ? newArr.push(arr[i - 1]) : newArr;
      } else if (arr[i] === '--discard-next') {
        i += 2;
      } else if (arr[i] === '--discard-prev') {
        arr[i] ? newArr.pop() : newArr;
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
}
module.exports = {
  transform
};
