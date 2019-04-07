/**
 * @param {string} s
 * @param {number} numRows 行数
 * @return {string}
 */
// 从左到右迭代s，将每个字符添加到合适的行，使用当前行和当前方向对合适的行进行追踪
// 只有当我们向上移动到最上面的行或向下移动到最下面的行时，当前方向才会发生改变。
// 时间复杂度：O(n)，其中 n == s.length
// 空间复杂度：O(n)
var convert = function(s, numRows) {
  if (numRows === 1) return s
  // rows的每一项代表一行
  let rows = []
  let curRow = 0
  // 表示遍历字符的方向
  let goingDown = false
  
  for (let i = 0, len = Math.min(s.length, numRows); i < len; i++) {
    rows[i] = ''
  }
  
  for (let v of s) {
    rows[curRow] += v
    // 方向变换
    if (curRow === 0 || curRow === (numRows - 1)) {
      goingDown = !goingDown
    }
    curRow += goingDown ? 1 : -1
  }
  
  return rows.join('')
}
