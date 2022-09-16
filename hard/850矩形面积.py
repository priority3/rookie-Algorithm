from typing import List


class Solution:

    def rectangleArea(self, rectangles: List[List[int]]) -> int:
        ps = []
        for info in rectangles:
            ps.append(info[0])
            ps.append(info[2])
        ps.sort()
        res = 0
        for i in range(1, len(ps)):
            x1, x2, = ps[i - 1], ps[i]
            width = x2 - x1
            if width == 0: continue
            lines = []
            # 统计y 在x1 x2又贡献的
            for info in rectangles:
                if info[0] <= x1 and info[2] >= x2:
                    lines.append([info[1], info[3]])
            lines.sort()

            # 去重
            height = 0
            bottom = -1
            top = -1
            for line in lines:
                if line[0] > top:
                    height += (top - bottom)
                    bottom = line[0]
                    top = line[1]
                elif line[1] > top:
                    top = line[1]
            height += (top - bottom)
            res += height * width

        return res % 1000000007


s = Solution()
print(s.rectangleArea([[0,0,3,3],[2,0,5,3],[1,1,4,4]]))
