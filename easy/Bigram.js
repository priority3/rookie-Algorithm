/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  let arr = text.split(" ");
  let res = [];
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] == first && arr[i+1] == second && i+2 < arr.length){
      res.push(arr[i+2])
    }
  }
  return res;
};