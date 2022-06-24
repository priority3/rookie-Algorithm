/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  if(nums.length < 3) return false;
  let flag = 0;
  let min = Number.MAX_VALUE
  let mid = Number.MAX_VALUE
  nums.forEach(item => {  
    if(item <= min){
      min = item
    }else if(item <= mid){
      mid = item
    }else if(item > mid){
      flag = 1
    }
  })
  return flag === 1 ? true : false;
};

console.log(increasingTriplet( [2,1,5,0,4,6]));