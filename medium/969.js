/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  const reverseArr = (arr, end) => {
    for (let i = 0, j = end; i < j; i++, j--) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }

  let res = []
  for (let i = arr.length; i > 1; i--) {
    let max = Math.max(...arr.slice(0, i))
    let ind = arr.indexOf(max)
    if (ind === i - 1) {
      continue
    }
    // 将最大值调整到数组第一位
    reverseArr(arr, ind)
    // 将最大值再翻转一次 即调整到当前数组长度的最后一位
    reverseArr(arr, i - 1)
    res.push(ind + 1)
    res.push(i)
  }
  return res
}
console.log(pancakeSort([3, 2, 4, 1]))
