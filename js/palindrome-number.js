/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x >= 0 && x < 10) return true
  if (x < 0 || x % 10 === 0) return false
  return x.toString() === x.toString().split('').reverse().join('')
};
