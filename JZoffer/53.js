/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let left = 0; let right = nums.length - 1
  while (left < right) {
    const mid = ~~((right + left) / 2)
    if (target > nums[mid])
      left = mid + 1

    else
      right = mid
  }
  let res = 0
  while (left < nums.length && nums[left++] === target)
    res++
  return res
}
