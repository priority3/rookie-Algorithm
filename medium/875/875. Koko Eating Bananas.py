from math import ceil
import sys
from typing import List


class Solution:

    def isAet(self, piles: List[int], k: int, h: int) -> bool:
        if (k == 0): return False
        time = 0
        for pile in piles:
            time += ceil(pile / k)
            if time > h:
                return False
        return True

    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        # if(len(piles) == 1):
        #   return piles[0] // h + 1
        piles.sort()

        # the minimum k is the average of piles
        start = sum(piles) // h

        # the maximum k is the max of piles
        end = piles[-1]

        res = end

        while (start < end):
            mid = start + (end - start) // 2
            if self.isAet(piles, mid, h):
                end = mid
                res = min(res, mid)
            else:
                start = mid + 1
            mid = start + (end - start) // 2
        return res


p = Solution()
p.minEatingSpeed([312884470], 968709470)
