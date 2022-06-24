/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {

  // 判断是否是一个最简的一个分数
  /**
   * 
   * @param {*} a 分子
   * @param {*} b 分母
   */
  const isSmpily = (a,b) => {
    if(a ===1){
      return true
    }
    for(let i = 2; i <= a; i++) {
      if(b%i === 0 && a%i ===0){
        return false
      }
    }
    return true
  }
  let res = []
  for(let i = 2; i <= n; i++) {
    for(let j = 1; j < i; j++) {
      if(isSmpily(j,i)){
        res.push(`${j}/${i}`)
      }
    }
  }
  return res
};
console.log(simplifiedFractions(4));
