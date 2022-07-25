function isStraight(nums: number[]): boolean {
  nums.sort((a, b) => a - b)
  let count = 0
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0)
      count++
    else
      break
  }
  for (let i = count + 1; i < len; i++) {
    const diff = nums[i] - nums[i - 1]
    if (diff === 0)
      return false
    if (diff > 1)
      count -= (diff - 1)
    if (count < 0)
      return false
  }
  return true
}
console.log(isStraight([10, 11, 0, 12, 6]))
