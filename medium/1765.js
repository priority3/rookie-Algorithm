/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
  let m = isWater.length
  let n = isWater[0].length
  let res = Array(m)
    .fill(0)
    .map(item => Array(n).fill(-1))

  let queue = []
  // isWater.forEach((item, i) => {
  //   item.forEach((it, j) => {
  //     if (it === 1) {
  //       // 水域
  //       res[i][j] = 0
  //       queue.push([i, j])
  //     }
  //   })
  // })
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isWater[i][j] === 1) {
        res[i][j] = 0
        queue.push([i, j])
      }
    }
  }
  let dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  while (queue.length > 0) {
    let pop = queue.shift()
    dirs.forEach(dir => {
      let x = dir[0] + pop[0]
      let y = dir[1] + pop[1]
      if (x >= 0 && y >= 0 && x < m && y < n && res[x][y] === -1) {
        res[x][y] = res[pop[0]][pop[1]] + 1
        queue.push([x, y])
      }
    })
  }
  return res
}
console.log(
  highestPeak([
    [0, 0, 1],
    [1, 0, 0],
    [0, 0, 0],
  ])
)

// ----------------------------------------------------------------
/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
  const x = isWater[0].length,
    y = isWater.length
  let water = []
  const result = new Array()
  for (let i = 0; i < y; i++) {
    result.push(new Array(x).fill(-1))
  }
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (isWater[i][j] === 1) {
        water.push([j, i])
        result[i][j] = 0
      }
    }
  }
  let flag = x * y - water.length
  const map = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  while (flag) {
    const nextW = []
    for (const w of water) {
      const value = result[w[1]][w[0]]
      for (const m of map) {
        const arr = [w[0] + m[0], w[1] + m[1]]
        if (m[1] === 0) {
          if (arr[0] === -1 || arr[0] === x || result[arr[1]][arr[0]] !== -1) {
            continue
          }
        } else {
          if (arr[1] === -1 || arr[1] === y || result[arr[1]][arr[0]] !== -1) {
            continue
          }
        }
        result[arr[1]][arr[0]] = value + 1
        flag--
        nextW.push(arr)
      }
      // if (w[0] !== 0 && result[w[1]][w[0] - 1] === -1) {
      //   result[w[1]][w[0] - 1] = value + 1;
      //   flag--;
      //   nextW.push([w[0] - 1, w[1]] )
      // }
      // if (w[0] !== (x-1) && result[w[1]][w[0] + 1] === -1) {
      //   result[w[1]][w[0] + 1] = value + 1;
      //   flag--
      //   nextW.push([w[0] + 1, w[1]] )
      // }

      // if (w[1] !== (y-1) && result[w[1] + 1][w[0]] === -1) {
      //   result[w[1] + 1][w[0]] = value + 1;
      //   flag--
      //   nextW.push([w[0],w[1] + 1])
      // }

      // if (w[1] !== 0 && result[w[1] - 1][w[0]] === -1) {
      //   result[w[1] - 1][w[0]] = value + 1;
      //   flag--
      //   nextW.push([w[0],w[1] - 1])
      // }
    }
    water = nextW
  }
  return result
}
