/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length
  let ans = ''

  // 对称点为奇数
  for (let i = 0; i < len; i++) {
    const str = getPalindrome(len, s, i, i)
    if (str.length > ans.length) {
      ans = str
    }
  }

  // 对称点为偶数
  for (let i = 0; i < len - 1; i++) {
    if (s[i] === s[i + 1]) {
      const str = getPalindrome(len, s, i, i + 1)
      if (str.length > ans.length) {
        ans = str
      }
    }
  }

  return ans
};

function getPalindrome(len, s, left, right) {
  while (left > 0 && right < len - 1 && s[left - 1] === s[right + 1]) {
    left -= 1
    right += 1
  }
  return s.slice(left, right + 1)
}
