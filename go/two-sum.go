package leetcode

func twoSum(nums []int, target int) []int {
	m := make(map[int]int)
	len := len(nums)
	var ans []int
	for i := 0; i < len;i++ {
		cc := target - nums[i]
		k, ok := m[cc]
		if !ok {
			m[nums[i]] = i
		} else {
			return append(ans, k, i)
		}
	}
	
	return ans
}