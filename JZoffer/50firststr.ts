// function firstUniqChar(s: string): string {
//   const arr = Array(26).fill(0).map(_ => Array(2).fill(0))
//   let res = ''
//   s.split('').forEach((item, index) => {
//     arr[item.charCodeAt(0) - 97][1]++
//     arr[item.charCodeAt(0) - 97][0] = index
//   })
//   const finmin = (arr: number[][]): number => {
//     let res = 0
//     arr.forEach((item) => {
//       res = Math.min(item[0], res)
//     })
//     return res
//   }
//   for (let i = 0; i < 26; i++) {
//     if (arr[i][1] === 1)
//       res = String.fromCharCode(i + 97)
//   }
//   return res
// }

// console.log(firstUniqChar('leetcode'))

// // console.log('a'.charCodeAt(0))
