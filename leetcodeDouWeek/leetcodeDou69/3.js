/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
  let arr = new Array(26).fill(0).map((item) => new Array(26).fill(0));
  let ans = 0;
  for (let p = 0; p < words.length; p++) {
    let i = words[p][0].charCodeAt()-97
    let j = words[p][1].charCodeAt()-97
    if(arr[j][i] > 0){
      ans += 4;
      arr[j][i]--;
    }else{
      arr[i][j]++;
    }  
  }
  for(let i = 0; i < 26; i++) {
    if(arr[i][i] > 0){
      ans += 2;
      break;
    }
  }
  return ans
};



