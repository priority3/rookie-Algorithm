/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
  // 记录最小值 最大值下标
  
  for (let index = 1; index < differences.length; index++) {
    differences[index] += differences[index-1]
  }
  let maxNum = Math.max(...differences)
  let minNum = Math.min(...differences)
  
  if(maxNum > 0 && minNum > 0) {
    minNum = 0;
  }
  if( minNum < 0 && maxNum < 0) {
    maxNum = 0;
  }
  let gap = maxNum - minNum;
  return upper-lower >= gap ? upper-lower-gap+1 : 0
};

console.log(numberOfArrays([0],0,0));