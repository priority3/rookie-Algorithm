/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
  if(nums.length === 1) return 0;
  nums.sort((a, b) => a-b);
  let minIndex = 0;
  let maxIndex = nums.length - 1;
  while(maxIndex >= minIndex) {
    if(nums[minIndex] === nums[0] ) {
      minIndex = minIndex + 1;
      continue;
    }
    if(nums[maxIndex] === nums[nums.length - 1]) {
      maxIndex = maxIndex - 1;
      continue;
    }
    break;
  }
  return maxIndex - minIndex + 1;
};
console.log(countElements([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));