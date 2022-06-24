/**
 * @param {number} n
 * @return {number}
 */
var lastRemainingNO = function(n) {
  let i = 1;
  let j = n;
  let count = 0; // 2的次方
  if( n % 2 !== 0 ){
    j = n-1;
  }
  i = 2;
  if(j === n){
    // 上一次偶数 现在奇数个
    i = 4;
  }
  j-= 2;
  count = 2;
  while ( i !== j) {
    [i,j,count] = leftClear(i,j,count);
    if(i === j){
      break;
    }
    [i,j,count] = rightClear(i,j,count);
  }
  return i;
};
const leftClear = (a,b,count) => {
    return [a+Math.pow(2,count),b,count+1];
}

const rightClear = (a,b,count) => {
    return [a,b-Math.pow(2,count),count+1];
}





// ----------------------------------------------------------------
var lastRemaining = function(n) {
  let i = 1;
  let j = n;
  let k = 0;
  let count = n;
  let gap = 1;
  while(count > 1){
    if(k % 2 === 0){
      // 往左zou
      i += gap;
      j = count%2 === 0 ? j : j-gap;
    }else{
      // 右扫
      j -= gap;
      i = count%2 === 0 ? i : i+gap
    }
    k++;
    count = count>>1;
    gap = gap<<1;
  }
  return i;
}

console.log(lastRemaining(9));