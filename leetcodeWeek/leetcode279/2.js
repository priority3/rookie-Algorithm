/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function (num) {
  let arr = []
  let tnum = Math.abs(num)
  while (tnum > 0) {
    arr.push(Math.floor(tnum % 10))
    tnum = Math.floor(tnum / 10)
  }
  let str = ''
  let count = 0
  // 最小
  while (arr.length > 0) {
    let cur = num > 0 ? Math.min(...arr) : Math.max(...arr)
    if (cur === 0 && str === '') {
      count++
    } else {
      // 零加在第二位

      str += cur
      if (num > 0) {
        while (count > 0) {
          str += 0
          count--
        }
      }
    }

    arr.splice(arr.indexOf(cur), 1)
  }
  if (num < 0) {
    while (count > 0) {
      str += 0
      count--
    }
  }
  let res = 0
  if (num > 0) {
    res = Number.parseInt(str)
  } else if (num < 0) {
    res = -Number.parseInt(str)
  }
  return res
}
