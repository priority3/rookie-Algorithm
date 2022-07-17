function numWays(n: number): number {
  const dep = Array(3).fill(0)
  dep[0] = 1
  dep[1] = 2
  for (let i = 2; i < n; i++) {
    dep[2] = (dep[0] + dep[1]) % (1e9 + 7)
    dep[0] = dep[1]
    dep[1] = dep[2]
  }
  return dep[0]
}
