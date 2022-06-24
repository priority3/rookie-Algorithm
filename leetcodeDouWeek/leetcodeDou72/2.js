/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function (num) {
  if (num % 3 !== 0) {
    return []
  }
  let n = num / 3
  return [n - 1, n, n + 1]
}
