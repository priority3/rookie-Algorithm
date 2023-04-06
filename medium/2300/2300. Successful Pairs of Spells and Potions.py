from typing import List


class Solution:

    def successfulPairs(self, spells: List[int], potions: List[int],
                        success: int) -> List[int]:
        potions.sort()
        plen = len(potions)
        res = []

        for spell in spells:
            # for j in range(plen):
            #     if spell * potions[j] >= success:
            #         count = plen - j
            #         break

            start, end = 0, plen - 1

            while start <= end:
                mid = (start + end) // 2
                if spell * potions[mid] >= success:
                    end = mid - 1
                else:
                    start = mid + 1
            res.append(plen - start if start < plen else 0)

        print(res)

        return res


p = Solution()
p.successfulPairs([3, 1, 2], [8, 5, 8], 16)
