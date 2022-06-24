/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let res = [];
  /**
   * 
   * @param {*} target 需要维护的target，
   * @param {*} combines 满足要求的一组数组
   * @param {*} ind 当前位置
   */
  const dfs = (target,combines,ind) => {
    if(ind === candidates.length){
      return;
    }
    if(target === 0){
      res.push(combines);
      return;
    }
    dfs(target,combines,ind+1)
    if(target - candidates[ind] >= 0 ){
      dfs(target - candidates[ind],[...combines,candidates[ind]],ind)
    }
  }
  dfs(target,[],0)
  return res;
};

console.log(combinationSum([2,3,6,7],7));