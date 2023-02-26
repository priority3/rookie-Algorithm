class Solution:

    def maxNumOfMarkedIndices(self, nums: List[int]) -> int:
        low, high, ans = 0, len(nums) // 2, 0
        nums.sort()
        while low < len(nums) // 2 and high < len(nums):
            if 2 * nums[low] <= nums[high]:
                ans, low, high = ans + 2, low + 1, high + 1
            else:
                high += 1
        return ans
