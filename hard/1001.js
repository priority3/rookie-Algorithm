/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function (n, lamps, queries) {
  const hash = hamp => {
    return hamp[0] + ',' + hamp[1]
  }
  // 记录规则
  let row = new Map()
  let col = new Map()
  // x-y
  let diagonal = new Map()
  // x+y
  let revDiagonal = new Map()
  // 返回结果
  let res = new Array(queries.length).fill(0)

  let point = new Set()
  for (const lamp of lamps) {
    if (point.has(hash(lamp))) {
      continue
    } else {
      point.add(hash(lamp))
      let x = lamp[0]
      let y = lamp[1]
      row.set(x, (row.get(x) || 0) + 1)
      col.set(y, (col.get(y) || 0) + 1)
      diagonal.set(x - y, (diagonal.get(x - y) || 0) + 1)
      revDiagonal.set(x + y, (revDiagonal.get(x + y) || 0) + 1)
    }
  }
  for (const [i, [x, y]] of queries.entries()) {
    if (row.get(x) || col.get(y) || diagonal.get(x - y) || revDiagonal.get(x + y)) {
      res[i] = 1
    }
    // 删除灯
    for (let j = x - 1; j < x + 2; j++) {
      for (let k = y - 1; k < y + 2; k++) {
        if (j < 0 || j >= n || k < 0 || k >= n) {
          continue
        }
        if (point.has(hash([j, k]))) {
          point.delete(hash([j, k]))
          row.set(j, row.get(j) - 1)
          col.set(k, col.get(k) - 1)
          diagonal.set(j - k, diagonal.get(j - k) - 1)
          revDiagonal.set(j + k, revDiagonal.get(j + k) - 1)
        }
      }
    }
  }
  return res
}

console.log(
  gridIllumination(
    5,
    [
      [0, 0],
      [4, 4],
    ],
    [
      [1, 1],
      [1, 0],
    ]
  )
)
