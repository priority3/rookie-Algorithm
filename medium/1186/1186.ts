function maximumSum(arr: number[]): number {
  let [a, res, b] = [arr[0], 0, arr[0]]
  for (let i = 1; i < arr.length; i++) {
    // 以及删除
    b = Math.max(b + arr[i], a)
    // 未删除
    a = Math.max(a + arr[i], arr[i])
    res = Math.max(res, a, b)
  }
  return res
}

