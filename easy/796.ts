function rotateString(s: string, goal: string): boolean {
  let len:number = s.length
  if(s === goal){
    return true
  }
  let i:number = 0
  while(i < len){
    let temp:string = s.slice(i, len) + s.slice(0, i)
    if(temp === goal){
      return true
    }
    i++
  }
  return false
};