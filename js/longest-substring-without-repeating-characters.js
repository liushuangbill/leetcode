/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = {}
  // 左边的参照
  let left = 0
  return s.split('').reduce((max, cur, i) => {
    left = map[cur] >= left ? map[cur] + 1 : left
    map[cur] = i
    return Math.max(max, i - left + 1)
  }, 0)
};
