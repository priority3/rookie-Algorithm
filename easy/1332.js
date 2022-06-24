/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
  let len = s.length;
  for (let i = 0; i < len; i++) {
    if(s[i] !== s[len-1-i]) {
      return 2;
    }
  }
  return 1;
};