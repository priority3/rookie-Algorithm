function sortJumbled(mapping: number[], nums: number[]): number[] {
  let sortArr: number[] = Array(nums.length)
  const swap = (arr: number[], a: number, b: number): void => {
    let temp: number = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
  for (let i = 0; i < nums.length; i++) {
    let cur: string = nums[i] + ''
    for (let j = 0; j < cur.length; j++) {
      let ind = Number.parseInt(cur[j])
      cur = cur.replace(cur[j], mapping[ind] + '')
    }
    sortArr[i] = Number.parseInt(cur)
  }
  // 排序
  for (let i = 0; i < sortArr.length; i++) {
    for (let j = i + 1; j < sortArr.length; j++) {
      if (sortArr[j] < sortArr[j - 1]) {
        swap(sortArr, sortArr[j], sortArr[j - 1])

        swap(nums, nums[j], nums[j - 1])
      }
    }
  }
  return nums
}

console.log(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38]))
