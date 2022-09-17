class Solution:

    def countDaysTogether(self, arriveAlice: str, leaveAlice: str,
                          arriveBob: str, leaveBob: str) -> int:
        days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        for i in range(1, len(days)):
            days[i] += days[i - 1]

        def getDay(date):
            date = date.split('-')
            return days[int(date[0])-1] + int(date[1]) - 1

        arriveAlice = getDay(arriveAlice)
        leaveAlice = getDay(leaveAlice)
        arriveBob = getDay(arriveBob)
        leaveBob = getDay(leaveBob)
        print(arriveAlice, leaveAlice, arriveBob, leaveBob)
        start = max(arriveAlice, arriveBob)
        end = min(leaveAlice, leaveBob)

        return end - start + 1 if end >= start else 0


p = Solution()
print(p.countDaysTogether("08-06"
,"12-08"
,"02-04"
,"09-01"))
