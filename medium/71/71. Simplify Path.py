import re


class Solution:

    def simplifyPath(self, path: str) -> str:
        stack = []
        isLetter = re.compile(r'[\w\.]+')

        paths = path.split('/')
        print(paths)
        for p in paths:
            if p == '' or p == '.':
                continue
            if p == '..':
                len(stack) and stack.pop()
                continue
            if isLetter.match(p):
                stack.append(p)
        return '/'+'/'.join(stack)


p = Solution()
print(p.simplifyPath("/../"))
