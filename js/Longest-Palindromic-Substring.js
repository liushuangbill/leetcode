/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s
  }

  let len = s.length
  let ans = ''

  // 对称点比较法
  // 回文子串长度为奇数，对称点只有一个字符
  for (let i = 0; i < len; i++) {
    let left = i
    let right = i

    while (left > 0 && right < len - 1 && s[left - 1] === s[right + 1]) {
      left -= 1
      right += 1
    }

    let str = s.slice(left, right + 1)
    if (str.length > ans.length) {
      ans = str
    }
  }

  // 回文子串长度为偶数，对称点有两个
  for (let i = 0; i < len - 1; i++) {
    // 对称点相同才有比较的意义
    if (s[i] === s[i + 1]) {
      let left = i
      let right = i + 1

      while (left > 0 && right < len - 1 && s[left - 1] === s[right + 1]) {
        left -= 1
        right += 1
      }

      let str = s.slice(left, right + 1)
      if (str.length > ans.length) {
        ans = str
      }
    }
  }

  return ans
}
