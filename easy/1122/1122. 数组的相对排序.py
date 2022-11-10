from functools import cmp_to_key
from typing import List


class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
      def comp(a,b):
        if a in arr2 and b in arr2:
          return arr1.index(a) - arr1.index(b)
        elif a in arr2 and b not in arr2:
          return -1
        elif b in arr2 and a not in arr2:
          return 1
        else:
          return a - b
      return sorted(arr1,key = cmp_to_key(comp))
