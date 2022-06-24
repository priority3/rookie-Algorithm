/**
 * @param {number} n 
 * @return {number[]}
 */
var grayCode = function(n) {
  let res = [];
  const binaryToGray = (x) => {
    return x^(x>>1)
  }
  for(let i = 0 ; i < 1<<n ; i++){
    res.push(binaryToGray(i))
  }
  
  return res;
};
console.log(grayCode(2));
// ----------------------------------------------------------------
// 将格雷码 转换为 二进制
/**
 * 
 * @param {*} arr 上式的格雷码数组 
 */
let grayToBinary = (arr) => {
  let res = [];
  const gratToBin = (x) => {
    let y = x;
    while(x>>=1){
      y^=x;
    }
    return y;
  }
  for(let i = 0 ; i < arr.length ; i++){
    res.push(gratToBin(arr[i]));
  }
  return res;
}
console.log(grayToBinary(grayCode(2)));


