function countHighestScoreNodes(parents: number[]): number {
  let children: number[][] = Array(parents.length)
    .fill(0)
    .map(item => [])
  let maxScore: number = 0
  let res: number = 0

  parents.forEach((item, index) => children[index].push(item))
  console.log(children)

  const dfs = (node: number): number => {
    let size: number = parents.length - 1
    let score: number = 1
    for (const c of children[node]) {
      let num: number = dfs(c)
      size -= num
      score *= num
    }
    // 除了左右节点 剩下得节点数量
    if (node !== 0) {
      score *= size
    }
    if (score === maxScore) {
      res++
    } else if (score > maxScore) {
      maxScore = score
      res = 1
    }
    return parents.length - size
  }
  dfs(0)
  return res
}

console.log(countHighestScoreNodes([-1, 2, 0, 2, 0]))
