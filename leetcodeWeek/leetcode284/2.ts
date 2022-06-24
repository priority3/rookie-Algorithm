function digArtifacts(n: number, artifacts: number[][], dig: number[][]): number {
  let arr: number[][] = new Array(n).fill(0).map(item => Array(n).fill(0))
  let res: number = 0
  artifacts.forEach(item => {
    if (item[0] === item[2] || item[1] === item[3]) {
      arr[item[0]][item[1]] = 1
      arr[item[2]][item[3]] = 1
    } else {
    }
  })
  console.log(arr)

  dig.forEach(item => {
    if (arr[item[0]][item[1]] === 1) {
      arr[item[0]][item[1]] = 2
    }
  })

  console.log(arr)

  artifacts.forEach(item => {
    if (arr[item[0]][item[1]] === 2 && arr[item[2]][item[3]] === 2) {
      res++
    }
  })

  return res
}
console.log(
  digArtifacts(
    6,
    [
      [0, 2, 0, 5],
      [0, 1, 1, 1],
      [3, 0, 3, 3],
      [4, 4, 4, 4],
      [2, 1, 2, 4],
    ],
    [
      [0, 2],
      [0, 3],
      [0, 4],
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 5],
      [3, 0],
      [3, 1],
      [3, 3],
      [3, 4],
      [4, 0],
      [4, 3],
      [4, 5],
      [5, 0],
      [5, 1],
      [5, 2],
      [5, 4],
      [5, 5],
    ]
  )
)
