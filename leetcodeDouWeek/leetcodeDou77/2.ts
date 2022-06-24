function minimumAverageDifference(nums: number[]): number {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    nums[i] += i ? nums[i - 1] : 0
  }
  let res = Number.MAX_VALUE
  let sum = Number.MAX_VALUE
  nums.forEach((item, index) => {
    const temp = Math.abs(~~(item / (index + 1)) - ~~((nums[n - 1] - item) / (n - index - 1)))
    if (temp < sum) {
      sum = temp
      res = index
    }
  })
  return res  
}
console.log(minimumAverageDifference([0]))
