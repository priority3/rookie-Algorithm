function circularArrayLoop(nums: number[]): boolean {
  let len: number = nums.length
  const next = (nums: number[], cur: number): number => {
    const n = nums.length
    return (((cur + nums[cur]) % n) + n) % n // 保证返回值在 [0,n) 中
  }
  const check = (ind: number, nums: number[]): boolean => {
    let start = ind
    let k = 1
    const flag = nums[ind] > 0
    while (true) {
      if (k > len) {
        return false
      }
      start = next(nums, start)
      if ((flag && nums[start] < 0) || (!flag && nums[start] > 0)) {
        return false
      }
      if (start === ind) {
        return k > 1
      }
      k++
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (check(i, nums)) {
      return true
    }
  }
  return false
}
console.log(circularArrayLoop([-1, 2]))
