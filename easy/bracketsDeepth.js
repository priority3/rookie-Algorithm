/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let res = [];
  let max = 0;
  for(let i = 0; i < s.length; i++){
    if(s.charAt(i) === '('){
      res.push(i);
    }
    if(s.charAt(i) === ')'){
      max = Math.max(max,res.length);
      res.pop();
      
    }
  }
  return max
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"));