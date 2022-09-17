from typing import List


class Solution:
    def matchPlayersAndTrainers(self, players: List[int], trainers: List[int]) -> int:
      res = 0
      players.sort()
      trainers.sort()
      start = 0
      for i in range(0,len(trainers)) :
        for j in range(start,len(players)) :
          if trainers[i] >= players[j] :
            res += 1
            start = j+1
          break
      return res
p = Solution()
print(p.matchPlayersAndTrainers([4,7,9],[8,2,5,8]))
