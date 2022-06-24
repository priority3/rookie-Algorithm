/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
  if(original.length !== m*n){
    return [];
  }
  let res = new Array(m).fill(0).map(() => new Array(n).fill(0))
  // const ans = new Array(m).fill(0).map(() => new Array(n).fill(0));
  console.log(res);
  for(let i = 0; i < original.length; i+=n) {
    res[Math.floor(i/n)].splice(0,n,...original.slice(i,i+n));
  }
  return res;
};

console.log(construct2DArray([1,2,3,4],2,2));