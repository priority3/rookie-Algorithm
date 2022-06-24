function divideArray(nums: number[]): boolean {
  nums.sort((a, b) => a - b)
  for (let i: number = 0; i < nums.length - 1; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return false
    }
  }
  return true
}
