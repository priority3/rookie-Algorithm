from functools import cmp_to_key


class Solution:

    def splitNum(self, num: int) -> int:
        arr = list(str(num))
        arr = sorted(arr, key=cmp_to_key(lambda x, y: int(x) - int(y)))
        lastEven = int(arr[-1])
        lastSingle = int(arr[-2])
        a,b = 1,1
        for i in range(len(arr)-2, 0, -1):
            if i % 2 == 0:
                lastEven = lastEven +  int(arr[i - 1]) * 10 ** a
                a += 1
            else:
                lastSingle = lastSingle + int(arr[i - 1]) * 10 ** b
                b += 1
        return lastEven+lastSingle


p = Solution()
print(p.splitNum(4325))
