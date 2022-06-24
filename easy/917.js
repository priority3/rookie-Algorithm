/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const isLetter = char => {
    let flag = false
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      flag = true
    }
    return flag
  }
  let arr = [...s]
  let i = 0
  let j = arr.length - 1
  while (i < j) {
    while (/^[a-zA-Z]$+/.test(arr[i]) && i < j) {
      i++
    }
    while (/^[a-zA-Z]$+/.test(arr[j]) && i < j) {
      j--
    }
    if (i > j) {
      break
    }
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

    i++, j--
  }
  return arr.join('')
}
