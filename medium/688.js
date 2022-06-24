/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
// 栈溢出
var knightProbability = function (n, k, row, column) {
  const dirs = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
  ]
  let count = 0
  let arr = new Array(n).fill(0).map(item => new Array(n).fill(0))
  console.log(n, k, row, column)

  const bfs = (arr, n, row, column) => {
    if (row < 0 || row >= n || column < 0 || column >= n) {
      return
    }
    for (const dir of dirs) {
      let x = row + dir[0]
      let y = column + dir[1]
      bfs(arr, n, x, y)
    }
    count++
  }
  bfs(arr, n, row, column)
  return count
}
console.log(knightProbability(3, 2, 0, 0))
