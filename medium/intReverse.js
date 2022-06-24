/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let flag = x>=0 ? 1 : 0;
  let zeroFlag = true;
  x = Math.abs(x);
  let a = x;
  let res = 0;
  while(a > 0){
    // if(zeroFlag && a%10 === 0){
    //   a = Math.floor(a/10);
    //   zeroFlag = true;
    //   continue;
    // }else{
    //   zeroFlag = false;
    // }
    res = res*10 + a%10;
    a = Math.floor(a/10);
  }
  if(res >= Math.pow(2,31)){
    return 0;
  }
  res = flag ? res : 0-res;
  return res;
};
console.log(reverse(120));