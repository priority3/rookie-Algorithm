/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
  let arr = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt() - 97]++
  }
  let str = ''
  let index = 0
  let pre = -1
  for (let ind = 25; ind >= 0; ind--) {
    if (arr[ind] === 0) {
      continue
    }
    index = ind
    if (arr[pre] > 0) {
      str += String.fromCharCode(97 + ind)
      arr[ind]--
      index = pre
      ind++
    }
    let i = 0
    for (; i < repeatLimit; i++) {
      if (arr[index] > 0) {
        str += String.fromCharCode(97 + index)
        arr[index]--
      } else {
        break
      }
    }
    // 记录下上一个节点的值
    if (i === repeatLimit) {
      pre = index
    }
  }
  return str
}
