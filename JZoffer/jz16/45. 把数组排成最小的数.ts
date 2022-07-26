function minNumber(nums: number[]): string {
  const compare = (a: number, b: number) => {
    const as = a.toString()
    const bs = b.toString()
    return as + bs < bs + as ? -1 : 1
  }
  nums.sort(compare)
  return nums.join('')
}
