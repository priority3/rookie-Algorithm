function validUtf8(data: number[]): boolean {
  let arr: string[] = []
  data.forEach(item => {
    let binstr = item.toString(2)
    let len = binstr.length

    if (len < 8) {
      for (let i = 0; i < 8 - len; i++) {
        binstr = '0' + binstr
      }
    }
    arr.push(binstr)
  })
  let n = data.length
  let count = 0
  console.log(arr)

  for (let i = 0; i < n; i++) {
    if (count === 0) {
      for (let j = 1; j < 8; j++) {
        if (arr[i][j] === '1') {
          count++
          if (count > 3) {
            return false
          }
        } else {
          break
        }
      }
    } else {
      if (arr[i][0] === '1' && arr[i][1] === '0') {
        count--
      } else {
        return false
      }
    }
  }

  return count === 0 ? true : false
}

console.log(validUtf8([197, 130, 1]))
