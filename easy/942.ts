function diStringMatch(s: string): number[] {
  let len = s.length
  let start = 0
  let res:number[] = Array(len+1)
  s.split('').forEach((item,index) => {
    res[index] = item === 'I' ? start++ : len--
  })
  res[s.length]  = len
  return res
};


