import heapq


class MedianFinder:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.A = []  # 小根堆
        self.B = []  # 大根堆

    def addNum(self, num: int) -> None:
        if len(self.A) == len(self.B):
            heapq.heappush(self.A, -heapq.heappushpop(self.B, -num))
        else:
            heapq.heappush(self.B, -heapq.heappushpop(self.A, num))
    def findMedian(self) -> float:
        return self.A[0] if len(self.A) != len(self.B) else (self.A[0] -
                                                             self.B[0]) / 2.0


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()
