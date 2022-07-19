function translateNum(num: number): number {
  const str = num.toString()
  let cur = 1; let pre = 1

  for (let i = 2; i <= str.length; i++)
    [cur, pre] = [str.slice(i - 2, i) >= '10' && str.slice(i - 2, i) <= '26' ? cur + pre : cur, cur]
  return cur
}
console.log(translateNum(12258))
