/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let flag = false;
  for (let i = 0; i < nums.length; i++){
    for (let j = i+1; j < nums.length; j++){
      if(nums[i] === nums[j] && Math.abs(i-j) <= k){
        flag = true;
        break;
      }
    }
    if(flag){
      break;
    }
  }
  return flag;
};

