/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  let flag = true
  for (let i = 0; i < bits.length; i++) {
    if (bits[i] === 0) {
      continue
    }
    if (bits[i] === 1) {
      if (i === bits.length - 2) {
        flag = false
      } else {
        i++
      }
    }
  }
  return flag
}
