const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (this.arr[position - 1]) {
      this.arr = this.arr.filter(e => this.arr.indexOf(e) !== (position - 1));
      // this.arr.splice(position - 1, 1);
      return this;
    }
    this.arr = [];
    throw new Error ('You can\'t remove incorrect link!');
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const chain = this.arr.join('~~');
    this.arr = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
