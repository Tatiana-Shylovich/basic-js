const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, obj) {
  const params = { repeatTimes: 1, separator: '+', additionRepeatTimes: 1, additionSeparator: '|' };
  const newStr = String(str);
  const add = String(obj["addition"]);
  const strRt = obj["repeatTimes"] || params["repeatTimes"];
  const strSep = obj["separator"] || params["separator"];
  const addRt = obj["additionRepeatTimes"] || params["additionRepeatTimes"];
  const addSep = obj["additionSeparator"] || params["additionSeparator"];

  const result = getResult();

  function getResult() {
    let base;
    if (!obj.hasOwnProperty("addition")) { base = newStr; }
    else { base = newStr + repeatStr(add, addRt, addSep); };
    return repeatStr(base, strRt, strSep);
  }

  function repeatStr(elem, times, separator) {
    let arr = [];
    while (arr.length < times) { arr.push(elem); };
    return arr.join(separator);
  }

  return result; 
}

module.exports = {
  repeater
};
