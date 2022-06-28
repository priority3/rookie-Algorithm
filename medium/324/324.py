from ast import List
from audioop import reverse
import typing

class Solution:
    def wiggleSort(self, nums) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        nums.sort(reverse = True)
        mid = len(nums)//2
        nums[::2], nums[1::2] = nums[mid:], nums[:mid]
        
    # wiggleSort([3,5,2,1,6,4])

p = Solution()
a = [1,2,2,3]
p.wiggleSort(a)
print(a)
