const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (!this.chain) {
      this.chain = [];
    }
    
    const currentValue = `( ${value === null ? value : String(value)} )`;
    this.chain.push(currentValue);
    return this;
  },
  removeLink(position) {
    if (position > this.chain.length || position < 1 || typeof position !== 'number') {
      this.chain = null;
      throw new Error(`You can't remove incorrect link!`);
    }
    if (this.chain) {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    if (this.chain) {
      this.chain.reverse();
    }
    return this;
  },
  finishChain() {
    const currentChain = this.chain.join('~~');
    this.chain = null;
    return currentChain;
  }
};

module.exports = {
  chainMaker
};
