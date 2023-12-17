const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const reversed = matrix.reduce((acc, el) => {
    for (let i = 0; i < el.length; i += 1) {
      acc[i] = acc[i] || [];
      acc[i].push(el[i]);
    }
    return acc;
  }, {});
  const keys = Object.keys(reversed);
  let sum = 0;
  keys.forEach((key) => {
    let index = reversed[key].indexOf(0);
    if (index === -1) {
      index = reversed[key].length - 1;
    }
    for (let i = index; i >= 0; i -= 1) {
      sum += reversed[key][i];
    }
  });

  return sum;
};

module.exports = {
  getMatrixElementsSum
};
