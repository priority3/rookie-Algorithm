from bisect import bisect_right
import collections
from typing import List


class Solution:
    def numMatchingSubseq(self, s: str, words: List[str]) -> int:
        pos = collections.defaultdict(list)
        for i,c in enumerate(s):
            pos[c].append(i)
        res = len(words)
        for i in words:
            if len(i) > len(s):
                res -= 1
                break
            p = -1
            for c in i:
                ps = pos[c]
                j = bisect_right(ps, p)
                if j == len(ps):
                    res -= 1
                    break
                p = ps[j]
        return res
    
    
if __name__ == '__main__':
    p = Solution()
    print(p.numMatchingSubseq("abcde",["a","bb","acd","ace"]))
                