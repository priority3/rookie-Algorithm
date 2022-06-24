// function maximumSubsequenceCount(text: string, pattern: string): number {
//   let max: number = 0
//   const findChil = (str: string): number => {
//     let count: number = 0
//     console.log(str)

//     for (let i = 0; i < str.length; i++) {
//       if (str.charAt(i) === pattern.charAt(0)) {
//         for (let j = i + 1; j < str.length; j++) {
//           if (str.charAt(j) === pattern.charAt(1)) {
//             count++
//           }
//         }
//       }
//     }
//     return count
//   }
//   for (let i = 0; i <= text.length; i++) {
//     let textArr: string[] = text.split('')
//     textArr.splice(i, 0, pattern[0])
//     max = Math.max(max, findChil(textArr.join('')))
//   }
//   for (let i = 0; i <= text.length; i++) {
//     let textArr: string[] = text.split('')

//     textArr.splice(i, 0, pattern[1])
//     max = Math.max(max, findChil(textArr.join('')))
//   }
//   return max
// }
//
function maximumSubsequenceCount(text: string, pattern: string): number {
  let res: number = 0
  // 第一个数和
  let a: number = 0
  // 第二个数和
  let b: number = 0
  for (let i = 0; i < text.length; i++) {
    const char: string = text.charAt(i)
    if (char === pattern[0]) {
      a++
    }
    if (char === pattern[1]) {
      b++
      res += a
    }
  }

  if (pattern[0] === pattern[1]) {
    return (a * (a + 1)) / 2
  }
  if (a >= b) {
    res += a
  } else {
    res += b
  }
  return res
}
console.log(maximumSubsequenceCount('fwymvreuftzgrcrxczjacqovduqaiig', 'yy'))
