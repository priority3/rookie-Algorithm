

class Solution:
    def champagneTower(self, poured: int, query_row: int, query_glass: int) -> float:
      row = [poured]
      
      for i in range(1,query_row+1):
        nextRow = [0] * (i+1)
        for j,value in enumerate(row):
          if value > 1:
            nextRow[j] += (value-1)/2
            nextRow[j+1] += (value-1)/2
        row = nextRow
      return min(1,row[query_glass])


