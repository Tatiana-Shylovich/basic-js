const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arrOfNum = []
  let count = 1
   for (let i = 0; i < str.length; i++) {
     if (str[i] === str[i + 1]) {
       count++
     } else if (str[i] === str[i - 1] && str[i] !== str[i + 1]) {
       arrOfNum.push(count, str[i])
       count = 1
     } else {
      arrOfNum.push(str[i])
     }
   }   
  return arrOfNum.join('')
}


module.exports = {
  encodeLine
};
