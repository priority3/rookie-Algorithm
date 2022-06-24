function findBall(grid: number[][]): number[] {
  let n: number = grid[0].length
  let result: number[] = new Array(n).fill(-1)
  for (let i = 0; i < n; i++) {
    let col: number = i
    for (const row of grid) {
      // 得到当前的方向
      let currow: number = row[col]
      // 球往下掉之后的下一个方向
      col += currow
      if (col < 0 || col >= n || row[col] !== currow) {
        col = -1
        break
      }
    }
    if (col >= 0) {
      result[i] = col
    }
  }
  return result
}
