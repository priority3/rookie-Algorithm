class Solution:

    def findContinuousSequence(self, target: int) -> List[List[int]]:
        i, j, s, res = 1, 2, 3, []
        while i < j:
            if s == target:
                res.append(list(range(i, j + 1)))
            if s < target:
                j += 1
                s += j
            else:
                s -= i
                i += 1
        return res
