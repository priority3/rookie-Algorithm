import heapq
from typing import List
class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
      max_heap = [-stone for stone in stones]
      
      heapq.heapify(max_heap)
      
      while len(max_heap) > 1:
        stone_1 = heapq.heappop(max_heap)
        stone_2 = heapq.heappop(max_heap)
        
        if stone_1 != stone_2:
          heapq.heappush(max_heap,-abs(stone_1-stone_2))
          
      return -max_heap[0] if len(max_heap) else 0
