function maxProfit(prices: number[]): number {
  let min = Number.MAX_VALUE
  let res = 0
  prices.forEach((item) => {
    if (item > min)
      res = Math.max(item - min, res)
    else
      min = Math.min(item, min)
  })
  return res
}
