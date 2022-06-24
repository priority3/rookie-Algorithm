/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let maxNum = Math.max(...nums)
    let index = nums.indexOf(maxNum)
    nums.splice(index, 1)
    let secNum = Math.max(...nums)
    if(maxNum >= 2*secNum) {
      return index;
    }else{
      return -1;
    }
};
console.log(dominantIndex([3,6,1,0]));