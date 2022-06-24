/**
 * @param {number} startAt
 * @param {number} moveCost
 * @param {number} pushCost
 * @param {number} targetSeconds
 * @return {number}
 */
var minCostSetTime = function (startAt, moveCost, pushCost, targetSeconds) {
  let min = Number.MAX_VALUE
  const getNum = (ishi, ige, jshi, jge) => {
    let res = 0
    let str = '' + ishi + ige + jshi + jge

    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === '0' && res === 0) {
        continue
      } else {
        if (startAt === str[i]) {
          while (str[i] === str[i + 1] && i < str.length) {
            res += pushCost
            i++
          }
        } else {
          res = (4 - i) * pushCost + (4 - i) * moveCost
        }
        break
      }
    }
    min = Math.min(min, res)
  }

  for (let i = 0; i <= 99; i++) {
    for (let j = 0; j <= 99; j++) {
      if (i * 60 + j === targetSeconds) {
        getNum(Math.floor(i / 10), i % 10, Math.floor(j / 10), j % 10)
      }
    }
  }

  return min
}
console.log(minCostSetTime(1, 2, 1, 600))
