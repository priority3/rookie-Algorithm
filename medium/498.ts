
function findDiagonalOrder(mat: number[][]): number[] {
  const m = mat.length
  const n = mat[0].length
  const res = Array(m).fill(0)
  let count = 0
  // 一共m+n-1条线 x+y 递增
  for(let i = 0 ; i < m+n-1 ; i++){
    
    if(i % 2 === 0){
      // 偶数 左下到右上
      let x = Math.min(m-1,i)
      let y = i - x
      while(y < n && x >= 0){
        res[count++] = mat[x][y]
        x--
        y++
      }
    }else{
      // 奇数 右上到左下
      let y = Math.min(n-1,i)
      let x = i - y
      while(x < m && y >= 0){
        res[count++] = mat[x][y]
        x++
        y--
      }
    }
  }
  return res
};
console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]));

