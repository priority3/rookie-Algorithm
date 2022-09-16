const MOD = BigInt(1e9 + 7)
function rectangleArea(rs: number[][]): number {
  const list = new Array<number>()
  for (const info of rs) {
    list.push(info[0]); list.push(info[2])
  }
  list.sort((a, b) => a - b)
  let ans = 0n
  console.log(list)

  for (let i = 1; i < list.length; i++) {
    const a = list[i - 1]; const b = list[i]; const len = b - a
    if (len === 0)
      continue
    const lines = new Array<number[]>()
    for (const info of rs) {
      if (info[0] <= a && b <= info[2])
        lines.push([info[1], info[3]])
    }

    lines.sort((l1, l2) => {
      return l1[0] !== l2[0] ? l1[0] - l2[0] : l1[1] - l2[1]
    })
    console.log(lines)
    let tot = 0n; let l = -1; let r = -1
    for (const cur of lines) {
      console.log('🚀 ~ file: 850矩形面积.ts ~ line 27 ~ rectangleArea ~ cur', cur)
      if (cur[0] > r) {
        tot += BigInt(r - l)
        l = cur[0]; r = cur[1]
      }
      else if (cur[1] > r) {
        r = cur[1]
      }
    }
    tot += BigInt(r - l)
    ans += tot * BigInt(len)
    ans %= MOD
  }
  console.log(Number(ans))

  return Number(ans)
}

rectangleArea([
  [0, 0, 2, 2],
  [1, 0, 2, 3],
  [1, 0, 3, 1]],
)
