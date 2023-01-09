# other solution: https://leetcode.com/problems/circle-and-rectangle-overlapping/solutions/563463/c-with-simple-explanation/
class Solution:

    def checkOverlap(self, radius: int, xCenter: int, yCenter: int, x1: int,
                     y1: int, x2: int, y2: int) -> bool:
        x1 -= xCenter
        x2 -= xCenter
        y1 -= yCenter
        y2 -= yCenter
        minx = min(x1 * x1, x2 * x2) if x1 * x2 > 0 else 0
        miny = min(y1 * y1, y2 * y2) if y1 * y2 > 0 else 0
        return minx + miny <= radius * radius
