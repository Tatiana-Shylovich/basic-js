const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let count = 0;
  const arrays = domains.map(e => e.split('.').reverse());
  const reversedDomains = arrays.map(e => e.join('.'));
  
  function getDomain() {
    let arr = [];
    for (let i = 0; i < arrays.length; i++) {
      for (let j = 1; j <= arrays[i].length; j++) {
        const element = arrays[i].slice(0, j).join('.');
        if (!arr.includes(element)) {
          arr.push(element);
        }
      }
    };
    for (let i = 0; i < arr.length; i++) {
      countDomains(arr[i]);
    };
  }
  getDomain();

  function countDomains(domain) {
    for (let i = 0; i < reversedDomains.length; i++) {
      if (reversedDomains[i].includes(domain)) {
        count++;
      }
      if (!result.hasOwnProperty(domain)) {
        result[`.${domain}`] = count;
      }
    };
    count = 0;
  };

  return result;
}

module.exports = {
  getDNSStats
};
