// 描述
/**
 * 实现一个adjoin 
 * adjoin([1,2,3,4,5],item => item !== 3) ----> [[1,2],3,[4,5]]
 * adjoin([1,2,3,4],item => item < 3) ----> [[1,2],3,4]
 * 
 */
type resArr = Array<number | Array<number>>

const adjoin = (arr:Array<number>,fn:Function):resArr => {
  //number[] not property -> flatMap   ts-target:es2019
  let res:resArr = []
  arr.forEach(item => {
    if(fn(item)){
      let lastIndex = res.length-1
      // 是否是数组
      Object.prototype.toString.call(res[lastIndex]).slice(8,-1) === 'Array' 
      ? (res[lastIndex] as Array<number>).push(item) : res.push([item])
    }else{
      res.push(item)
    }
  }) 
  return res
}


console.log(adjoin([1,2,3,4,5],(item:number) => item < 3));
