// 均是小写
function minSteps(s: string, t: string): number {
  let sArr: number[] = new Array(26).fill(0)
  let tArr: number[] = new Array(26).fill(0)
  let ss = s.split('')
  let tt = t.split('')

  ss.forEach((item): void => {
    sArr[item.charCodeAt(0) - 97]++
  })
  tt.forEach((item): void => {
    tArr[item.charCodeAt(0) - 97]++
  })
  let sSum = 0,
    tSum = 0
  sArr.forEach((item, index) => {
    if (item !== 0 && tArr[index] === 0) {
      sSum += item
    }
  })
  tArr.forEach((item, index) => {
    if (item !== 0 && sArr[index] === 0) {
      tSum += item
    }
  })
  return tSum + sSum
}

console.log(minSteps('aa', 'aadd'))
