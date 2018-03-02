/* eslint no-use-before-define: 0, no-shadow: 0 */
import { add, multiply } from 'ramda';

function innerAdd(a, b) {
  const result = add(a, b);
  function add(c, d) {
    return c + d;
  }
  return result;
}

const outerAdd = add;

const output = multiply(innerAdd(1, 2), outerAdd(3, 4));

export default output;
