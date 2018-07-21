var reverse = function (x) {
  if (x < 0) return -reverse(-x)
  let n = +x.toString().split('').reverse().join('')
  // >>0 返回n的32位带符号整数
  if (n >> 0 !== n) return 0
  return n
}
