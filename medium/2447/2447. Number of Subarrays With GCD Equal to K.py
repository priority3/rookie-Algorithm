import math
class Solution:
    def subarrayGCD(self, nums: List[int], k: int) -> int:
        c=0
        for i in range(len(nums)):
            x=nums[i]
            for j in range(i,len(nums)):
                x=math.gcd(x,nums[j])
                if x==k:
                    c+=1 
        return c 
        