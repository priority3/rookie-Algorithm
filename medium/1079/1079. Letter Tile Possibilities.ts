// https://leetcode.com/problems/letter-tile-possibilities/description/?envType=daily-question&envId=2025-02-17

function numTilePossibilities(tiles: string): number {
  const visited = Array(tiles.length).fill(false)
  const res = new Set()

  const bfc = (current:string) => {
    res.add(current)
    for (let i = 0; i < tiles.length; i++) {
      const seqTile =  current + tiles[i]
      if (!visited[i]) {
        console.log(visited,current,seqTile,i)
        visited[i] = true
        bfc(seqTile)
        visited[i] = false
      }
    }
  }
  
  bfc('')
  console.log(res)
  return res.size - 1

};

numTilePossibilities("AAAB") // 8
