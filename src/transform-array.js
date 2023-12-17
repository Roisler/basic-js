const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  
  const newArr = [...arr];
  const obj = Object.assign({}, newArr);

  for (let i = 0; i < newArr.length; i += 1) {
    switch (obj[i]) {
      case '--discard-next':
        obj[i] = [];
        if (i === newArr.length - 1) {
          break;
        }
        obj[i + 1] = [];
        break;
      case '--discard-prev':
        obj[i] = [];
        if (i === 0) {
          break;
        }
        obj[i - 1] = [];
        break;
      case '--double-next':
        if (i === newArr.length - 1) {
          obj[i] = [];
          break;
        }
        obj[i] = obj[i + 1];
        break;
      case '--double-prev':
        if (i === 0) {
          obj[i] = [];
          break;
        }
        obj[i] = obj[i - 1];
        break;
      default:
        break;
    }
  };

  const result = [];
  const keys = Object.keys(obj);

  keys.forEach((key) => {
    result.push(obj[key]);
  });
  return result.flat();
};

module.exports = {
  transform
};
