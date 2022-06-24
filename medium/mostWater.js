/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 存放水的区域面积 init 为0
  let maxWater = 0; 
  for(let i = 0 ; i < height.length ; i++) {
    for(let j = 1 ; j < height.length ; j++) {
      let minData = Math.min(height[i], height[j]);
      maxWater = Math.max(maxWater, minData*minData);
    }
  }
  return maxWater;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));