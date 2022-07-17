function fib(n: number): number {
  const dep: number[] = Array(3).fill(0)
  dep[1] = 1
  for (let i = 0; i < n; i++) {
    dep[2] = (dep[0] + dep[1]) % (1e9 + 7)
    dep[0] = dep[1]
    dep[1] = dep[2]
  }
  return dep[2]
}
