package main

/*
解题方法：滑动窗口

时间复杂度：O(n)
*/
func lengthOfLongestSubstring(s string) int {
	left, maxLen := 0, 0
	// 使用slice比map更省内存；ascii范围 0 - 127
	// 提前申请长度，减少申请内存时间
	m := make([]int, 127)
	for right, c := range s {
		if m[c] != 0 {
			left = max(left, m[c])
		}
		maxLen = max(maxLen, right-left+1)
		m[c] = right + 1
	}
	return maxLen
}
