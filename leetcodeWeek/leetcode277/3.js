/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
  let res = []
  nums.sort((a,b) => a-b)
  for (let i = 1; i < nums.length-1; i++){
    if(nums[i]!==nums[i-1]&&nums[i]!==nums[i+1]&&nums[i-1]!==nums[i]-1&&nums[i+1]!==nums[i]+1){
      res.push(nums[i])
    }
  }
  return res;
};