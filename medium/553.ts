// 除法最大值
function optimalDivision(nums: number[]): string {
  let str: string = nums.join('/')
  if (nums.length > 2) {
    str += ')'
    str = str.replace('/', '/(')
  }
  return str
}
