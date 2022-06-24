/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  num += ''
  let str1 = 0
  let str2 = 0
  let arr = []
  let count = 0
  for (let i = 0; i < num.length; i++) {
    arr.push(Number.parseInt(num[i]))
  }
  while (arr.length > 0) {
    let min = Math.min(...arr)
    if (count % 2 === 0) {
      str1 = str1 * 10 + min
    } else {
      str2 = str2 * 10 + min
    }
    count++
    arr.splice(arr.indexOf(min), 1)
  }
  return Number.parseInt(str1) + Number.parseInt(str2)
}
console.log(minimumSum(2932))
