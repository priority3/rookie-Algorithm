from typing import List


class Solution:

    def goodIndices(self, nums: List[int], k: int) -> List[int]:
        res = []

        def getisGood(cur: int):
            if any(nums[i-1] < nums[i] for i in range(max(cur-k,1),cur)):
              return False
            if any(nums[i] > nums[i+1] for i in range(cur,min(cur+k,len(nums)-1))):
              return False
            return True

        for i in range(k, len(nums) - k):
            if getisGood(i):
                res.append(i)
        return res
p = Solution()
print(p.goodIndices([878724,201541,179099,98437,35765,327555,475851,598885,849470,943442],4))
