from typing import List


class Solution:

    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
        n = len(days)
        dp = [float('inf')] * (n + 1)
        dp[0] = 0
        for i in range(1, n + 1):
            dp[i] = dp[i - 1] + costs[0]

            j = i - 1
            while j > 0 and days[i - 1] - days[j - 1] < 7:
                j -= 1
            dp[i] = min(dp[i], dp[j] + costs[1])
            j = i - 1
            while j > 0 and days[i - 1] - days[j - 1] < 30:
                j -= 1
            dp[i] = min(dp[i], dp[j] + costs[2])
        return dp[n]
