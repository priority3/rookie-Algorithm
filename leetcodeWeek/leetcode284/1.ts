function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  let res: number[] = []
  let indArr: number[] = []
  nums.forEach((item, index) => {
    if (item === key) {
      indArr.push(index)
    }
  })

  indArr.forEach(item => {
    let min: number = item + k >= nums.length ? nums.length - 1 : item + k
    let max: number = item - k < 0 ? 0 : item - k

    for (let i = max; i <= min; i++) {
      res.push(i)
    }
  })

  res = [...new Set(res)]

  return res
}
console.log(findKDistantIndices([1], 1, 1))
