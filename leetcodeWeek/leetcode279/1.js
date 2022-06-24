/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 奇数降序 偶数升序
var sortEvenOdd = function (nums) {
  for (let i = 1; i < nums.length; i += 2) {
    for (let j = 3; j < nums.length; j += 2) {
      if (nums[j] > nums[j - 2]) {
        let temp = nums[j]
        nums[j] = nums[j - 2]
        nums[j - 2] = temp
      }
    }
  }
  for (let i = 0; i < nums.length; i += 2) {
    for (let j = 2; j < nums.length; j += 2) {
      if (nums[j] < nums[j - 2]) {
        let temp = nums[j]
        nums[j] = nums[j - 2]
        nums[j - 2] = temp
      }
    }
  }
  return nums
}
console.log(
  sortEvenOdd([
    32, 45, 9, 46, 15, 41, 15, 31, 27, 34, 33, 31, 36, 26, 36, 16, 44, 6,
  ])
)
