/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  let zarr = [];
  let farr = [];
  nums.forEach((item) => {
    if(item > 0){
      zarr.push(item);
    }else{
      farr.push(item);
    }
  })
  let newArr = [];
  let zindex = 0;
  let findex = 0;
  let flag = true;
  while(zindex < zarr.length || findex < farr.length){
    if(flag){
      newArr.push(zarr[zindex]);
      zindex++;
      flag = false;
    }else{
      newArr.push(farr[findex]);
      findex++;
      flag = true;
    }    
  }
  return newArr;
};

console.log(rearrangeArray([3,1,-2,-5,2,-4]));