function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>()
  let res = Number.MIN_VALUE
  let temp = 0
  for (let ind = 0; ind < s.length; ind++) {
    const i = map.get(s[ind]) ?? -1
    map.set(s[ind], ind)
    temp = temp < ind - i ? temp + 1 : ind - i
    res = Math.max(res, temp)
  }
  return res
}
