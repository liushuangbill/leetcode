package main

func twoSum(nums []int, target int) []int {
	m := make(map[int]int)
	length := len(nums)
	var ans []int
	for i := 0; i < length; i++ {
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
