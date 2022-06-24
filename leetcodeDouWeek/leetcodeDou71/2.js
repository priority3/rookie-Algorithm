/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  let lessarr = []
  let greaterarr = []
  let medarr = []
  nums.forEach(item => {
    if (item < pivot) {
      lessarr.push(item)
    } else if (item > pivot) {
      greaterarr.push(item)
    } else {
      medarr.push(item)
    }
  })

  return [...lessarr, ...medarr, ...greaterarr]
}
console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10))
