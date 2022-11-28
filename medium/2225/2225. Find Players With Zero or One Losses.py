
from typing import List


class Solution:
    def findWinners(self, matches: List[List[int]]) -> List[List[int]]:
      zero_loss = set()
      one_loss = set()
      more_loss = set()


      for winner,loser in matches:
        # add winner
        if (winner not in one_loss) and (winner not in more_loss):
          zero_loss.add(winner)

        # add or move loser
        if loser in zero_loss:
          zero_loss.remove(loser)
          one_loss.add(loser)
        elif loser in one_loss:
          one_loss.remove(loser)
          more_loss.add(loser)
        elif loser in more_loss:
          continue
        else: 
          one_loss.add(loser)
        
      return [sorted(list(zero_loss)),sorted(list(one_loss))]
        


p = Solution()
print(p.findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]))
        
        
        
