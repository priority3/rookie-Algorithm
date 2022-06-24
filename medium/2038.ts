function winnerOfGame(colors: string): boolean {
  const len:number = colors.length
  let Alice:number = 0
  let Bob:number = 0
  for (let i = 0; i < len; i++) {
    if(colors[i+1] === 'A' && colors[i] === 'A' && colors[i-1] === 'A'){
      Alice ++
    }
    if(colors[i+1] === 'B' && colors[i] === 'B' && colors[i-1] === 'B'){
      Bob++
    }
  }
  return Alice > Bob
};