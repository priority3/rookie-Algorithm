function findSubstringInWraproundString(p: string): number {
  // 记录连续的字符
  let arrCount:number[] = Array(26).fill(0)
  let count = 1
  for(let i = 0 ; i < p.length ; i++){
    if(i > 0 && (p[i].charCodeAt(0) - p[i-1].charCodeAt(0)+26) % 26 === 1){
      count ++
    }else{
      count = 1
    }
    // console.log(count);
    
    arrCount[p[i].charCodeAt(0)-97] = Math.max(arrCount[p[i].charCodeAt(0)-97] ,count)
  }
  return arrCount.reduce((pre,cur) => pre+cur) 
};


console.log(findSubstringInWraproundString('zab'));
