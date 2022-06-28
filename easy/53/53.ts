function maxSubArray(nums: number[]): number {
  let max = -Number.MAX_VALUE
  let pre = 0
  nums.forEach((_) => {
    pre = Math.max(pre + _, _)
    max = Math.max(max, pre)
  })
  return max
}

