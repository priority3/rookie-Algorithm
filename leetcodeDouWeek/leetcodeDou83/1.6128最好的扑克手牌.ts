function bestHand(ranks: number[], suits: string[]): string {
  const rankArr = Array(14).fill(0)
  const suitsArr = Array(4).fill(0)
  ranks.forEach((item) => {
    rankArr[item]++
  })
  suits.forEach((item) => {
    suitsArr[item.charCodeAt(0) - 97]++
  })
  // first

  if (suitsArr.includes(5))
    return 'Flush'
  if (rankArr.includes(3) || rankArr.includes(4))
    return 'Three of a Kind'
  if (rankArr.includes(2))
    return 'Pair'

  return 'High Card'
}

console.log(bestHand([13, 13, 13, 13, 3], ['d', 'b', 'c', 'a', 'a']))
