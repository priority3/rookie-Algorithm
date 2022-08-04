class Solution:

    def singleNumbers(self, nums: List[int]) -> List[int]:
        x, y, n, m = 0, 0, 0, 1
        for i in nums:
            n ^= i
        while n & m == 0:
            m <<= 1
        # 根据x，y某一位不同来划分数组
        for i in nums:
            if i & m:
                x ^= i
            else:
                y ^= i
        return [x, y]
