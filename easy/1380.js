/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  let m = matrix.length
  let res = []
  for (let i = 0; i < m; i++) {
    let min = Math.min(...matrix[i])
    let ind = matrix[i].indexOf(min)
    let max = Number.MIN_VALUE
    for (let j = 0; j < m; j++) {
      max = Math.max(max, matrix[j][ind])
    }
    if (max === min) {
      res.push(min)
      break
    }
  }
  return res
}
