from typing import List
class Solution:
    def averageWaitingTime(self, customers: List[List[int]]) -> float:
      wait_time = 0
      # default is first come first serve
      start = 0
      # default is first come plus the prepare time
      end = 0
      
      length = len(customers)

      last_time = 0
      # start:1 end:3 wait_time:2
      # start:2 end:8 wait_time:6
      for i in range(0,length):
        last_time = max(customers[i][0],end)
        start = customers[i][0]
        end = max(last_time,start) + customers[i][1]
        
        
        wait_time += end - start

      
      return wait_time / length

p = Solution()
count = p.averageWaitingTime([[5,2],[5,4],[10,3],[20,1]])
print(count)
    
