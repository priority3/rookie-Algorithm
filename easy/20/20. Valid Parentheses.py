class Solution:
    def isValid(self, s: str) -> bool:
      stack = []
      
      strs = list(s)
      
      def judgeIsMatch(cur:str,mat:str):
        isMatch = False
        match cur:
          case '(':
            isMatch = mat == ')'
          case '{':
            isMatch = mat == '}'
          case '[':
            isMatch = mat == ']'
          case _:
            isMatch = False
        return isMatch
            
        
        
      for a in strs:
        if a == '(' or a == '{' or a == '[':
          stack.append(a)
        else:
          if len(stack) == 0: return False
          top = stack.pop()
                      
          if judgeIsMatch(top,a) == False:
            return False
      return len(stack) == 0 
          
