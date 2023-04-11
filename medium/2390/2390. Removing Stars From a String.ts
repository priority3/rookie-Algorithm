function removeStars(s: string): string {
  let res = ''
  let count = 0
  const len = s.length
  for (let i = len - 1; i >= 0; i--) {
    if (count !== 0) {
      s[i] === '*' ? count++ : count--
      continue
    }
    if (s[i] === '*')
      count++
    else
      res += s[i]
  }
  return res.split('').reverse().join('')
}
removeStars('leet**cod*e') // 'abcde'
