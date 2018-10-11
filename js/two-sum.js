/*
  为了对运行时间复杂度进行优化，我们需要一种更有效的方法来检查数组中是否存在目标元素。
  如果存在，我们需要找出它的索引。保持数组中的每个元素与其索引相互对应的最好方法是什么？
  哈希表。
*/

var twoSum = function (nums, target) {
  const map = {}
  const len = nums.length

  for (let i = 0; i < len; i++) {
    const c = target - nums[i]
    // map[c]为满足条件的值
    if (map[c] !== undefined && map[c] !== i) {
      return [map[c], i]
    }
    map[nums[i]] = i
  }
};
