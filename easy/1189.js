/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  let arr = ['b','a','l','l','o','o','n']
  let tet = text.split('')
  let count = 0
  for (let i = 0; i < arr.length; i=((i+1)%arr.length)) {
    if(tet.indexOf(arr[i]) !== -1) {
      tet.splice(tet.indexOf(arr[i]),1)
      if(i === arr.length - 1) {
        count++
      }
    }else{
      break
    }
  }
  return count
};
console.log(maxNumberOfBalloons("baoollnnololgbax"));