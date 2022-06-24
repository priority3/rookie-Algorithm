function numberOfLines(widths: number[], s: string): number[] {
  let res : number[] = [];
  let sum : number = 0
  let count : number = 0
  s.split("").forEach(c => {
    let w = widths[c.charCodeAt(0) - 97];
    sum += w
    if(sum > 100){
      count ++ 
      sum = w
    }
  })
  
  res.push(count+1,sum)
  return res
};

console.log(numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],"bbbcccdddaaa"))
