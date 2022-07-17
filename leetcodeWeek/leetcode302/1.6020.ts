function numberOfPairs(nums: number[]): number[] {
  const arr = Array(101).fill(0)
  for (const num of nums)
    arr[num]++
  let count = 0
  let count2 = 0
  console.log(arr)

  arr.forEach((item) => {
    if (item && (item > 1)) {
      const res = ~~(item / 2)
      count += res
      count2 += (item - res * 2)
    }
    if (item === 1)
      count2++
  })

  return [count, count2]
}
