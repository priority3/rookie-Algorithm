/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums: number[]): number {
  let left = 0; let right = nums.length - 1
  while (left < right) {
    const mid = ~~((left + right) / 2)
    if (nums[mid] === mid)
      left = mid + 1
    else
      right = mid
  }
  return left
}

