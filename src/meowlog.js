const util = require('util');

/**
 * Better console.log() with extra features:
 * - colored
 * - expand all objects
 * @param  {...any} args 
 */
function meowlog(...args) {
  args.forEach(arg => {
    try {
      let formatedLog = util.inspect(arg, { depth: null, colors: true });
      console.log(formatedLog);
    } catch (e) {
      console.log(arg);
    }
  });
}

module.exports = meowlog;
