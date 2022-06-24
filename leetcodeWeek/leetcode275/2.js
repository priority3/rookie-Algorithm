/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
  let count = 0;
  const swap = (arr,i,j)=>{
    let p = arr[i];
    arr[i] = arr[j];
    arr[j] = p;
    count ++;
  };
  const isXil = (arr) => {
    let flag = 0;
    arr.reduce((pre,cur)=>{
      if(cur === 1 && cur !== pre){
        flag = 1;
      }
      return cur;
    },0)
    return flag === 1 ? false : true;
    
    

  }

};