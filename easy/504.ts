function convertToBase7(num: number): string {
  // return num.toString(7)
  let str: string = ''
  while (num > 0) {
    str += num % 7
    num = ~~(num / 7)
  }
  return [...str].reverse().join('')
}
console.log(convertToBase7(7))
