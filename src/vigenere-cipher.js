const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(value = true) {
    this.value = value;
  }

  encrypt(str, key) {

    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    };

    const upperCase = str.toUpperCase();
    const regexp = /[A-Z]/g;
    const letters = upperCase.match(regexp) || [];
    let letterCode = letters.map(e => e = {});
    let keyString = '';
    let letterIndex = [];

    // define letter code
    letterCode.map((elem, i) => {
      elem[letters[i]] = letters[i].charCodeAt() - 65;
    });

    // find letter index in a string
    for (let i = 0; i < upperCase.length; i++) {
      if (letters.includes(upperCase[i])) {
        letterIndex.push(i);
      };
    };

    // create keyString from key
    do {
      keyString += key.toUpperCase();
    } while (letters.length > keyString.length);
    //  cut keyString
    if (letters.length < keyString.length) {
      keyString = keyString.slice(0, letters.length);
    };
    // define key code
    let keyStringCode = keyString.split('').map(e => e = {});
    keyStringCode.map((elem, i) => {
      elem[keyString[i]] = keyString[i].charCodeAt() - 65;
    });

    // changes to letter code - new letters
    keyStringCode.forEach((elem, i) => {
      let sum = letterCode[i][letters[i]] + elem[keyString[i]];
      if (sum >= 26 ) sum = sum - 26;
      letterCode[i][letters[i]] = String.fromCharCode(sum + 65);
    })

    // create encrypted string
    let encryptedString = upperCase.split('');
    for (let i = 0; i < letterIndex.length; i++) {
      encryptedString[letterIndex[i]] = letterCode[i][letters[i]];
    }

    return !this.value ? encryptedString.reverse().join('') : encryptedString.join('');
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    };

    const upperCase = str.toUpperCase();
    const regexp = /[A-Z]/g;
    const letters = upperCase.match(regexp) || [];
    let letterCode = letters.map(e => e = {});
    let keyString = '';
    let letterIndex = [];

    // define letter code
    letterCode.map((elem, i) => {
      elem[letters[i]] = letters[i].charCodeAt() - 65;
    });
  
    //find letter index in a string
    for (let i = 0; i < upperCase.length; i++) {
      if (letters.includes(upperCase[i])) {
        letterIndex.push(i);
      };
    };
  
    // create keyString from key
    do {
      keyString += key.toUpperCase();
    } while (letters.length > keyString.length)
    //  cut keyString
    if (letters.length < keyString.length) {
      keyString = keyString.slice(0, letters.length);
    }
    // define key code
    let keyStringCode = keyString.split('').map(e => e = {})
    keyStringCode.map((elem, i) => {
      elem[keyString[i]] = keyString[i].charCodeAt() - 65;
    });

    // changes to letter code - new letters
    keyStringCode.forEach((elem, i) => {
      let sum = 0;
      if (letterCode[i][letters[i]] < elem[keyString[i]]) {
        sum = (letterCode[i][letters[i]] + 26) - elem[keyString[i]];
      } else {
        sum = letterCode[i][letters[i]] - elem[keyString[i]]
      };
      letterCode[i][letters[i]] = String.fromCharCode(sum + 65);
    });
    // create decrypted string
    let decryptedString = upperCase.split('');
    for (let i = 0; i < letterIndex.length; i++) {
      decryptedString[letterIndex[i]] = letterCode[i][letters[i]];
    };

    return !this.value ? decryptedString.reverse().join('') : decryptedString.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
