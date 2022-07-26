from typing import List

class Solution:
    def getLeastNumbers(self, arr: List[int], k: int) -> List[int]:
        def quick_sort(self,arr:List[int],left:int,right:int):
            if right <= left: return
            i , j = left, right
            while i < j:
                while i < j and arr[j] >= arr[left]:
                    j -= 1
                while i < j and arr[i] <= arr[left]:
                    i += 1
                arr[i] , arr[j] = arr[j] , arr[i]
            arr[i] , arr[left] = arr[left] , arr[i]
            if i > k : quick_sort(self,arr,left,i-1)
            if i < k : quick_sort(self,arr,i+1,right)
        quick_sort(self,arr,0,len(arr)-1)
        return arr[:k]
p = Solution()
arr = [7,8,9,1,25,4,6,3]
print(p.getLeastNumbers(arr,3))
