class NumArray {
  private curNums: number[];
  private numSum: number[];
  constructor(nums: number[]) {
    const len = nums.length;
    let curNums = new Array(len);
    let numSum = new Array(len+1).fill(0);
    for (let i = 0; i < len; i++) {
      curNums[i] = nums[i];
      if (i > 0) {
        numSum[i] = nums[i-1]+numSum[i-1];
      }
    }
    numSum[len] = numSum[len-1] + nums[len-1];
    this.curNums = curNums;
    this.numSum = numSum;
  }

  update(index: number, val: number): void {
    let diff = val - this.curNums[index];
    for (let i = index+1; i < this.numSum.length;i++){
      this.numSum[i] += diff
    }
    this.curNums[index] = val;
  }

  sumRange(left: number, right: number): number {
    console.log(this.numSum);
    return this.numSum[right+1] - this.numSum[left]
  }
}

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* obj.update(index,val)
* var param_2 = obj.sumRange(left,right)
*/