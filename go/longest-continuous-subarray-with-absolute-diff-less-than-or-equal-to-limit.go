package main

func main() {
	longestSubarray([]int{4, 2, 2, 2, 4, 4, 2, 2}, 0)
}

/*
解题方法: 滑动窗口 + 单调队列
我们使用一个单调递增的队列 queMin 维护最小值，一个单调递减的队列 queMax 维护最大值。这样我们只需要计算两个队列的队首的差值，即可知道当前窗口是否满足条件。

时间复杂度：O(n)，其中n是数组长度。最多遍历该数组两次，right一次，left一次；两个单调队列入队出队次数也都为O(n)
空间复杂度：O(n)，其中n是数组长度。最坏情况下单调队列将和原数组等长
*/
func longestSubarray(nums []int, limit int) int {
	left, maxLen := 0, 0
	var minQ, maxQ []int

	for right, num := range nums {
		for len(minQ) > 0 && minQ[len(minQ)-1] > num {
			minQ = minQ[:len(minQ)-1]
		}
		minQ = append(minQ, num)

		for len(maxQ) > 0 && maxQ[len(maxQ)-1] < num {
			maxQ = maxQ[:len(maxQ)-1]
		}
		maxQ = append(maxQ, num)

		for maxQ[0]-minQ[0] > limit {
			if nums[left] == minQ[0] {
				minQ = minQ[1:]
			}
			if nums[left] == maxQ[0] {
				maxQ = maxQ[1:]
			}
			left++
		}
		maxLen = max(maxLen, right-left+1)
	}

	return maxLen
}
