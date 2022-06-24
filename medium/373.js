/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  let res = [];
  if(nums1.length*nums2.length < k){
    k = nums1.length*nums2.length
  }
  // 用一个数组来记录 nums1中得每个元素在nums2当中走了多远
  let steps = new Array(nums1.length).fill(0)
  for(let i = 0 ; i < k ; i++){
    let min = Number.MAX_VALUE
    let stepMinindex = 0
    nums1.forEach((item,index) => {
      if(steps[index] < nums2.length && item+nums2[steps[index]] < min){
        min = item+nums2[steps[index]]
        stepMinindex = index;
      }
    })
    res.push([nums1[stepMinindex],nums2[steps[stepMinindex]]])
    steps[stepMinindex]++
  }
  return res;
};

console.log(kSmallestPairs([1,7,11],[2,4,6],3));