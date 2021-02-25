package main

/*
时间复杂度：O(mn)
空间复杂度：O(1) 返回结果不算在空间复杂度内。
*/
func transpose(matrix [][]int) [][]int {
	n, m := len(matrix), len(matrix[0])
	ans := make([][]int, 0, m)
	for y := 0; y < m; y++ {
		ns := make([]int, 0, n)
		for x := 0; x < n; x++ {
			ns = append(ns, matrix[x][y])
		}
		ans = append(ans, ns)
	}
	return ans
}
