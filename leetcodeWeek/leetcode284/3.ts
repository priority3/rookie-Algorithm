function maximumTop(nums: number[], k: number): number {
  if (nums.length === 1 && k >= 1) {
    return -1
  }
  nums.splice(k + 1)

  return Math.max(...nums)
}
