// 睡懒觉摆烂迟到 补做
/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
  let res = [];
  for(let i = 0; i < s.length;i+=k){
    let str = s.substring(i,i+k>s.length ? s.length : i+k);
    res.push(str);
  }
  if(s.length % k !== 0){
    // for(let i = 0; i < k-s.length % k;i++){
    //   res[res.length-1] += fill
    // }
    res[res.length-1] += fill.repeat(k-s.length % k)
  }
  return res;
  
  
};

console.log(divideString("abcdefghij",3,'x'));