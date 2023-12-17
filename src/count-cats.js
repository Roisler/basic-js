const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (matrix.length === 0) {
    return 0;
  }
  const cat = '^^';
  const resultArray = matrix.filter((el) => el.includes(cat));
  if (resultArray.length === 0) {
    return 0;
  }
  const arrayCats = [];
  const countCats = resultArray.map((el) => {
    return el.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
  })
  .reduce((acc, item) => acc + item[cat], 0);
  return countCats;
};

module.exports = {
  countCats
};
