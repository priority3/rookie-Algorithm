function smallestTrimmedNumbers(nums: string[], queries: number[][]): number[] {
  const res: number[] = []
  function getMinInd(target: number, strs: number[]): number {
    if (!strs.length)
      return NaN
    const num: number[][] = []
    strs.forEach((str, ind) => {
      num.push([str, ind])
    })
    num.sort((a, b) => a[0] - b[0])
    return num[target - 1][1]
  }
  queries.forEach((item) => {
    const temp: number[] = []
    nums.forEach((num) => {
      temp.push(Number(num.slice(num.length - item[1])))
    })
    res.push(getMinInd(item[0], temp))
  })
  return res
}
console.log(smallestTrimmedNumbers(['24', '37', '96', '04'], []))
