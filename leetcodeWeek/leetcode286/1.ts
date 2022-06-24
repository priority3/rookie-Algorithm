function findDifference(nums1: number[], nums2: number[]): number[][] {
  nums1 = Array.from(new Set(nums1));
  nums2 = Array.from(new Set(nums2));

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0, j = 0;
  let res1: number[] = [], res2:number[] = []
  while (i < nums1.length && j < nums2.length) {
    if(nums1[i] === nums2[j]) {
      i++;
      j++;
      continue
    }
    if(nums1[i] > nums2[j]) {
      res2.push(nums2[j])
      j++
    }else{
      res1.push(nums1[i])
      i++
    }
  }
  while(i < nums1.length ){
    res1.push(nums1[i])
    i++
  }
  while(j < nums2.length){
    res2.push(nums2[j])
    j++
  }
  let res:number[][] = []
  res.push(res1,res2)
  return res
};