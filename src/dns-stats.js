const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = domains
    .reduce((acc, el) => {
      const domain = el.split('.').reverse();
      console.log(el)
      console.log(domain)
      const domainLength = domain.length;
      for (let i = 0; i < domainLength; i += 1) {
        const newKey = `.${domain.join('.')}`;
        acc[newKey] = (acc[newKey] || 0) + 1;
        domain.pop();
      }
      /*domains.forEach(() => {
        const newKey = `.${domains.join('.')}`;
        acc[newKey] = (acc[newKey] || 0) + 1;
        domains.pop();
      })*/
      /*const newKey = `.${el}`;
      acc[newKey] = (acc[newKey] || 0) + 1;*/
      return acc;
    }, {});

  return result;
}

module.exports = {
  getDNSStats
};
