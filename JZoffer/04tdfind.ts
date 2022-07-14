function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  const findNumMidSearch = (matrix: number[], target: number): boolean => {
    let left = 0
    let right = matrix.length - 1
    while (left < right) {
      const mid = ~~((left + right) / 2)
      console.log(mid)
      if (matrix[mid] > target)
        right = mid
      else if (matrix[mid] < target)
        left = mid + 1
      else
        return true
    }
    if (left === right && matrix[left] === target)
      return true
    return false
  }
  const len = matrix.length
  for (let i = 0; i < len; i++) {
    if (findNumMidSearch(matrix[i], target))
      return true
  }
  return false
}
console.log(findNumberIn2DArray([
  [-5],
], -5,
))
