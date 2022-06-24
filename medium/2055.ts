// 超时
// function platesBetweenCandles(s: string, queries: number[][]): number[] {
//   let arr: string[] = s.split('')
//   let res: number[] = []
//   const traversal = (a: number, b: number): number => {
//     let count = 0
//     let left = a,
//       right = b

//     while (arr[left] !== '|') {
//       left++
//     }
//     while (arr[right] !== '|') {
//       right--
//     }

//     for (let i = left; i < right; i++) {
//       if (arr[i] === '*') {
//         count++
//       }
//     }
//     return count
//   }
//   queries.forEach(item => {
//     res.push(traversal(item[0], item[1]))
//   })
//   return res
// }
function platesBetweenCandles(s: string, queries: number[][]): number[] {
  const n: number = s.length
  // 前缀蜡烛数量和
  let preSum: number[] = new Array(n).fill(0)
  for (let i = 0, sum = 0; i < n; i++) {
    if (s[i] === '*') {
      sum++
    }
    preSum[i] = sum
  }

  // 求出最左侧得蜡烛位置
  let left: number[] = new Array(n).fill(0)
  for (let i = 0, l = -1; i < n; i++) {
    if (s[i] === '|') {
      l = i
    }
    left[i] = l
  }

  // 右侧蜡烛位置
  let right: number[] = new Array(n).fill(0)
  for (let i = n - 1, r = -1; i >= 0; i--) {
    if (s[i] === '|') {
      r = i
    }
    right[i] = r
  }

  let res: number[] = new Array(queries.length).fill(0)
  queries.forEach((item, index) => {
    let x = item[0]
    let y = item[1]
    res[index] =
      right[x] === -1 || left[y] === -1 || left[y] <= right[x]
        ? 0
        : preSum[left[y]] - preSum[right[x]]
  })
  return res
}
console.log(
  platesBetweenCandles('***|**|*****|**||**|*', [
    [1, 17],
    [4, 5],
    [14, 17],
    [5, 11],
    [15, 16],
  ])
)
