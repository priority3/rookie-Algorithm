from typing import List
class Solution:
    def maxSatisfaction(self, satisfaction: List[int]) -> int:
        satisfaction.sort(reverse=True)
        n = len(satisfaction)
        presum, res = 0, 0
        print(satisfaction)
        for i in range(n):
            presum += satisfaction[i]
            if presum < 0:
                break
            res += presum
            print(presum, res)
        return res
p = Solution()
p.maxSatisfaction([-1,-8,0,5,-9])
    
        # An Upvote will be encouraging
