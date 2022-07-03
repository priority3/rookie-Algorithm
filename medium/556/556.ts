// function nextGreaterElement(n: number): number {
//   const arr = Array(10).fill(0)
//   const num = n
//   while (n > 0) {
//     arr[n % 10]++
//     n = Math.floor(n / 10)
//   }
//   let str = ''
//   for (let i = 9; i >= 0; i--) {
//     while (arr[i])
//       arr[i]-- && (str += i.toString())
//   }
//   return Number(str) === num ? -1 : Number(str)
// }

function nextGreaterElement(n: number): number {
  const swap = (nums: number[], a: number, b: number) => {
    const temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
  }
  const arr: number[] = []
  while (n > 0) {
    arr.push(n % 10)
    n = Math.floor(n / 10)
  }
  const len = arr.length
  let idx = -1
  for (let i = 0; i < len && idx === -1; i++) {
    if (arr[i] > arr[i + 1])
      idx = i + 1
  }
  if (idx === -1)
    return -1
  for (let i = 0; i < idx; i++) {
    if (arr[i] > arr[idx]) {
      swap(arr, i, idx)
      break
    }
  }
}
