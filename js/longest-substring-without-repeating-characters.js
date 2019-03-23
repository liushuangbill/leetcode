/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let ans = 0
  const len = s.length
  const m = {}
  // j 代表无重复子串的起始位置
  // 当出现重复字母时，无重复子串的长度为上一次字母出现的位置的后一个，到当前字母的距离
  // 同时j的位置更新为上一个重复字母位置的下一个位置
  for (let i = 0, j = 0; i < len; i++) {
    j = Math.max(j, m[s[i]] || 0)
    ans = Math.max(ans, i - j + 1)
    m[s[i]] = i + 1
  }
  return ans
};
