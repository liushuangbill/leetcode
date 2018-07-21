/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring (s) {
  if (s.length < 2) {
    return s.length
  }

  const map = {}
  let left = 0

  return s.split('').reduce((max, v, i) => {
    // left为重复字母的上一个字母所在的位置，并且在上一个重复字母的右边
    left = map[v] >= left ? map[v] + 1 : left
    // 存下每个字母最后一次出现所在的下标
    map[v] = i
    // i - left + 1 为当前字母到上一个字母之间的长度
    return Math.max(max, i - left + 1)
  }, 0)
}
