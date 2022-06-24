function countPrefixes(words: string[], s: string): number {
  let count = 0
  words.forEach(word => {
    if (word.startsWith(s)) {
      count++
    }
  })
  return count
}
console.log(countPrefixes(['a', 'b', 'c', 'ab', 'bc', 'abc'], 'abc'))
