/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let sum = 0
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      arr.push(nums[i])
    }
  }
  arr.forEach(item => {
    sum += item
  })
  return sum
}
