function minDeletion(nums: number[]): number {
  const len:number = nums.length;
  if(len < 2){
    return len  
  }
  let count = 0
  let res = 0
  
  nums.reduce((pre:number, cur:number,index:number):number => {
    if(pre === cur && (index-1+res) % 2 === 0){
      console.log(cur);
      
      count ++
    }else{
      if(count > 0){
        (count+1) % 2 === 0 ? res += ~~((count+1)/2) : res += ~~((count+1)/2)+1 
        count = 0
      }
    }
    return cur
  })
  
  return( len-res) % 2 === 0 ? res : res + 1
};
console.log(minDeletion([0,1,5,4,2,4,7,2,3,0,3,0,0,9,7,5,9,4,3,9,9,2,1,6,3,1,0,7,6,6,6,0,1,7,1,9,4,9,3,3,4,5,0,3,8,7,1,8,4,5]));
