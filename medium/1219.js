/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  let m = grid.length
  let n = grid[0].length
  let res = 0
  let dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  const dfs = (x, y, gold) => {
    gold += grid[x][y]
    res = Math.max(gold, res)

    const temp = grid[x][y]
    grid[x][y] = 0
    for (let dir of dirs) {
      const cx = dir[0] + x
      const cy = dir[1] + y
      if (cx >= 0 && cy >= 0 && cx < m && cy < n && grid[cx][cy] !== 0) {
        dfs(cx, cy, gold)
      }
    }
    // 防止往回走
    grid[x][y] = temp
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== 0) {
        dfs(i, j, 0)
      }
    }
  }
  return res
}

console.log(
  getMaximumGold([
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0],
  ])
)
