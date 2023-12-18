const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  const sorted = str.split('').sort((a, b) => a - b);

  const findDigit = (arr, number) => {
    const cloneStr = [...str];

    cloneStr.splice(cloneStr.indexOf(arr[0]), 1);

    sorted.splice(0, 1);
    const result = Number(cloneStr.reduce((acc, item) => acc + item, ''));
    return result * 10 >= number ? result : findDigit(sorted, number);
  }

  return findDigit(sorted, n)
};

module.exports = {
  deleteDigit
};
