/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  const isOu = num => {
    let count = 0
    while (num > 0) {
      count += num % 10
      num = Math.floor(num / 10)
    }
    return count % 2 === 0
  }
  let res = 0
  for (let i = 2; i <= num; i++) {
    if (isOu(i)) {
      res++
    }
  }
  return res
}
