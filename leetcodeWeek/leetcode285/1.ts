function countHillValley(nums: number[]): number {
  let count: number = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue
    }
    let left: number = i - 1
    while (nums[left] === nums[i] && left >= 0) {
      left--
    }
    let right: number = i + 1
    while (nums[right] === nums[i] && right < nums.length) {
      right++
    }

    if (left >= 0 && right < nums.length) {
      if (
        (nums[left] < nums[i] && nums[right] < nums[i]) ||
        (nums[left] > nums[i] && nums[right] > nums[i])
      ) {
        count++
      }
    }
  }
  return count
}
console.log(countHillValley([2, 4, 1, 1, 6, 5]))
