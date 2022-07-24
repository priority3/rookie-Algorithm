function movingCount(m: number, n: number, k: number): number {
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(0))
  const dfs = (i: number, j: number, si: number, sj: number): number => {
    if (i >= m || j >= n || k < si + sj || visited[i][j])
      return 0
    visited[i][j] = 1
    return 1
    + dfs(i + 1, j, (i + 1) % 10 ? si + 1 : si - 8, sj)
    + dfs(i, j + 1, si, (j + 1) % 10 ? sj + 1 : sj - 8)
  }
  return dfs(0, 0, 0, 0)
}
