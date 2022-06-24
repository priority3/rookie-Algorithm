function mostFrequent(nums: number[], key: number): number {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key && i < nums.length - 1) {
      map.set(nums[i + 1], (map.get(nums[i + 1]) || 0) + 1)
    }
  }
  return [...map.entries()].reduce((pre, cur) => (cur[1] > pre[1] ? cur : pre))[0]
}
