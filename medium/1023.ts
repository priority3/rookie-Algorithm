function camelMatch(queries: string[], pattern: string): boolean[] {
  let res:boolean[] = Array(queries.length).fill(0)
  const isPatternCheck = (str:string,pattern:string):boolean => {
    const queriesLen = str.length
    const patternLen = pattern.length
    let flag = true
    let i = 0, j = 0
    while(i < queriesLen){
      const pat =  pattern[j]
      const st = str[i]
      // 相等右移
      if(st === pat && j < patternLen){
        j++
      }
      // 不等且str[i]为大写
      if(st !== pat && (st >'A' && st < 'Z')){
        flag = false
        break
      }
      i++
    }
    if(j < patternLen){
      flag = false
    }
    return flag
  }
  queries.forEach((item,index) => {
    res[index] = isPatternCheck(item,pattern)
  })
  return res

};
console.log(camelMatch(["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"],"FoBaT"));
/**
 * 改之前的代码，发现改之后执行用时还减少了，因该是少了几个判断
 */
// function camelMatch(queries: string[], pattern: string): boolean[] {
//   let res:boolean[] = Array(queries.length).fill(0)
//   const isPatternCheck = (str:string,pattern:string):boolean => {
//     const queriesLen = str.length
//     const patternLen = pattern.length
//     let flag = true
//     let i = 0, j = 0
//     while(i < queriesLen){
//       // 相等右移
//       if(str[i] === pattern[j] && j < patternLen){
//         i++
//         j++
//       }else if(str[i] === pattern[j]){
//         i++
//       }
//       // 不等且str[i]为大写
//       if(str[i] !== pattern[j] && (str[i] >'A' && str[i] < 'Z')){
//         flag = false
//         break
//       }
//       if(str[i] !== pattern[j]){
//         i++
//       }
//     }
//     if(j < patternLen){
//       flag = false
//     }
//     return flag
//   }
//   queries.forEach((item,index) => {
//     res[index] = isPatternCheck(item,pattern)
//   })
//   return res

// };
