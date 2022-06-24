/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  // 思路: 哈希计数,排序,贪心
  // 如果奇数最多的和偶数最多的值不一样，直接总长度减去他俩的数量
  // 如果计数最多和偶数最多的值一样，就减去奇1偶2和奇2偶1的最大值
  // 特殊处理一下如果数据都一样，奇偶第二多的数据没有就赋值为计数0,方便后面取
  if (nums.length < 2) return 0
  const mapOdd = new Map() // 奇数下标统计
  const mapEven = new Map() // 偶数下标统计
  for (let i = 0; i < nums.length; i++) {
    if (i & 1) {
      mapOdd.set(nums[i], (mapOdd.get(nums[i]) || 0) + 1)
    } else {
      mapEven.set(nums[i], (mapEven.get(nums[i]) || 0) + 1)
    }
  }
  const oddArr = [...mapOdd.entries()]
  console.log(oddArr)
  const evenArr = [...mapEven.entries()]
  oddArr.sort((a, b) => b[1] - a[1])
  evenArr.sort((a, b) => b[1] - a[1])
  // 特殊处理一下数字一样的情况,val存0即可
  if (!oddArr[1]) {
    oddArr[1] = [1, 0]
  }
  if (!evenArr[1]) {
    evenArr[1] = [1, 0]
  }
  const oddFirst = oddArr[0][0],
    oddSecond = oddArr[1][0]
  const evenFirst = evenArr[0][0],
    evenSecond = evenArr[1][0]
  let ans = 0
  // 奇数和偶数最大的不一样直接求解
  if (oddFirst !== evenFirst) {
    ans = nums.length - oddArr[0][1] - evenArr[0][1]
  } else {
    // 一样的话 拿奇1偶2和奇2偶1的最大值减去
    ans = nums.length - Math.max(oddArr[0][1] + evenArr[1][1], oddArr[1][1] + evenArr[0][1])
  }
  return ans
}
