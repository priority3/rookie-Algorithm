function digitCount(num: string): boolean {
  const len = num.length
  let nnum = num.split("")
  let flag = true
  for(let i = 0 ; i < len ; i++){
    let count = 0
    for(let j = 0 ; j < len ; j++){
      if(Number(nnum[j]) === i){
        count ++
      }
    }
    if(Number(nnum[i]) !== count){
      flag = false
    }
  }
  return flag
};
