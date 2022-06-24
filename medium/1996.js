/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  if (properties.length === 0) {
    return 0
  }
  properties.sort((a, b) => (b[0] === a[0] ? a[1] - b[1] : b[0] - a[0]))
  let count = 0
  let max = -1
  for (let i = 0; i < properties.length; i++) {
    if (properties[i][1] < max) {
      count++
    }
    max = Math.max(max, properties[i][1])
  }
  return count
}
console.log(
  numberOfWeakCharacters([
    [7, 7],
    [1, 2],
    [9, 7],
    [7, 3],
    [3, 10],
    [9, 8],
    [8, 10],
    [4, 3],
    [1, 5],
    [1, 5],
  ])
)
