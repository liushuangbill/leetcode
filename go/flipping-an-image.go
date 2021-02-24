package main

/*
解题方法：翻转和反转同时进行

时间复杂度：O(mn), n为切片长度，m为子切片长度
空间复杂度：O(1), 使用常数个变量
*/
func flipAndInvertImage(A [][]int) [][]int {
	rows := len(A)
	cols := len(A[0])
	for i := 0; i < rows; i++ {
		// 只需要翻转一半
		for j := 0; j < (cols+1)/2; j++ {
			// 翻转和反转同时进行
			A[i][j], A[i][cols-1-j] = 1-A[i][cols-1-j], 1-A[i][j]
		}
	}
	return A
}
