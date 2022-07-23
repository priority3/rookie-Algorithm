function zeroFilledSubarray(nums: number[]): number {
  const len = nums.length
  let count = 0
  let res = 0

  const getNum = (num: number): number => {
    if ((num & 1) === 1)
      return count * ~~((count + 1) / 2)

    else
      return ~~(count / 2) * (count + 1)
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      count++
      continue
    }
    if (count > 0 && nums[i] !== 0) {
      res += getNum(count)
      count = 0
    }
  }
  if (count > 0)
    res += getNum(count)
  return res
}
console.log(zeroFilledSubarray([0, 0, 0, 2, 0, 0]))
