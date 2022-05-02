const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const num = parseFloat(sampleActivity)
  const log = Math.log(MODERN_ACTIVITY / num) / (0.693 / HALF_LIFE_PERIOD)
  if (arguments.length === 0 || typeof sampleActivity !== 'string') {
    return false
  } else if (num === 0 || num < 0 || num > MODERN_ACTIVITY || isNaN(num)) {
    return false
  } else {
    return Math.ceil(log)
  }
}

module.exports = {
  dateSample
};
