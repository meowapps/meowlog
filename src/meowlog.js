import util from 'util';
/**
 * Better console.log() with extra feature:
 * - colored
 * - expand all objects
 * @param  {...any} args 
 */
export function meowlog(...args) {
  args.forEach(arg => {
    try {
      let formatedLog = util.inspect(arg, {depth: null, colors: true});
      console.log(formatedLog);
    } catch (e) {
      console.log(arg);
    }
  });
}

export default meowlog;