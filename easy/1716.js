/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
  let count = 0;
  let res = 0;
  for (let i = 0; i < n; i++) {
    if(i % 7 === 0){
      count++;
    }
    res += (i%7 + count);
  }
  return res;
};

console.log(totalMoney(20));