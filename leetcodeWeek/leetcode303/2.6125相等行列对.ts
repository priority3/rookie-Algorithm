function equalPairs(grid: number[][]): number {
  const m = grid.length
  let res = 0
  for (let i = 0; i < m; i++) {
    const temp = []
    for (let j = 0; j < m; j++) {
      // row
      temp.push(grid[i][j])
    }
    console.log(temp)

    for (let p = 0; p < m; p++) {
      for (let k = 0; k < m; k++) {
        // col
        let flag = true
        while (temp.length) {
          if (temp.shift() !== grid[k][p]) {
            flag = false
            break
          }
        }
        flag && res++
      }
    }
  }
  return res
}

console.log(equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]]))
