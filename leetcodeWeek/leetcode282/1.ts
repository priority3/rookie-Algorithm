// 补做

function prefixCount(words: string[], pref: string): number {
  let len: number = pref.length

  let count: number = 0
  words.forEach(item => {
    if (item.substring(0, len) === pref) {
      count++
    }
  })
  return count
}
