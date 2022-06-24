function imageSmoother(img: number[][]): number[][] {
  const dirs =[ [-1,-1], [-1,0], [-1,1], [0,-1],[0,0], [0,1], [1,-1], [1,0], [1,1] ]
  const res  = Array(img.length).fill(0).map(() => Array(img[0].length).fill(0))
  for (let i = 0; i < img.length; i++) {
    for (let j = 0; j < img[i].length; j++){
      let sum = 0
      let count = 0
      dirs.forEach((item) => {
        let x = item[0] + i
        let y = item[1] + j
        if(x >= 0 && x < img.length && y >= 0 && y < img[i].length){
          sum += img[x][y]
          count++
        }
      })
      console.log(sum, count);
      
      res[i][j] = ~~(sum / count)
    }
  }
  return res
};
console.log(imageSmoother([[100,200,100],[200,50,200],[100,200,100]]));
