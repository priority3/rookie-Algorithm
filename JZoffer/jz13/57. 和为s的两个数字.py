from inspect import trace


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        i , j = 0 , len(nums)-1
        while i < j:
            res = nums[i] + nums[j]
            if res > target :
                j -= 1
            elif res < target :
                i += 1
            else :
                return [nums[i],nums[j]]
            
            return []