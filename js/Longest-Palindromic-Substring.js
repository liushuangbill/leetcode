/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let ans = ''
  const len = s.length
  for (let i = 0; i < len; i++) {
    // 子串为偶数
    const str1 = getPalindrome(s, i, i)
    // 子串为奇数
    const str2 = s[i] === s[i + 1] ? getPalindrome(s, i, i + 1) : ''
    const str = str1.length > str2.length ? str1 : str2
    ans = str.length > ans.length ? str : ans
  }
  return ans
  
  // 根据中心点向外，查找回文子串
  function getPalindrome(s, l, r) {
    const len = s.length
    while (l > 0 && r < len - 1 && s[l - 1] == s[r + 1]) {
      l -= 1
      r += 1
    }
    return s.slice(l, r + 1)
  }
};
