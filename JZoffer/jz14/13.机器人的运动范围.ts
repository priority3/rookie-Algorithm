function movingCount(m: number, n: number, k: number): number {
  const set = new Set<Array<number>>()
  const dfs = (i: number, j: number, si: number, sj: number): number => {
    if (i < 0 || i >= m || j < 0 || j >= n || set.has([i, j]))
      return 0
    set.add([i, j])
    return 1
    + dfs(i + 1, j, (i + 1) % 10 ? si - 8 : si + 1, sj)
    + dfs(i - 1, j, (i - 1) % 10 ? si - 8 : si + 1, sj)
    + dfs(i, j + 1, si, (j + 1) % 10 ? sj - 8 : sj + 1)
    + dfs(i, j - 1, si, (j - 1) % 10 ? sj - 8 : sj + 1)
  }
  return dfs(0, 0, 0, 0)
}
