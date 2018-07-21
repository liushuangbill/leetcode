var hammingDistance = function (x, y) {
  let s = (x ^ y).toString(2)
  return [...s].filter(x => x > 0).length
}
