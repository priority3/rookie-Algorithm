/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
  let flag = 0;

  if(s.charAt[0] === 'b') return false;
  for (let i = 0; i < s.length; i++) {
    if(s.charAt(i) === 'a' && flag === 0){
      continue;
    }
    if(s.charAt(i) === 'b'){
      flag = 1;
    }
    if(s.charAt(i) === 'a' && flag === 1){
      return false;
    }
    
  }
  return true;
};

console.log(checkString("aaabb"));