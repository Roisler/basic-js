const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (typeof n !== 'number') {
    throw new Error('Value is not Number');
  }
  
  const getSum = (num) => {
    const str = num.toString();

    if (num.length === 1) {
      return num;
    }

    const sum = str
        .split('')
        .reduce((acc, item) => {
          acc += Number(item);
          return acc;
        }, 0);
    
    if (sum >= 10) {
      return getSum(sum);
    }

    return sum;
  }

  return getSum(n);
};

module.exports = {
  getSumOfDigits
};
