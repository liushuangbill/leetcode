package main

/*
解题思路：每个元素与其左上角元素相等即满足条件

时间复杂度：O(mn)，其中n为行数，m为列数。矩阵中每个元素最多被访问两次
空间复杂度：O(1)，使用常数个变量
*/
func isToeplitzMatrix(matrix [][]int) bool {
	n, m := len(matrix), len(matrix[0])
	for i := 1; i < n; i++ {
		for j := 1; j < m; j++ {
			if matrix[i][j] != matrix[i-1][j-1] {
				return false
			}
		}
	}
	return true
}
