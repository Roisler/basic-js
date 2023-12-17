const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(item, depth = 1) {
      if (Array.isArray(item)) {
        return item.map((el) => {
          if (el.length === 0) {
            el.push('1');
          }
          return this.calculateDepth(el, depth + 1);
        }).sort((a, b)=> b - a)[0];
      }
      return depth - 1;
    }
};

module.exports = {
  DepthCalculator
};
