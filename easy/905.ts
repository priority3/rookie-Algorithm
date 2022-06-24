function sortArrayByParity(nums: number[]): number[] {
  const comparator = (a: number, b: number): number => {
    if (a % 2 === 0 && b % 2 === 0) {
      return 0
    } else if (a % 2 === 0 && b % 2 !== 0) {
      return -1
    } else {
      return 1
    }
  }
  return nums.sort(comparator)
}
console.log(sortArrayByParity([3, 1, 2, 4]))
