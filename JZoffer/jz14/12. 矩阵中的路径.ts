function exist(board: string[][], word: string): boolean {
  const m = board.length
  const n = board[0].length
  const target = word.length - 1
  const dfs = (count: number, i: number, j: number): boolean => {
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[count])
      return false
    if (count === target)
      return true
    // 标记
    board[i][j] = ''
    const res = dfs(count + 1, i + 1, j) || dfs(count + 1, i - 1, j) || dfs(count + 1, i, j + 1) || dfs(count + 1, i, j - 1)
    // 置回
    board[i][j] = word[count]
    return res
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(0, i, j))
        return true
    }
  }
  return false
}
console.log(exist(
  [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ]
  , 'ABCB'))
