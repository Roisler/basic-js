const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const addition = `${options['addition'] === undefined ? '' : options['addition']}`;
  const resultAddition = [];
  for (let i = 1; i <= (options['additionRepeatTimes'] || 1); i += 1) {
    resultAddition.push(String(addition));
  }
  const string = `${String(str)}${resultAddition.join(`${options['additionSeparator'] || '|'}`)}`;
  const resultString = [];
  for (let i = 1; i <= (options['repeatTimes'] || 1); i += 1) {
    resultString.push(string);
  }

  return resultString.join(options.separator || '+');
};

module.exports = {
  repeater
};
