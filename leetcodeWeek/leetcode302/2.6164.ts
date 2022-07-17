function maximumSum(nums: number[]): number {
  let res = -1
  const map = new Map<number, number[]>()
  function getNum(num: number) {
    let res = 0
    while (num > 0) {
      res += num % 10
      num = ~~(num / 10)
    }

    return res
  }
  nums.forEach((item) => {
    const num = getNum(item)
    if (map.has(num))
      (map.get(num) as number[]).push(item)
    else
      map.set(num, [item])
  })
  for (const num of map) {
    const len = num[1].length
    if (len >= 2) {
      num[1].sort((a, b) => a - b)
      res = Math.max(res, num[1][len - 1] + num[1][len - 2])
    }
  }

  return res
}
console.log(maximumSum([18, 43, 36, 13, 7]))

