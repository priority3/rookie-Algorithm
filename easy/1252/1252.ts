function oddCells(m: number, n: number, indices: number[][]): number {
  // add row col
  const row: Array<number> = Array(m).fill(0); const col: Array<number> = Array(n).fill(0)
  indices.forEach((item) => {
    item.forEach((i, ind) => {
      ind === 0 && row[i]++
      ind === 1 && col[i]++
    })
  })
  let res = 0
  row.forEach((item) => {
    col.forEach((item2) => {
      if ((item + item2) % 2 !== 0)
        res++
    })
  })
  return res
}
oddCells(2, 2, [[1, 1], [0, 0]])
