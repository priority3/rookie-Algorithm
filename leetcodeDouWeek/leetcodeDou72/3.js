/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function (finalSum) {
  if (finalSum % 2 !== 0) {
    return []
  }
  if (finalSum <= 4) {
    return [finalSum]
  }
  let res = []
  let count = 0
  for (let i = 2; count < finalSum; i += 2) {
    if (count + i > finalSum) {
      let temp = res.pop()
      res.push(finalSum - count + temp)
      break
    }
    count += i
    res.push(i)
  }
  return res
}
console.log(maximumEvenSplit(28))
