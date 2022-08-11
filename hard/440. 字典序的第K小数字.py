from itertools import count


class Solution:

    def findKthNumber(self, n: int, k: int) -> int:

        def getCount(prefix: int, n: int) -> int:
            cur, next, count = prefix, prefix + 1, 0
            while cur <= n:
                count += min(n + 1, next) - cur
                cur *= 10
                next *= 10
            return count

        # 计数 前缀
        p, prefix = 1, 1
        while p < k:
            count = getCount(prefix, n)
            # 在当前前缀范围内
            if p + count > k:
              # 前缀下移
                prefix *= 10
                p += 1
            else:
              # 不在当前范围内
                p += count
                prefix += 1
        return prefix
print(Solution().findKthNumber(10, 3))
