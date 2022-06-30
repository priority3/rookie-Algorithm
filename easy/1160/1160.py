# str = 'abcka'
# print(str.count('a'))
import collections
from typing import Collection, List

class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        res = 0 
        cnt = collections.Counter(chars)
        for w in words:
            cnt_w = Collection.Counter(w)
            if all([cnt_w[i]<cnt[i] for i in w]):
                res += len(w)
        return res
# p = Solution()
# p.countCharacters(['a'],'a')
