from typing import List
class Solution:
    def findKthPositive(self, arr: List[int], k: int) -> int:
      length = len(arr)
      
      # if k >= arr[length-1]:
      #   return k + arr[length-1] - arr[0] + 1
      if k < arr[0]:
        return k
      gap = k - arr[0] + 1
      start = arr[0]
      for i in range(1,length):
        if arr[i] - start <= gap:
          gap -= arr[i] - start - 1
          start = arr[i]
        else:
          break
      return start + gap
p = Solution()
print(p.findKthPositive([1,2,3], 5))
