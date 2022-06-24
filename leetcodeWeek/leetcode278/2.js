/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxScoreIndices = function (nums) {
  let max = Number.MIN_VALUE
  let res = []
  let count = 0
  for (let i = 0; i <= nums.length; i++) {
    let leftArr = nums.slice(0, i)
    let rightArr = nums.slice(i, nums.length)
    let left = leftArr.length - eval(leftArr.join('+')) || 0
    let right = eval(rightArr.join('+')) || 0
    count = left + right

    if (max === count) {
      res.push(i)
    } else if (count > max) {
      res = []
      res.push(i)
      max = count
    }
  }

  return res
}
console.log(maxScoreIndices([0, 0, 1, 0]))
