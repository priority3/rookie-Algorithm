from typing import List


class Solution:

    def validateStackSequences(self, pushed: List[int],
                               popped: List[int]) -> bool:
        stack = []
        for pushn in pushed:
          stack.append(pushn)
          while (len(stack) and stack[-1] == popped[0]):
            stack.pop()
            popped.pop(0)
        print(len(stack) == 0)
        return len(stack) == 0

p = Solution()
p.validateStackSequences([1,2,3,4,5], [4,3,5,1,2])
