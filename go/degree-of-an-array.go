package main

/*
解题方法：滑动窗口

时间复杂度：O(n), 数组遍历了两遍
空间复杂度：O(n), map最坏情况和nums元素个数相等
*/
func findShortestSubArray(nums []int) int {
	degree := 0
	m := make(map[int]int)
	for _, n := range nums {
		m[n] += 1
		degree = max(degree, m[n])
	}

	left, minLen := 0, len(nums)
	m2 := make(map[int]int)
	for right, n := range nums {
		m2[n] += 1
		if m2[n] == degree {
			for m2[n] == degree {
				m2[nums[left]] -= 1
				left += 1
			}
			minLen = min(minLen, right-left+2)
		}
	}
	return minLen
}

/*
解题方法：记录开始与结束位置（最短子数组就是满足条件元素的开始与结束位置的长度）

时间复杂度：O(n), 数组遍历一遍，map遍历一遍
空间复杂度：O(n), map最坏情况和nums元素个数相等
*/
func findShortestSubArray2(nums []int) int {
	degree, minLen := 0, len(nums)
	m := make(map[int]int)
	left, right := make(map[int]int), make(map[int]int)

	for i, n := range nums {
		if _, ok := left[n]; !ok {
			left[n] = i
		}
		right[n] = i
		m[n] += 1
		degree = max(degree, m[n])
	}

	for k, v := range m {
		if v == degree {
			minLen = min(minLen, right[k]-left[k]+1)
		}
	}

	return minLen
}
