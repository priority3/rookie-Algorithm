function halveArray(nums: number[]): number {
  let sum: number = nums.reduce((pre, cur) => {
    return pre + cur
  })
  nums.sort()
  let half: number = sum / 2
  let curSum: number = sum
  let res: number = 0
  while (curSum > half) {
    let max = Math.max(...nums)
    nums[nums.indexOf(max)] = max / 2
    res++
    curSum -= max / 2
  }
  return res
}
