function removeDigit(number: string, digit: string): string {
  const arr = number.split('')
  let res = ''
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === digit) {
      let temp = arr.slice(0, i).join('') + arr.slice(i + 1, arr.length).join('')

      res = temp > res ? temp : res
    }
  }
  return res
}
console.log(removeDigit('133235', '3'))
