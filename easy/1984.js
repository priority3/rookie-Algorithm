/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
  nums.sort((a, b) =>a-b)
  let min = Number.MAX_VALUE
  for(let i = 0,r=k-1; r < nums.length; i++) {
    min = Math.min(min,nums[r++]-nums[i])
  }
  return min

};
console.log(minimumDifference([87063,61094,44530,21297,95857,93551,9918],6));