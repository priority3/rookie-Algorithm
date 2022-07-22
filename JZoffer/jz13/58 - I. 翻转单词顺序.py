class Solution:
    def reverseWords(self, s: str) -> str:
        arr = s.split(' ')[::-1]
        res = ''
        for i in range(len(arr)):
            if arr[i]:
                res += arr[i] + ' '
        return res.strip()