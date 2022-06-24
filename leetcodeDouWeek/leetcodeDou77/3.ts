function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
  let map = Array(m)
    .fill(0)
    .map(_ => Array(n).fill(0))
  //守卫记作1
  guards.forEach(guard => {
    map[guard[0]][guard[1]] = 1
  })
  // 墙记作2
  walls.forEach(wall => {
    map[wall[0]][wall[1]] = 2
  })
  console.log(map)
  let res = 0
  const dfs = (map: number[][], row: number, column: number) => {
    if (row < 0 || row >= m || column < 0 || column >= n) {
      return
    }
    if (map[row][column] === 3) {
      return
    }
    if (map[row][column] === 2) {
      return
    }
    if (map[row][column] === 1) {
      //  4 已经走过
      map[row][column] = 3
      dfs(map, row, column - 1)
      dfs(map, row, column + 1)
      dfs(map, row - 1, column)
      dfs(map, row + 1, column)
    } else {
      map[row][column] = 1
    }
  }
  guards.map(item => {
    dfs(map, item[0], item[1])
  })
  map.forEach(item => {
    item.forEach(it => {
      res += !it ? 1 : 0
    })
  })
  console.log(map)

  return res
}
console.log(
  countUnguarded(
    4,
    6,
    [
      [0, 0],
      [1, 1],
      [2, 3],
    ],
    [
      [0, 1],
      [2, 2],
      [1, 4],
    ]
  )
)
