var twoSum = function (nums, target) {
  let map = {}
  let len = nums.length

  for (let i = 0; i < len; i++) {
    let c = target - nums[i]
    if (map[c] !== undefined && map[c] !== i) {
      return [map[c], i]
    }
    map[nums[i]] = i
  }
}
