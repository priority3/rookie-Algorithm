function buildArray(nums: number[]): number[] {
  let len: number = nums.length
  let res: number[] = Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    res[i] = nums[nums[i]]
  }
  return res
}
