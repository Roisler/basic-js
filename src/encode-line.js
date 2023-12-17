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
  if (str.length === 0) {
    return '';
  }
  const result = [];
  const letters = [];
  let count = 1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      letters.push(str[i]);
      count += 1;
    } else {
      result.push(`${count !== 1 ? count : ''}${str[i]}`);
      count = 1;
    }
  }
  
  return result.join('');
}

module.exports = {
  encodeLine
};
