/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  let str = []
  let arr = [
    [a, 'a'],
    [b, 'b'],
    [c, 'c'],
  ]
  while (true) {
    let hashNext = false
    // 每次选择最大的一个
    arr.sort((a, b) => b[0] - a[0])
    for (const [i, [c, ch]] of arr.entries()) {
      if (c === 0) {
        break
      }
      let len = str.length
      if (len >= 2 && str[len - 2] === ch && str[len - 1] === ch) {
        continue
      }
      str.push(ch)
      arr[i][0]--
      hashNext = true
      break
    }
    if (!hashNext) {
      break
    }
  }
  return str.join('')
}
