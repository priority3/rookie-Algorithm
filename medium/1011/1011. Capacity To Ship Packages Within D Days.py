from typing import List


# binary search
class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
      def isFeasible(leastWeight):
        curWeight, curDays = 0, 0
        for weight in weights:
          if curWeight + weight > leastWeight:
            curWeight = weight
            curDays += 1
          else :
            curWeight += weight
        if curWeight > 0:
          curDays += 1
        return curDays <= days
      
      # pass
      maxWeight, sumWeight = max(weights), sum(weights)
      lf,rf,res = maxWeight,sumWeight,0
      
      while lf <= rf:
        mid = (lf+rf)//2
        if isFeasible(mid):
          res = mid
          rf = mid-1
        else:
          lf = mid+1
          
      return res
