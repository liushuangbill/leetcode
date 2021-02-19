package main

/*
最大连续1的个数 III
本题是求最大连续子区间，可以使用滑动窗口方法。
滑动窗口的限制条件是：窗口内最多有 K 个 0。

代码思路：
使用 left 和 right 两个指针，分别指向滑动窗口的左右边界。
right 主动右移：right 指针每次移动一步。当 A[right] 为 0，说明滑动窗口内增加了一个 0；
left 被动右移：判断此时窗口内 0 的个数，如果超过了 K，则 left 指针被迫右移，直至窗口内的 0 的个数小于等于 K 为止。
滑动窗口长度的最大值就是所求。

时间复杂度：O(N)，因为每个元素只遍历了一次。
空间复杂度：O(1)，因为使用了常数个空间。
*/
func longestOnes(A []int, K int) int {
	left, maxLen, zeros := 0, 0, 0
	for right, v := range A {
		if v == 0 {
			zeros += 1
		}
		for zeros > K {
			if A[left] == 0 {
				zeros -= 1
			}
			left += 1
		}
		maxLen = max(maxLen, right-left+1)
	}
	return maxLen
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
